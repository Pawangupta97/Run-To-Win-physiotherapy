const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Lightweight zero-dependency standard ZIP archive writer
class SimpleZip {
  constructor() {
    this.files = [];
  }

  addFile(name, contentBuffer) {
    const isBuffer = Buffer.isBuffer(contentBuffer);
    const buf = isBuffer ? contentBuffer : Buffer.from(contentBuffer);
    this.files.push({
      name: name.replace(/\\/g, '/'),
      data: buf,
      crc: crc32(buf),
      size: buf.length
    });
  }

  toBuffer() {
    const localHeaders = [];
    const centralHeaders = [];
    let offset = 0;

    for (const file of this.files) {
      const nameBuf = Buffer.from(file.name, 'utf8');
      
      // Local file header (30 bytes + filename length)
      const local = Buffer.alloc(30 + nameBuf.length);
      local.writeUInt32LE(0x04034b50, 0); // signature
      local.writeUInt16LE(20, 4); // version needed (2.0)
      local.writeUInt16LE(0, 6);  // general purpose bit flag
      local.writeUInt16LE(0, 8);  // compression method (0 = store)
      local.writeUInt16LE(0, 10); // last mod time
      local.writeUInt16LE(0, 12); // last mod date
      local.writeUInt32LE(file.crc, 14); // crc-32
      local.writeUInt32LE(file.size, 18); // compressed size
      local.writeUInt32LE(file.size, 22); // uncompressed size
      local.writeUInt16LE(nameBuf.length, 26); // file name length
      local.writeUInt16LE(0, 28); // extra field length
      nameBuf.copy(local, 30);

      localHeaders.push(local, file.data);

      // Central directory header (46 bytes + filename length)
      const central = Buffer.alloc(46 + nameBuf.length);
      central.writeUInt32LE(0x02014b50, 0); // signature
      central.writeUInt16LE(20, 4); // version made by
      central.writeUInt16LE(20, 6); // version needed
      central.writeUInt16LE(0, 8);  // bit flag
      central.writeUInt16LE(0, 10); // compression method (0 = store)
      central.writeUInt16LE(0, 12); // mod time
      central.writeUInt16LE(0, 14); // mod date
      central.writeUInt32LE(file.crc, 16); // crc-32
      central.writeUInt32LE(file.size, 20); // compressed size
      central.writeUInt32LE(file.size, 24); // uncompressed size
      central.writeUInt16LE(nameBuf.length, 28); // name length
      central.writeUInt16LE(0, 30); // extra length
      central.writeUInt16LE(0, 32); // comment length
      central.writeUInt16LE(0, 34); // disk start
      central.writeUInt16LE(0, 36); // internal attrs
      central.writeUInt32LE(0, 38); // external attrs
      central.writeUInt32LE(offset, 42); // local header offset
      nameBuf.copy(central, 46);

      centralHeaders.push(central);
      offset += local.length + file.data.length;
    }

    const centralStart = offset;
    const centralSize = centralHeaders.reduce((sum, b) => sum + b.length, 0);

    // End of central directory record (22 bytes)
    const eocd = Buffer.alloc(22);
    eocd.writeUInt32LE(0x06054b50, 0); // signature
    eocd.writeUInt16LE(0, 4); // disk number
    eocd.writeUInt16LE(0, 6); // disk with central dir
    eocd.writeUInt16LE(this.files.length, 8); // total entries this disk
    eocd.writeUInt16LE(this.files.length, 10); // total entries
    eocd.writeUInt32LE(centralSize, 12); // size of central directory
    eocd.writeUInt32LE(centralStart, 16); // offset of central directory
    eocd.writeUInt16LE(0, 20); // comment length

    return Buffer.concat([...localHeaders, ...centralHeaders, eocd]);
  }
}

// CRC32 implementation
function crc32(buf) {
  let crc = ~0;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (~crc) >>> 0;
}

const table = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
  }
  table[i] = c >>> 0;
}

// Recursively walk directory and add files
function addDirToZip(zip, baseDir, currentDir = '') {
  const fullPath = path.join(baseDir, currentDir);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const entry of entries) {
    const relPath = currentDir ? path.join(currentDir, entry.name) : entry.name;
    const itemPath = path.join(baseDir, relPath);

    if (entry.isDirectory()) {
      addDirToZip(zip, baseDir, relPath);
    } else if (entry.isFile()) {
      const fileData = fs.readFileSync(itemPath);
      // WordPress themes must have their folder name at root: run-to-win-physio/...
      const zipEntryName = path.join('run-to-win-physio', relPath);
      zip.addFile(zipEntryName, fileData);
      console.log('Added to ZIP:', zipEntryName);
    }
  }
}

const themeSourceDir = path.join(__dirname, '..', 'wordpress-theme', 'run-to-win-physio');
const outputPublicZip = path.join(__dirname, '..', 'public', 'downloads', 'run-to-win-physio.zip');
const outputThemeZip = path.join(__dirname, '..', 'wordpress-theme', 'run-to-win-physio.zip');

fs.mkdirSync(path.dirname(outputPublicZip), { recursive: true });

const zip = new SimpleZip();
addDirToZip(zip, themeSourceDir);

const zipBuffer = zip.toBuffer();
fs.writeFileSync(outputPublicZip, zipBuffer);
fs.writeFileSync(outputThemeZip, zipBuffer);

console.log(`Successfully generated WordPress Theme ZIP (${zipBuffer.length} bytes) at:\n- ${outputPublicZip}\n- ${outputThemeZip}`);

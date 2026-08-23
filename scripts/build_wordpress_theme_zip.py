#!/usr/bin/env python3
import os
import zipfile
import shutil

def build_wp_theme_zip():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    theme_source = os.path.join(base_dir, 'wordpress-theme', 'run-to-win-physio')
    public_downloads = os.path.join(base_dir, 'public', 'downloads')
    wp_theme_dir = os.path.join(base_dir, 'wordpress-theme')

    os.makedirs(public_downloads, exist_ok=True)
    os.makedirs(wp_theme_dir, exist_ok=True)

    public_zip_path = os.path.join(public_downloads, 'run-to-win-physio.zip')
    theme_zip_path = os.path.join(wp_theme_dir, 'run-to-win-physio.zip')

    print(f"Building WordPress theme package from: {theme_source}")

    # Files to exclude if any
    exclude_files = {'.DS_Store', 'Thumbs.db', '.git'}

    # Build ZIP with standard DEFLATE compression
    for target_zip_path in [public_zip_path, theme_zip_path]:
        if os.path.exists(target_zip_path):
            os.remove(target_zip_path)

        with zipfile.ZipFile(target_zip_path, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zipf:
            for root, dirs, files in os.walk(theme_source):
                # Filter out unwanted directories
                dirs[:] = [d for d in dirs if not d.startswith('.')]
                
                for file in files:
                    if file in exclude_files or file.startswith('.'):
                        continue
                    
                    full_path = os.path.join(root, file)
                    rel_path = os.path.relpath(full_path, theme_source)
                    # WordPress expects theme root folder: run-to-win-physio/style.css
                    arcname = os.path.join('run-to-win-physio', rel_path).replace('\\', '/')
                    
                    zipf.write(full_path, arcname)
                    print(f"  + Added: {arcname}")

        zip_size_mb = os.path.getsize(target_zip_path) / (1024 * 1024)
        print(f"Successfully created: {target_zip_path} ({zip_size_mb:.2f} MB)")

if __name__ == '__main__':
    build_wp_theme_zip()

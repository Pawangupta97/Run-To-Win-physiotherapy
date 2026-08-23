<?php
/**
 * Main Template File
 *
 * @package Run_To_Win_Physio
 */

get_header();
?>

<main id="primary" class="site-main py-16 bg-slate-50 min-h-[60vh]">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
    
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-extrabold text-slate-900 font-heading">Clinic Updates &amp; Articles</h1>
      <p class="text-sm text-slate-600">Evidence-based physiotherapy tips by Dr Pawan Gupta (PT)</p>
    </div>

    <?php if (have_posts()) : ?>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <?php while (have_posts()) : the_post(); ?>
          <article class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div class="space-y-2">
              <h2 class="text-xl font-bold text-slate-900 font-heading">
                <a href="<?php the_permalink(); ?>" class="hover:text-blue-600 transition"><?php the_title(); ?></a>
              </h2>
              <div class="text-xs text-slate-600 line-clamp-3">
                <?php the_excerpt(); ?>
              </div>
            </div>
            <a href="<?php the_permalink(); ?>" class="text-xs font-bold text-blue-600 hover:text-blue-700">Read Article &rarr;</a>
          </article>
        <?php endwhile; ?>
      </div>
      <div class="pt-6 text-center">
        <?php the_posts_pagination(); ?>
      </div>
    <?php else : ?>
      <div class="bg-white p-8 rounded-3xl border border-slate-200 text-center">
        <p class="text-slate-600">No articles published yet.</p>
      </div>
    <?php endif; ?>

  </div>
</main>

<?php
get_footer();

<?php
/**
 * Default Page Template
 *
 * @package Run_To_Win_Physio
 */

get_header();
?>

<main id="primary" class="site-main py-16 bg-slate-50 min-h-[60vh]">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <?php while (have_posts()) : the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6'); ?>>
        <header class="border-b border-slate-100 pb-6">
          <h1 class="text-3xl font-extrabold text-slate-900 font-heading"><?php the_title(); ?></h1>
        </header>
        <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; ?>
  </div>
</main>

<?php
get_footer();

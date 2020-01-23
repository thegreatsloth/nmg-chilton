<?php get_header();?>


<div class="container">
<h1 class="mb-3 mt-5"><?php the_title();?></h1>

<div>
<?php if (have_posts) : while(have_posts()) : the_post();?>

    <?php the_content();?>
<?php endwhile; endif;?>
</div>


    </div>
</div>


<?php get_footer();?>
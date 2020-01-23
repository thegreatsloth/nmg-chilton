<?php 

function load_stylesheets() 
{
    
    wp_register_style('montserrat', 'https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap',
    array(), false, 'all');
    wp_enqueue_style('montserrat');

    wp_register_style('saira-extra-condensed', 'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:600&display=swap',
    array(), false, 'all');
    wp_enqueue_style('saira-extra-condensed');

    wp_register_style('open-sans', 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap',
    array(), false, 'all');
    wp_enqueue_style('open-sans');

    wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css',
    array(), false, 'all');
    wp_enqueue_style('bootstrap');

    wp_register_style('style', get_template_directory_uri() . '/style.css',
    array(), 1.2, 'all');
    wp_enqueue_style('style');


}
function loadjs() {
   /*  wp_register_script('bootstrapjs', get_template_directory_uri() . '/js/bootstrap.min.js', '', 1, true);
    wp_enqueue_script('bootstrapjs');

    wp_register_script('bootstrapbundle', get_template_directory_uri() . '/js/bootstrap.bundle.min.js', '', 1, true);
    wp_enqueue_script('bootstrapbundle');

    wp_register_script('popper', get_template_directory_uri() . '/js/popper.js', '', 1, true);
    wp_enqueue_script('popper'); */


    wp_register_script('customjs', get_template_directory_uri() . '/js/scripts.js', '', 1, true);
    wp_enqueue_script('customjs');
}


add_action('wp_enqueue_scripts', 'load_stylesheets');
add_action('wp_enqueue_scripts', 'loadjs');

add_theme_support('menus');
add_theme_support('post-thumbnails');
add_theme_support('media-library');

register_nav_menus(

    array(
        'top-menu' => __('Top Menu','theme'),
        'footer-menu' => __('Footer Menu', 'theme'),
    )


);

add_image_size('smallest', 300, 300, true);
add_image_size('largest', 800, 800, true);


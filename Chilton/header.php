<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head();?>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    <link href="/wp-content/themes/Chilton/css/hamburger.min.css" rel="stylesheet">
</head>
<body <?php body_class();?>>
    
<header >
    <div class="container">
        <div class="row top-menu pt-3 hide-mobile">
            <div class="col-md-5 top-menu-social">
                <div class="row ">
                    <div class="col-12" >
                        
                        <div class="social-icon" onclick="openLink('#')">
                            <img src="/wp-content/themes/Chilton/img/facebook-logo.svg" alt="facebook icon">
                            <span>Like Us</span>
                        </div>
                        <div class="social-icon" onclick="openLink('#')">
                            <img src="/wp-content/themes/Chilton/img/twitter-logo.svg" alt="twitter icon">
                            <span>Follow Us</span>
                        </div>
                        <div class="social-icon" onclick="openLink('#')">
                            <img src="/wp-content/themes/Chilton/img/linkedin-logo.svg" alt="linkedin icon">
                            <span>Connect With Us</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 ml-auto top-menu-social">
                <div class="row">
                    <div class="col">
                        <div class="social-icon" onclick="openLink('tel:+12057555934')">
                            <img src="/wp-content/themes/Chilton/img/telephone-handle-silhouette.svg" alt="phone icon">
                            <span>(205) 755-5934</span>
                        </div>
                    </div>
                    <div class="col">
                        <?php echo do_shortcode('[gtranslate]'); ?>
                    </div>
                    
                

                </div>
            </div>
        </div>
        <div class="row divider hide-mobile"">
            <hr class="w-100"/>
        </div>
        <div class="row pb-3 main-menu-mobile">
            <div class="col-6 col-lg-3 float-left main-menu-logo">
            <a href="/"><img src="/wp-content/themes/Chilton/img/chilton-logo.png" ></a>
            </div>
            <div class="col-md-9 d-none d-lg-block main-menu-nav ">
                <?php wp_nav_menu (array('theme_location' => 'top-menu',
            'menu_class' => 'nav'));?>
            </div>
            <div class="col-3 offset-3 d-lg-none main-menu-mobile-btn" style="text-align: right;">
                <button class="hamburger hamburger--spin" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
    
    
    </div>

    <div class="mobile-menu-box">
        <div class="row"><?php wp_nav_menu (array('theme_location' => 'top-menu',
            'menu_class' => 'mobile-nav'));?></div>
    </div>



    
</header>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css%22%3E">

    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body>

<nav class="navbar navbar-light bg-secondary">
<a href="http://localhost:8080/new-projet/wordpress/"><img src="<?php echo get_bloginfo('template_directory') ?>/images/LOgo.png" alt="" width="100px" height="60px"></a>
<div class="main">

  <!-- Another variation with a button -->
 
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Rechercher Un Produit" aria-label="Search">
      <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </form>
   
  

</div>

<div class="d-md-flex bd-highlight">    
         <a href="#"><div class="text-light"></div></a>
         <a href="">  <button type="button" class="btn btn-outline-warning my-2 my-sm-0">Votre Adresse De Livraison</button>
        
         <a href="">  <button type="button" class="btn btn-outline-warning my-2 my-sm-0">Panier</button>
         <a href="connexion.php">  <button type="button" class="btn btn-outline-warning my-2 my-sm-0"> S'inscrire</button>
        
</div>
</select>
  </div>
</nav>
</nav>

  <!-- Menu header -->
  <nav class="navbar navbar-expand-md navbar-light" role="navigation">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-menu" aria-controls="#header-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <?php
                wp_nav_menu(array(
                    'theme_location'    => 'header_menu',
                    'depth'             => 2,
                    'container'         => 'div',
                    'container_class'   => 'collapse navbar-collapse',
                    'container_id'      => 'header-menu',
                    'menu_class'        => 'nav navbar-nav',
                    'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                    'walker'            => new WP_Bootstrap_Navwalker(),
                ));
            ?>
        </div>
    </nav>

<?php
  $url = $_GET['url'];
  $target = $_GET['target'];
  $prepend = '';
  if ($_GET['prepend']) {
    $prepend = $_GET['prepend'];
  }

  if (! $url) { echo "Please specify a URL"; exit; }
  if (! $target) { echo "Please specify a target"; exit; }

  require 'jsmin.php';
  require 'lessc.inc.php';

  $input = @file_get_contents($url) or die("Could not access file: $url");
  // $regexp = "<a\s[^>]*href=(\"??)([^\" >]*?)\\1[^>]*>(.*)<\/a>";
  $regexp = '/<script type="text\/javascript" src="(.*)"><\/script>/iU';
  $compiled_js = '';
  if(preg_match_all($regexp, $input, $matches, PREG_SET_ORDER)) {
    foreach($matches as $match) {

      $url = $match[1];
      if (substr($url,0,2) !== '..') { $url = $prepend.$url; }
      $js = @file_get_contents($url) or die("Could not access file: $url");


      $compiled_js .= ' /* '.$url.' */';
      if (strpos($js,'min')===-1) {
        $js = JSMin::minify($js);
      }

      $compiled_js .= ' '.$js.';';


      // $match[2] = link address
      // $match[3] = link text
    }
  }

  $less = new lessc;
  $regexp = '/<link rel="stylesheet\/less" type="text\/css" href="(.*)?bust=1" \/>/iU';
  $compiled_less = '';
  if(preg_match_all($regexp, $input, $matches, PREG_SET_ORDER)) {
    foreach($matches as $match) {

      $url = $match[1];
      $url = array_shift(explode("?", $url));
      // if (substr($url,0,1) !== '/') { $url = substr($url,1); }
      if (substr($url,0,2) !== '..') { $url = $prepend.$url; }
      $css = @file_get_contents($url) or die("Could not access file: $url");

      // $js = JSMin::minify($js);


      $css = $less->compile($css);
      // $css = JSMin::minify($css);
      $compiled_less .= ' '.$css;


      // $match[2] = link address
      // $match[3] = link text
    }
  }

  file_put_contents($target.'/js/compiled.js', $compiled_js);
  file_put_contents($target.'/css/compiled.css', $compiled_less);
  echo 'All done.<br /><a href="'.$target.'"></a>';



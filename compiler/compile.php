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
  require 'cssmin-v3.0.1-minified.php';

  $input = @file_get_contents($url) or die("Could not access file: $url");
  function getJS($input,$prepend) {
    $regexp = '/<script type="text\/javascript" src="(.*)"><\/script>/iU';
    $compiled_js = '';
    if(preg_match_all($regexp, $input, $matches, PREG_SET_ORDER)) {
      foreach($matches as $match) {

        $url = $match[1];
        if (substr($url,0,2) !== '..') { $url = $prepend.$url; }
        $js = @file_get_contents($url) or die("Could not access file: $url");


        $compiled_js .= ' /* '.$url.' */';
        // echo strpos($url,'min').' ';
        // echo $url.' ';
        // echo strpos($url,'min').' ';
        if (strpos($url,'min')===false) {

          $js = JSMin::minify($js);
        }

        $compiled_js .= ' '.$js.';';


        // $match[2] = link address
        // $match[3] = link text
      }
    }
    return $compiled_js;
  }

  function getCSS($input,$prepend) {
    $less = new lessc;
    $regexp = '/<link rel="stylesheet\/less" type="text\/css" href="(.*)?bust=2" \/>/iU';
    $compiled_less = '';
    if(preg_match_all($regexp, $input, $matches, PREG_SET_ORDER)) {
      foreach($matches as $match) {

        $url = $match[1];
        $url = array_shift(explode("?", $url));

        // if (substr($url,0,1) !== '/') { $url = substr($url,1); }
        if (substr($url,0,2) !== '..') { $url = $prepend.$url; }
        $css = @file_get_contents($url) or die("Could not access file: $url");



        // $compiled_less .= ' /* '.$url.' */';
        $css = $less->compile($css);
        if (1) {
          $css = CssMin::minify($css);
        }
        // $css = JSMin::minify($css);
        $compiled_less .= ' '.$css;


        // $match[2] = link address
        // $match[3] = link text
      }
    }
    return $compiled_less;
  }


  function dirToArray($dir) {

     $result = array();

     $cdir = scandir($dir);
     foreach ($cdir as $key => $value)
     {
        if (!in_array($value,array(".","..")))
        {
           if (is_dir($dir . DIRECTORY_SEPARATOR . $value))
           {
              $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value);
           }
           else
           {
              $result[] = $value;
           }
        }
     }

     return $result;
  }
  function writeTemplates($files,$prepend='',$dir='',$html='') {

    foreach($files as $key=>$file) {
      if ($file != '.' && $file != '..' && $file != '.DS_Store') {

        if (is_array($file)) {
          $file_url = $prepend.'/'.$key;
          $html .= writeTemplates($file,$file_url,$key,$html);
        } else {
          $file_url = $prepend.'/'.$file;
          $file_contents = @file_get_contents($file_url) or die("Could not access file: ".$file_url);
          $file_id = array_shift(explode('.',$file));
          if ($dir) {
            $id = array($dir,$file_id);
          } else {
            $id = array($file_id);
          }
          $id = implode('-',$id);
          $html .= '<script type="text/template" id="'.$id.'">'.$file_contents.'</script>';
          // echo $file_contents."<br />";
        }
      }
    }
    return $html;
  }
  function includeTemplates($dir) {

    $templates = writeTemplates(dirToArray($dir),$dir);
    return $templates;
  }
  function getProductionFile($input,$js,$css,$prepend) {
    $regexp = '/<link rel="stylesheet\/less" type="text\/css" href="(.*)?bust=2" \/>/iU';
    $input = preg_replace($regexp,'',$input);
    $regexp = '/<script type="text\/javascript" src="(.*)"><\/script>/iU';
    $input = preg_replace($regexp,'',$input);
    $input = preg_replace('/<\/body><\/html>/','',$input);


    $input .= includeTemplates($prepend.'js/templates');

    $input = explode('
',$input);
    $input = implode(' ',$input);
    $input = explode('  ',$input);
    $input = implode('',$input);
    if (0) {
      $input .= '<link rel="stylesheet" type="text/css" href="css/compiled.css" />';
      $input .= '<script type="text/javascript" src="js/compiled.js"></script>';
    } else {
      $css = preg_replace('/url\(..\/images/iU','url(images',$css);
      $input .= '<style type="text/css">'.$css.'</style>';

      $input .= '<script type="text/javascript">'.$js.'</script>';
    }



    $input .= '</body></html>';


    return $input;
  }

  $js = getJS($input,$prepend);
  $css = getCSS($input,$prepend);
  // file_put_contents($target.'/js/compiled.js', $js);
  // file_put_contents($target.'/css/compiled.css', $css);
  file_put_contents($target.'index-production.html', getProductionFile($input,$js,$css,$prepend));
  echo 'All done';//.<br /><a href="'.$target.'"></a>';



<?php
$xml = '<?xml version="1.0" encoding="UTF-8"?><Response><Say>Calling '.$_REQUEST['name'].'.</Say><Dial callerId="2039412726">'.$_REQUEST['number'].'</Dial></Response>';
echo $xml;
/*
mail('thekevinscott@gmail.com','twilio response',$xml.'
'.print_r($_POST,true).print_r($_REQUEST,true));
*/
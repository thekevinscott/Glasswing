<?php
error_reporting(E_ALL);

if(isset($_GET['ajax']) && $_GET['ajax']) {
	header('Content-Type: application/javascript');
}

// @start snippet
include 'Services/Twilio/Capability.php';

$accountSid = 'AC8429cf8025f5bc453a14221ff37cd221';
$authToken  = 'bfb0032e2164a839781bdf859bde2850';
$appSid = 'APc0834a874e124035b643ef80f0866239';



$capability = new Services_Twilio_Capability($accountSid, $authToken);

// give this app permissions
$capability->allowClientOutgoing($appSid);

// generate token that lasts for 5 minutes
$token = $capability->generateToken(300);
if (isset($_GET['callback']) && $_GET['callback']) {

	echo $_GET['callback'].'({token :"'.$token.'"});';
	// echo $_GET['callback'].'();';
} else {
	echo $token;
}
<?php
$r=base64_decode($_GET['r']);

header("Location: {$r}");

?>

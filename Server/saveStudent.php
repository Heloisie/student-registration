<?php
$body = file_get_contents("php://input");

$line=$body."\n";

$file= fopen("file.txt",'a+');

fwrite($file,$line);

fclose($file);
?>
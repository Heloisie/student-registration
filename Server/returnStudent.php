<?php
$fileContent=file("file.txt",FILE_IGNORE_NEW_LINES);
    
echo json_encode($fileContent);
?>

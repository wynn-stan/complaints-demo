<?php
    //set environment variable to have the username and password
    $servername  = 'localhost';
    $username = 'root';
    $password = 'Pas1.hard.mysql';

    $PDO;

    try {
        $PDO = new PDO("mysql:host=$servername;dbname=spot_project", $username, $password);
        
        // set the PDO error mode to exception
        $PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected To Database";
    } 
    catch (PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }

?>
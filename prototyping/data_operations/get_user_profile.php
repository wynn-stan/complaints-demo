<?php

/*
    get user_profile
*/

$database_connect_handler = './connect.php';
include $database_connect_handler; 

    if($_SERVER['REQUEST METHOD'] == 'POST'){
        
        try {

            $sql = "
                SELECT * 
                FROM users
                WHERE users.user_id = ?
            ";

            $sql_arguments = array($_SESSION['user_id']);

            $PDO->prepare($sql);
            $results = $PDO->exec();

            if($results !== 'FALSE'){
                echo "/n--------/nSuccess/n---------/n";

            }

        }catch (PDOException $e){
            echo "Error: " . $e->getMessage();
        }

    }
?>
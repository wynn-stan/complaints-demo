<?php

$database_connect_handler = './connect.php';
include $database_connect_handler; 

//Check if user is signed in.
//Send data to the database

    if($_SERVER['REQUEST METHOD'] == 'POST'){
        if($_SESSION['is_signed_in'] == 'TRUE'){

            try {

                $sql = "
                    INSERT INTO posts 
                    (heading, post_description, posted_by)
                    VALUES
                    (?, ?, ?)
                ";
    
                $sql_arguments = array($_SESSION['user_id']);
    
                $PDO->prepare($sql);
                $results = $PDO->exec($sql_arguments);
    
                if($results !== 'FALSE'){
                    echo "/n--------/nSuccess/n---------/n";
                }
    
            }catch (PDOException $e){
                echo "Error: " . $e->getMessage();
            }
        }
    }

?>
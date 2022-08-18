<?php

/**
 *  Get All User Messages
 *      sql-query "Select * From messages 
 *                 Where user_id = sent_from "
 */

$database_connect_handler = './connect.php';
include $database_connect_handler; 

    if($_SERVER['REQUEST METHOD'] == 'POST'){
        
        try {

            $sql = "
                SELECT * 
                FROM messages
                WHERE ? = messages.sent_from
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
?>
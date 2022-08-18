<?php

/**
 * Handle sign in data
 *      The sign in data is in the $POST[...] variable
 *      connect to the database
 *      Send the data to the database in the correct_order
 */

$signin_handler_route = './signin_h.php';
include $signin_handler_route; 

    if($_SERVER['REQUEST METHOD'] == 'POST'){
        
        try {

            $sql = "
                SELECT user_email, user_password
                FROM users
                WHERE users.user_email = ? AND users.user_password = ?
            ";

            $hashed_password = sha1($POST['password']);
            $sql_arguments = array($POST['email'], $hashed_password);

            $PDO->prepare($sql_arguments);
            $results = $PDO->exec();

            if($results !== 'FALSE'){
                echo "/n--------/nSuccess/n-------/n";
            }

        }catch (PDOException $e){
            echo "Error: " . $e->getMessage();
        }

    }
?>
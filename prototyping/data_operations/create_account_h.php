<?php
include './connect_to_database.php';

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        //submit the data to the database server
        
        try {
            $sql = "
            INSERT INTO users 
            (username, fullname, user_email, user_password)
            VALUES
            (?,?,?,?)
            ";

            $PDO->prepare($sql);

            $sql_arguments = array($POST['username'], $POST['fullname'], $POST['email'], $POST['new_password']);

            $results = $PDO->exec($sql);

            if($results !== "FALSE"){
                echo "Successfully created account";
            }

        }catch (PDOException $e){
            echo "Error: " . $e->getMessage();
        }
    }
?>
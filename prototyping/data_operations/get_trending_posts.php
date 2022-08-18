<?php

/*
    get trending posts
        get all posts and order by most viewed posts with most upvotes.
*/

$database_connect_handler = './connect.php';
include $database_connect_handler; 

    if($_SERVER['REQUEST METHOD'] == 'POST'){
        
        try {

            $sql = "
                SELECT * 
                FROM posts
                ORDER BY posts.post_views DESC, posts.post.post_upvotes DESC
            ";

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
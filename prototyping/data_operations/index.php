<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Operation Views</title>

    <style type="text/css">
        form {
            background-color: cornflowerblue;
            padding: 5px;
            margin: 5px;
            display: inline-block;
        }
    </style>
</head>
<body>
    
    <section class="signin">
        <form action="./create_account_h.php" method="post">

            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
            </div>

            <div>
                <label for="name">username</label>
                <input type="text" name="username" id="username">
            </div>

            <div>
                <label for="name">email</label>
                <input type="text" name="email" id="email">
            </div>
            
            <div>
                <label for="name">new password</label>
                <input type="password" name="new_password" id="new_password">
            </div>

            <div>
                <label for="name">verify password</label>
                <input type="text" name="verify_password" id="verify_password">
            </div>
            
            <button type="submit">Create Account</button>
        </form>

        <form action="./signin_h.php" method="post">
            <div>
                <label for="email">Email</label>
                <input type="text" name="email" id="email">
            </div>

            <div>
                <label for="password">password</label>
                <input type="password" name="password" id="password">
            </div>
        </form>

        <form action="./get_trending_posts.php" method="get">
            <input type="button" value="Get Trending">
        </form>

        <form action="./get_all_user_messages.php" method="get">
            <input type="button" value="Get Messages">
        </form>

        <form action="./get_user_profile.php" method="get">
            <input type="button" value="Get User Profile">
        </form>

        <form action="./get_user_followed_projects.php" method="get">
            <input type="button" value="Get Trending">
        </form>

    </section>

</body>
</html>
//Create a signin in component and export it
//component structure would be the html structure
//className willbe className
//import bootstrap into the html project

//create a signin component.
// what is structure of the html version
// convert to react component
// export it. 



import React from 'react';

function SignIn_Page(props){

    return (
        <main className="d-flex flex-sm-row justify-content-center align-items-center">

        <div className="">
            <img id="authPageBg" data-src="authPageBg.svg" className="w-100" src="" alt="" />
        </div>

        <form action="home.html" method="post" className="container row">
            <img src="" alt="" />

            <div id="log_in_header" className="text-center">
                Login 
            </div>

            <input type="email" name="email" id="email" placeholder="Email" className="my-3" />

            <input type="password" name="password" id="password" placeholder="Password" className="my-2" />

            <p className="my-2"><a href="/forgotPassword" className="forgotPassword">Forgot password?</a></p>

            <button className="my-2 py-1" type="submit">Log In</button>

            <p className="my-2">Not a member? <a href="sign-up.html" className="">Register</a></p>

        </form>

    </main>
    )

} 


export default SignIn_Page;
 /*
<!--
    Import the bootstrap 
    
    create the layout of the page
        the main container/a main tag
            the backgrond image container
            the form contianer
            the logo
            the log in
            the email
            the password
            the login btn
            the forgot password text
            the not a member, sign up section

    set the background color of the input to a darker value
    set the inputs to be in coloumn forms instead of rows
    set the width of the login button to be as much as the inputs
    set the login header to the center of the form
    remove the border from the inputs
    set the form container and the bg image to be space around, 
        in the case where it is just mobile, md, set it to center

    set the background color of the button to the theme color
    set the Register link to the theme color

    set the forgot password link to greyed out
    set the logo image to the middle of the page

    import the javascript which handles the image lazy loading

    nssgst5376122

    when on large/desktop views, let the background image and form be on the horizontal axis and aligned
        set the their main container to row 

    set bg image and form to the center of te page, vertically

-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>

    <link rel="stylesheet" href="bootstrap.min.css">

    <style type="text/css">

       
    </style>
</head>
<body>

    
    



    <script src="bg-lazy-loading.js"></script>
    
</body>
</html>

*/
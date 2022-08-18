const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger = require('./logger').createLogger();
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');

//configure environment variables
dotenv.config();

 /**
     * Get access to post data
     *     decode urlencoded request data
     *     decode json encoded request data
     *     access the data through request.body
*/

//configure request data decoding
app.use(express.urlencoded());
app.use(express.json());

// configure server to allow requests from https://localhost:3003, the front-end server
const corsConfig = {
    origin: '*',
    optionSuccessStatus: 200,
    methods: ['GET', 'POST']    
}

app.use(cors(corsConfig));

// configure authentication route Handling
app.post("/authenticate", authenticateUser);

async function authenticateUser(req,res){

    /**
     * Connect To The Database
     * Get the email and password from the request
     * Check if user is valid
     *      If yes, generate JWT
     *              send the jwt in response header
     *      If no, send false in response body
     */

    console.log(req);

   let mysqlConnection = await connectToDatabase();

    let {email, password} = req.query;

    let validUser = await isUserValid(mysqlConnection, email, password);

    if(validUser){
        const jwt = generateJWT(validUser);
        res.setHeader('Authorization',`Bearer ${jwt}`); 
    }else {
        res.send("false")
    }
        res.end();

}

async function connectToDatabase(){

    const mysql = require('mysql2/promise');

    let mysqlConnection;

    let connectionOptions = {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        database: process.env.DBNAME,
        password: process.env.DBPASSWORD
    }

    try {

        mysqlConnection = await mysql.createConnection(connectionOptions);
        logger.info("Mysql Connection Established");   

    }catch(err){
        logger.error(err);
    }

    return mysqlConnection;
}

async function isUserValid(mysqlConnection, email, password){
    
    //check against database for validity
        //query database
        //check results
        //if err, throw
        //  no results, return false
        // a result, return the result

    let rows, columns;

    let sqlValidateRequest = `
        SELECT user_id
        FROM users
        WHERE users.user_email = ? AND users.user_password = ?
    `;

    try {

        [rows,columns] = await mysqlConnection.query(

            sqlValidateRequest, 
    
            [email, password],
    
        );

    }catch(err){
        
        logger.error("MYSQL QUERY ERROR " + err);

    }

    if(rows.length == 0){
        return false
    }else {
        return rows[0];
    }
    

}

//generateJWT
function generateJWT(payload){

    // create the jwt header, payload, and signature
    // return that
    let secret = process.env.JWT_SECRET;

    let jwtPayload = {
        "user_id":`"${payload.user_id}"`
    }

    let jwtSignature = jsonwebtoken.sign(
        jwtPayload, 
        secret
    );

    return jwtSignature;

}

/*
    log out user
        //set client cookie to expiry to 1970 or old date
        //redirect user to homepage
*/

app.get("/logout_user", logout_user);

function logout_user(req, res){

    let expiryDate = new Date(2000, 1, 1);
    expiryDate = expiryDate.toUTCString();

    res.setHeader("Set-cookie", `expiry=${expiryDate}`);
    res.end();
}

// start server
app.listen(process.env.PORT, (err) => {

    if(err) throw err;

    logger.info("Server Started on Port " + process.env.PORT)

});



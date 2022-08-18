/* 

 check against database for validity
    if valid, generate a jwt for the user
    send the jwt to user in header
      
*/

const router = require('express').Router();
const mysql = require('mysql');
let jwt;

// connect to mysql database
let connectionOptions = {
        host:"localhost",
        name:"root",
        password:`${process.env.DBPASSWORD}`
}

let mysqlConnection = mysql.createConnection(connectionOptions);

mysqlConnection.connect(
        (err) => {

        if(err) throw err;

        console.log("Mysql Connection Established");

    }
);

//get user login credentials from request
router.post('/authenticateUser', 
    (req, res) => {

        requestBody = req.body();

        let validUser = isUserValid(requestBody);

        if(validUser){
            res.append("Authorization", `Bearer ${jwt}`);
        }else {
            res.send('fail');
        }

        res.end();
    }
)


function isUserValid(email, password){

    //check against database for validity
        //query database
        //check results

    let sqlValidateRequest = `
        SELECT user_id
        FROM users
        WHERE users.email = ${email} AND users.password = ${password}
    `

    mysqlConnection.query(
        sqlValidateRequest, 
        (err, results) => {

            if(err) throw err;

            if(results.length == 0){

                let responseBody = "fail";
                return;

            }else {

                let payload = results[0];
                jwt = generateJWT();
                return;
                
            }
        }
    );
}

function generateJWT(){

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

   


// send a post request to the authenticate endpoint
/**
 // in the post request, add the usermail and password.
 // server does it's thing
// check for a response in the body
//      body response is false, throw an errow, incorrect email and password. 
//      otherwise, expect a jwt token, 
//      save the token in a cookie
//          document.cookie = "jwt=[token]; expires=[expiry]"
// 
// for all subsequent requests, add as authorization the jwt.
// server does it's thing and yep.

// if you have a valid, it means you're signed in.
// if you don't have a valid token, it means you're signed out
// for your token to become invalid, you have to log out. 
//      then effectively delete the token from the cache/cookie

/* 
    support for when cookie support on browser is turned off
*/

let authenticateURI = "http://localhost:3002/authenticate";
let authenticateFetchConfig = {
    method: "POST",
    headers: {
        'Content-type':'application/json'
    },
    body: {
        'email':'root@root.com',
        'password':'root'
    }
}

async function requestAuthentication(uri, fetchConfig){
    
    try {

        let response = await fetch(uri, fetchConfig);
        let responseData = await response.text();

        if(responseData == 'fail'){
            throw new Error("User not found");
        }else {
            let jwt = responseData;
            saveToCookie("jwt", jwt);
        }

    }catch(err){
        console.log(err);
    }
    
}

function saveToCookie(key, value){
//      save the token in a cookie
//          set all token expiry to December 31st, or until they log out
//              new Date(2022, 12, 31)
//          document.cookie = "jwt=[token]; expires=[expiry]"
// 
    let cookie_expiry = new Date(2022, 12, 31);
    cookie_expiry = cookie_expiry.toUTCString();

    document.cookie = `${key}=${value}; expires=${cookie_expiry};`;

}

requestAuthentication(authenticateURI, authenticateFetchConfig);
USE spot_project;

/*CREATE*/

INSERT INTO users
(
    user_name,
    full_name, 
    user_bio,
    user_email,
    user_password,
    profile_pic_url
)

 VALUES (
    "wynnstan",
    "Winston Lamptey",
    "My BIO",
    "x@gmail.com",
    "xhz",
    "sde.com/userl"
)

/*RETRIEVE*/
SELECT username, profile_pic_url
FROM users

/*UPDATE*/
UPDATE TABLE users
SET columnX = ValueX
Where condition

/*DELETE*/
DELETE FROM users
WHERE condition


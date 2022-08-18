USE spot_project;

/*CREATE*/

INSERT INTO projects
(
    project_name,
    bio, 
    project_profile_pic,
    created_by
)

 VALUES (
    "XRAY GUN",
    "Project BIO",
    "sde.com/sde",
    users.x
)

/*RETRIEVE*/
SELECT project_name, profile_pic_url
FROM users

/*UPDATE*/
UPDATE TABLE users
SET columnX = ValueX
Where condition

/*DELETE*/
DELETE FROM users
WHERE condition


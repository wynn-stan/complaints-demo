DROP DATABASE spot_project;
CREATE DATABASE spot_project;
USE spot_project;

/*one column can have multiple values, how to build that*/

CREATE TABLE users (
    user_name varchar(25) NOT NULL UNIQUE,
    full_name varchar(25) NOT NULL,
    user_id int NOT NULL AUTO_INCREMENT,
    user_bio varchar(255),
    user_email varchar(50) NOT NULL,
    user_password varchar(255) NOT NULL,
    profile_pic_url varchar(255),
    PRIMARY KEY (user_id)
);

CREATE TABLE posts (
    post_id int NOT NULL AUTO_INCREMENT,
    heading varchar(255) NOT NULL UNIQUE,
    post_description varchar(255),
    posted_by int,
    post_time varchar(5),
    post_views int NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (posted_by) REFERENCES users(user_id)
);

CREATE TABLE post_upvotes (
    post_id int NOT NULL AUTO_INCREMENT,
    upvoted_by int,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (upvoted_by) REFERENCES users(user_id)
);

CREATE TABLE projects (
    project_name varchar(25) NOT NULL UNIQUE,
    bio varchar(255) NOT NULL,
    profile_pic_url varchar(255),
    project_id int NOT NULL AUTO_INCREMENT,
    created_by int,
    PRIMARY KEY (project_id),
    FOREIGN KEY (created_by) REFERENCES users(user_id)
);

CREATE TABLE user_project_following (
	user_id int NOT NULL,
    project_id int NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

CREATE TABLE departments (
    dept_name varchar(25) NOT NULL,
    dept_id int NOT NULL AUTO_INCREMENT,
    profile_pic_url varchar(255),
    PRIMARY KEY (dept_id)
);

CREATE TABLE messages (
    sent_from int,
    sent_to int,
    content varchar(255),
    is_sent BOOL,
    is_read BOOL,
    message_id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (message_id),
    FOREIGN KEY (sent_from) REFERENCES users(user_id),
    FOREIGN KEY (sent_to) REFERENCES users(user_id)
);

CREATE TABLE post_comment (
    comment_id int NOT NULL AUTO_INCREMENT,
    comment_by int NOT NULL, 
    comment_to int NOT NULL,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (comment_to) REFERENCES posts(post_id),
    FOREIGN KEY (comment_by) REFERENCES users(user_id)
);

CREATE TABLE post_comment_replies (
    reply_id int NOT NULL AUTO_INCREMENT,
    reply_by int NOT NULL, 
    reply_to int NOT NULL,
    PRIMARY KEY (reply_id),
    FOREIGN KEY (reply_to) REFERENCES post_comment(comment_id),
    FOREIGN KEY (reply_by) REFERENCES users(user_id)
)
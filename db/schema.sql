/* This is burger database definition. It includes table holding burger names and statuses if they are eaten or not.

   Written by Alex Chalyy on 4/26/2019. */

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
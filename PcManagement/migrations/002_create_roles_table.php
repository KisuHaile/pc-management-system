<?php

return [
    "up" => function($db) {
        $db->exec("
            CREATE TABLE IF NOT EXISTS Roles (
                Role_ID INT AUTO_INCREMENT PRIMARY KEY,
                Role_name VARCHAR(50) UNIQUE NOT NULL
            );
        ");

        $db->exec("
            INSERT INTO Roles (Role_name)
            VALUES ('SuperAdmin'), ('Admin'), ('Staff'), ('Student'), ('Guest');
        ");
    },

    "down" => function($db) {
        $db->exec("DROP TABLE IF EXISTS Roles");
    }
];
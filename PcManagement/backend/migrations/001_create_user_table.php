<?php

return [
    "up" => function($db) {
        $db->exec("
            CREATE TABLE IF NOT EXISTS User (
                R_No INT AUTO_INCREMENT PRIMARY KEY,
                User_ID INT NOT NULL UNIQUE,
                User_name VARCHAR(100) NOT NULL,
                Gender VARCHAR(10),
                Phone VARCHAR(20),
                status ENUM('Active','Inactive','Suspended') DEFAULT 'Active',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        ");
    },

    "down" => function($db) {
        $db->exec("DROP TABLE IF EXISTS User");
    }
];
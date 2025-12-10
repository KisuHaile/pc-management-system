<?php

return [
    "up" => function($db) {
        $db->exec("
            CREATE TABLE IF NOT EXISTS Permission (
                permission_id INT AUTO_INCREMENT PRIMARY KEY,
                permission_name VARCHAR(100) NOT NULL,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        ");
    },

    "down" => function($db) {
        $db->exec("DROP TABLE IF EXISTS Permission");
    }
];
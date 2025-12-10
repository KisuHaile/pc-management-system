<?php

return [
    "up" => function($db) {
        $db->exec("
            CREATE TABLE IF NOT EXISTS PC (
                pc_serial VARCHAR(50) PRIMARY KEY,
                pc_name VARCHAR(100) NOT NULL,
                pc_model VARCHAR(100),
                additional_info TEXT,
                register_date DATE DEFAULT CURRENT_DATE,
                User_ID INT NOT NULL,
                FOREIGN KEY (User_ID) REFERENCES User(User_ID) ON DELETE CASCADE
            );
        ");
    },

    "down" => function($db) {
        $db->exec("DROP TABLE IF EXISTS PC");
    }
];
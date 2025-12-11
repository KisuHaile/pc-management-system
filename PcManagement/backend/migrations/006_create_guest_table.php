<?php

return [
    "up" => function($db) {
        $db->exec("
            CREATE TABLE IF NOT EXISTS Guest (
                Guest_ID INT AUTO_INCREMENT PRIMARY KEY,
                User_ID INT UNIQUE NOT NULL,
                Visit_Reason VARCHAR(255),
                FOREIGN KEY (User_ID) REFERENCES User(User_ID)
                    ON DELETE CASCADE ON UPDATE CASCADE
            );
        ");
    },

    "down" => function($db) {
        $db->exec("DROP TABLE IF EXISTS Guest");
    }
];
<?php

return [
    "up" => function($db) {

        $sql = "
        CREATE TABLE IF NOT EXISTS Staff (
            Staff_ID INT AUTO_INCREMENT PRIMARY KEY,
            User_ID INT UNIQUE NOT NULL,
            Job_Title VARCHAR(100),
            Office VARCHAR(50),
            FOREIGN KEY (User_ID) REFERENCES User(User_ID)
                ON DELETE CASCADE
                ON UPDATE CASCADE
        );
        ";

        $db->exec($sql);
    },
    "down" => function($db) {
        $db->exec("DROP TABLE IF EXISTS Staff");
    }
];
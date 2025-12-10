<?php

return [
    "up" => function($db) {
        $db->exec("
            CREATE TABLE IF NOT EXISTS User_Role (
                UR_ID INT AUTO_INCREMENT PRIMARY KEY,
                User_ID INT NOT NULL,
                Role_ID INT NOT NULL,
                FOREIGN KEY (User_ID) REFERENCES User(User_ID) ON DELETE CASCADE ON UPDATE CASCADE,
                FOREIGN KEY (Role_ID) REFERENCES Roles(Role_ID) ON DELETE CASCADE ON UPDATE CASCADE,
                UNIQUE (User_ID)
            );
        ");
    },

    "down" => function($db) {
        $db->exec("DROP TABLE IF EXISTS User_Role");
    }
];
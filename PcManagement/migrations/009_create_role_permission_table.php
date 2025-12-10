<?php

return [
    "up" => function($db) {
        $db->exec("
            CREATE TABLE IF NOT EXISTS Role_Permission (
                role_id INT NOT NULL,
                permission_id INT NOT NULL,
                PRIMARY KEY (role_id, permission_id),
                FOREIGN KEY (role_id) REFERENCES Roles(Role_ID)
                    ON DELETE CASCADE ON UPDATE CASCADE,
                FOREIGN KEY (permission_id) REFERENCES Permission(permission_id)
                    ON DELETE CASCADE ON UPDATE CASCADE
            );
        ");
    },

    "down" => function($db) {
        $db->exec("DROP TABLE IF EXISTS Role_Permission");
    }
];
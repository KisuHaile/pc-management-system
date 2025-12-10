<?php

return [
    "up" => function($db) {
        $db->exec("DROP TRIGGER IF EXISTS check_student_role;");
        $db->exec("DROP TRIGGER IF EXISTS check_staff_role;");
        $db->exec("DROP TRIGGER IF EXISTS check_guest_role;");

        $db->exec("
            CREATE TRIGGER check_student_role BEFORE INSERT ON Student
            FOR EACH ROW
            BEGIN
                IF NOT EXISTS (
                    SELECT 1 
                    FROM User_Role ur
                    JOIN Roles r ON ur.Role_ID = r.Role_ID
                    WHERE ur.User_ID = NEW.User_ID
                    AND r.Role_name = 'Student'
                ) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='User is not assigned the Student role';
                END IF;
            END;
        ");

        $db->exec("
            CREATE TRIGGER check_staff_role BEFORE INSERT ON Staff
            FOR EACH ROW
            BEGIN
                IF NOT EXISTS (
                    SELECT 1 
                    FROM User_Role ur
                    JOIN Roles r ON ur.Role_ID = r.Role_ID
                    WHERE ur.User_ID = NEW.User_ID
                    AND r.Role_name = 'Staff'
                ) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='User is not assigned the Staff role';
                END IF;
            END;
        ");

        $db->exec("
            CREATE TRIGGER check_guest_role BEFORE INSERT ON Guest
            FOR EACH ROW
            BEGIN
                IF NOT EXISTS (
                    SELECT 1 
                    FROM User_Role ur
                    JOIN Roles r ON ur.Role_ID = r.Role_ID
                    WHERE ur.User_ID = NEW.User_ID
                    AND r.Role_name = 'Guest'
                ) THEN
                    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='User is not assigned the Guest role';
                END IF;
            END;
        ");
    },

    "down" => function($db) {
        $db->exec("DROP TRIGGER IF EXISTS check_student_role;");
        $db->exec("DROP TRIGGER IF EXISTS check_staff_role;");
        $db->exec("DROP TRIGGER IF EXISTS check_guest_role;");
    }
];
<?php

// Load .env file
$env = parse_ini_file(__DIR__ . '/../.env');

$host = $env['DB_HOST'];
$db_name = $env['DB_NAME'];
$user = $env['DB_USER'];
$pass = $env['DB_PASS'];

try {
    $db = new PDO("mysql:host=$host;dbname=$db_name", $user, $pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

class Database {
    public static function connect() {
        global $db;
        return $db;
    }
}

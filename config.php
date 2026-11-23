<?php
$servername = "localhost";  // If your database is on the same server
$username = "root";         // Your MySQL username (default is root)
$password = "";             // Your MySQL password (default is empty)
$dbname = "college_placement"; // Your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

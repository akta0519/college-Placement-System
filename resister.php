<?php
require 'config.php'; // Include the database connection script

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_type = $_POST['user_type'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password for security

    // Prepare an SQL query to insert the new user
    $stmt = $conn->prepare("INSERT INTO users (user_type, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $user_type, $email, $password);

    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close(); // Close the statement
    $conn->close(); // Close the connection
}
?>

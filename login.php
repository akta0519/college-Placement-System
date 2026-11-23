<?php
session_start(); // Start the session to store user information
require 'config.php'; // Include the database connection script

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_type = $_POST['user_type'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare an SQL query to fetch the user with the provided email and user type
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND user_type = ?");
    $stmt->bind_param("ss", $email, $user_type);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Store user information in the session
            $_SESSION['user_type'] = $user['user_type'];
            $_SESSION['email'] = $user['email'];
            header("Location: dashboard.php"); // Redirect to the dashboard
            exit();
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with this email!";
    }

    $stmt->close(); // Close the statement
    $conn->close(); // Close the connection
}
?>

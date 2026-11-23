<?php
session_start(); // Start session to access session variables

if (!isset($_SESSION['email'])) {
    header("Location: login.html"); // Redirect if not logged in
    exit();
}

// Display user-specific content
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>
    <h1>Welcome, <?php echo $_SESSION['email']; ?>!</h1>
    <p>Your role is: <?php echo $_SESSION['user_type']; ?></p>
    <a href="logout.php">Logout</a>
</body>
</html>

-- Alter the existing `users` table to add more fields
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    student_id VARCHAR(50) NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    college_year VARCHAR(20) NOT NULL,
    semester INT NOT NULL,
    college_name VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    user_type ENUM('student', 'admin', 'college_management') NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

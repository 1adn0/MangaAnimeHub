CREATE TABLE manga (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100),
    genre VARCHAR(50),
    status ENUM('completed', 'ongoing') NOT NULL,
    rating DECIMAL(3, 2) DEFAULT 0,
    description TEXT
);

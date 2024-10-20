CREATE TABLE anime (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    studio VARCHAR(100),
    episodes INT,
    genre VARCHAR(50),
    status ENUM('completed', 'ongoing') NOT NULL,
    rating DECIMAL(3, 2) DEFAULT 0,
    description TEXT
);

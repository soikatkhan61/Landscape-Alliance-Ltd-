CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userType ENUM('admin','user','moderator') DEFAULT "moderator",
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isVerified int(1) DEFAULT 0,
    verfication_id int(8) DEFAULT -1,
    profilePics varchar(200) DEFAULT "/uploads/avater.jpg",
    createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
);

CREATE TABLE IF NOT EXISTS contact (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name varchar (50) not null,
    email VARCHAR(255),
    phone VARCHAR(15) NOT NULL,
    message varchar(1000),
    respond ENUM('yes','no'),
    createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
);
// src/db/create-db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  try {
    // اتصال به MySQL بدون انتخاب دیتابیس
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });

    // ایجاد دیتابیس اگر وجود نداشته باشد
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    console.log(`Database ${process.env.DB_NAME} created or already exists.`);
    
    // استفاده از دیتابیس
    await connection.query(`USE ${process.env.DB_NAME}`);

    // ایجاد جدول news
    await connection.query(`
      CREATE TABLE IF NOT EXISTS news (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        content TEXT,
        image VARCHAR(255) NOT NULL,
        date VARCHAR(50) NOT NULL,
        time VARCHAR(50) NOT NULL,
        category ENUM('رویداد', 'خبر', 'آموزش', 'اطلاعیه') NOT NULL,
        featured BOOLEAN DEFAULT FALSE,
        tags JSON,
        author VARCHAR(255),
        files JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('Table news created or already exists');

    // ایجاد جدول services
    await connection.query(`
      CREATE TABLE IF NOT EXISTS services (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        icon VARCHAR(50) NOT NULL,
        color VARCHAR(50) NOT NULL,
        gradient VARCHAR(100) NOT NULL,
        slug VARCHAR(100) NOT NULL UNIQUE,
        features JSON NOT NULL,
        requirements JSON NOT NULL,
        pricing JSON,
        stats JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('Table services created or already exists');

    // ایجاد جدول welfare_services
    await connection.query(`
      CREATE TABLE IF NOT EXISTS welfare_services (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        icon VARCHAR(50) NOT NULL,
        color VARCHAR(50) NOT NULL,
        gradient VARCHAR(100) NOT NULL,
        benefits JSON NOT NULL,
        eligibility JSON NOT NULL,
        stats JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('Table welfare_services created or already exists');

    // اضافه کردن جداول بیشتر در اینجا...

    await connection.end();
    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}

setupDatabase();
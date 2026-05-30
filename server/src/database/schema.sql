-- ========================================
-- STUDENTS TABLE
-- Official student list imported/managed by admins
-- Supports both PUP school email and personal email
-- ========================================

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,

  student_number VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(150) NOT NULL,

  school_email VARCHAR(150) UNIQUE,
  personal_email VARCHAR(150) UNIQUE,

  course VARCHAR(100),
  year_level VARCHAR(50),
  section VARCHAR(50),

  status ENUM('active', 'inactive') DEFAULT 'active',

  clerk_user_id VARCHAR(100) UNIQUE DEFAULT NULL,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
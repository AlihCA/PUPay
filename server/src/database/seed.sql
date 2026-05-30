-- ========================================
-- TEST STUDENT DATA
-- Replace these emails with real Clerk test account emails
-- ========================================

INSERT INTO students (
  student_number,
  full_name,
  school_email,
  personal_email,
  course,
  year_level,
  section,
  status
)
VALUES
(
  '2024-00001',
  'Test Student One',
  'student1@iskolarngbayan.pup.edu.ph',
  'student1@gmail.com',
  'BSIT',
  '3rd Year',
  'BSIT 3A',
  'active'
),
(
  '2024-00002',
  'Test Student Two',
  NULL,
  'student2@gmail.com',
  'BSIT',
  '3rd Year',
  'BSIT 3A',
  'active'
)
ON DUPLICATE KEY UPDATE
  full_name = VALUES(full_name),
  school_email = VALUES(school_email),
  personal_email = VALUES(personal_email),
  course = VALUES(course),
  year_level = VALUES(year_level),
  section = VALUES(section),
  status = VALUES(status);
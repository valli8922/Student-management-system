-- Insert into Department
INSERT INTO Department VALUES (1, 'CSE');

-- Insert into Students
INSERT INTO Students VALUES 
(101, 'Ravi', 'Kumar', 'ravi@gmail.com', '9876543210', 90, 'Vizag', 1);

-- Insert into Courses
INSERT INTO Courses VALUES 
(201, 'DBMS'),
(202, 'DSA');

-- Enroll student into course
INSERT INTO Enrollments VALUES (1, 101, 201);

-- Add grade
INSERT INTO Grades VALUES (1, 101, 201, 'A');

--------------------------------------------------

-- View all students
SELECT * FROM Students;

-- View students with department
SELECT s.first_name, s.last_name, d.department_name
FROM Students s
JOIN Department d ON s.department_id = d.department_id;

-- View student enrollments
SELECT s.first_name, c.course_name
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id;

-- View student grades
SELECT s.first_name, c.course_name, g.grade
FROM Students s
JOIN Grades g ON s.student_id = g.student_id
JOIN Courses c ON g.course_id = c.course_id;

-- Update student attendance
UPDATE Students
SET attendance = 95
WHERE student_id = 101;

-- Delete student record
DELETE FROM Students
WHERE student_id = 101;

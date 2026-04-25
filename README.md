# Student Management System (DBMS Project)

## 📌 Description
This project is a web-based Student Management System designed to efficiently store, manage, and retrieve student data using Database Management System (DBMS) concepts. It demonstrates the use of relational databases along with frontend and backend integration.

---

## 🚀 Features
- Add new student records  
- View student details  
- Update student information  
- Delete student records  
- Manage course enrollments  
- Store and retrieve student grades  
- Department-wise student organization  

---

## 🛠️ Technologies Used
- HTML  
- CSS  
- JavaScript  
- Node.js  
- SQL (Relational Database)  

---

## 🧠 Database Design

### Tables:
- **Students**
- **Department**
- **Courses**
- **Enrollments**
- **Grades**

### Relationships:
- Each student belongs to a department  
- Students enroll in courses  
- Each enrollment links a student and a course  
- Grades are assigned per student per course  

---

## 🗂️ Project Structure

student-management-system/
│
├── index.html → Frontend interface
├── style.css → Styling
├── app.js → Client-side logic
├── server.js → Backend server
├── schema.sql → Table creation
├── queries.sql → SQL operations
└── README.md → Project documentation


---

## ⚙️ Database Schema Overview

### Students Table
- student_id (Primary Key)  
- first_name  
- last_name  
- email  
- phone  
- attendance  
- address  
- department_id (Foreign Key)  

### Department Table
- department_id (Primary Key)  
- department_name  

### Courses Table
- course_id (Primary Key)  
- course_name  

### Enrollments Table
- enrollment_id (Primary Key)  
- student_id (Foreign Key)  
- course_id (Foreign Key)  

### Grades Table
- grade_id (Primary Key)  
- student_id (Foreign Key)  
- course_id (Foreign Key)  
- grade  

---

## 🔍 Sample Queries

### View Students with Department
```sql
SELECT s.first_name, c.course_name
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id;
View Student Grades
SELECT s.first_name, c.course_name, g.grade
FROM Students s
JOIN Grades g ON s.student_id = g.student_id
JOIN Courses c ON g.course_id = c.course_id;
▶️ How to Run the Project
Install Node.js

Clone the repository:

git clone https://github.com/your-username/student-management-system.git

Navigate to project folder:

cd student-management-system

Install dependencies:

npm install

Start the server:

node server.js

Open browser and go to:

http://localhost:3000

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"studentdb"
});

db.connect(err=>{
if(err) console.log(err);
else console.log("Database Connected");
});

// GET ALL STUDENTS
app.get("/students",(req,res)=>{

const sql=`
SELECT s.student_id,
s.first_name,
s.last_name,
s.email,
s.phone,
s.attendance,
s.address,
d.department_name
FROM students s
JOIN department d
ON s.department_id=d.department_id
`;

db.query(sql,(err,result)=>{
if(err) res.send(err);
else res.json(result);
});

});

// TOTAL STUDENTS
app.get("/totalStudents",(req,res)=>{

db.query("SELECT COUNT(*) AS total FROM students",(err,result)=>{
if(err) res.send(err);
else res.json(result);
});

});

// COURSES
app.get("/courses",(req,res)=>{

db.query("SELECT * FROM courses",(err,result)=>{
if(err) res.send(err);
else res.json(result);
});

});

// DEPARTMENTS
app.get("/departments",(req,res)=>{

db.query("SELECT * FROM department",(err,result)=>{
if(err) res.send(err);
else res.json(result);
});

});

// ADD STUDENT
// ADD STUDENT
app.post("/addStudent",(req,res)=>{

const {first_name,last_name,email,phone,attendance,address,department_id}=req.body;

const sql="INSERT INTO students(first_name,last_name,email,phone,attendance,address,department_id) VALUES (?,?,?,?,?,?,?)";

db.query(sql,[first_name,last_name,email,phone,attendance,address,department_id],(err)=>{
if(err) res.send(err);
else res.send("Student Added Successfully");
});

});

// SEARCH STUDENT
app.get("/student/:id",(req,res)=>{

db.query("SELECT * FROM students WHERE student_id=?",[req.params.id],(err,result)=>{
if(err) res.send(err);
else res.json(result);
});

});

// UPDATE STUDENT
app.put("/updateStudent/:id",(req,res)=>{

const {first_name,last_name,email,phone,attendance}=req.body;

const sql="UPDATE students SET first_name=?,last_name=?,email=?,phone=?,attendance=? WHERE student_id=?";

db.query(sql,[first_name,last_name,email,phone,attendance,req.params.id],(err)=>{
if(err) res.send(err);
else res.send("Student Updated Successfully");
});

});

// DELETE STUDENT
app.delete("/deleteStudent/:id",(req,res)=>{

db.query("DELETE FROM students WHERE student_id=?",[req.params.id],(err)=>{
if(err) res.send(err);
else res.send("Student Deleted Successfully");
});

});
// GET GRADES
app.get("/grades",(req,res)=>{

db.query("SELECT * FROM grades",(err,result)=>{
if(err) res.send(err);
else res.json(result);
});

});

app.listen(8080,()=>{
console.log("Server running on http://localhost:8080");
});

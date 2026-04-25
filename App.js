window.onload=function(){
loadTotalStudents();
}

function loadTotalStudents(){

fetch("http://localhost:8080/totalStudents")
.then(res=>res.json())
.then(data=>{
document.getElementById("totalStudents").innerText=data[0].total;
});

}

// ALL STUDENTS
function showAllStudents(){

fetch("http://localhost:8080/students")
.then(res=>res.json())
.then(data=>{

let html="<h2>All Students</h2>";

html+=`
<table>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Attendance</th>
<th>Address</th>
<th>Department</th>
<th>Edit</th>
</tr>
`;

data.forEach(s=>{

html+=`
<tr>

<td>${s.student_id}</td>
<td>${s.first_name} ${s.last_name}</td>
<td>${s.email}</td>
<td>${s.phone}</td>
<td>${s.attendance}%</td>
<td>${s.address}</td>
<td>${s.department_name}</td>

<td>
<button onclick="editStudent(${s.student_id})">✏</button>
</td>

</tr>
`;

});

html+="</table>";

content.innerHTML=html;

});

}

// ADD STUDENT
function showAdd(){

content.innerHTML=`

<h2>Add Student</h2>

<input id="fname" placeholder="First Name"><br>
<input id="lname" placeholder="Last Name"><br>
<input id="email" placeholder="Email"><br>
<input id="phone" placeholder="Phone"><br>
<input id="attendance" placeholder="Attendance"><br>
<input id="address" placeholder="Address"><br>
<input id="dept" placeholder="Department ID"><br>

<button onclick="addStudent()">Add</button>

`;

}

function addStudent(){

fetch("http://localhost:8080/addStudent",{

method:"POST",
headers:{'Content-Type':'application/json'},

body:JSON.stringify({

first_name:fname.value,
last_name:lname.value,
email:email.value,
phone:phone.value,
attendance:attendance.value,
address:address.value,
department_id:dept.value

})

})
.then(res=>res.text())
.then(data=>{
alert(data);
loadTotalStudents();
});

}

// SEARCH
function showSearch(){

content.innerHTML=`

<h2>Search Student</h2>

<input id="sid" placeholder="Student ID">
<button onclick="searchStudent()">Search</button>

<div id="result"></div>

`;

}

function searchStudent(){

fetch("http://localhost:8080/student/"+sid.value)
.then(res=>res.json())
.then(data=>{

let html="<table>";

html+=`
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Attendance</th>
<th>Address</th>
</tr>
`;

data.forEach(s=>{

html+=`
<tr>
<td>${s.student_id}</td>
<td>${s.first_name} ${s.last_name}</td>
<td>${s.email}</td>
<td>${s.phone}</td>
<td>${s.attendance}%</td>
<td>${s.address}</td>
</tr>
`;

});

html+="</table>";

result.innerHTML=html;

});

}

// DELETE STUDENT PAGE
function showDelete(){

content.innerHTML=`

<h2>Delete Student</h2>

<input id="did" placeholder="Student ID">

<button onclick="deleteStudent()">Delete</button>

`;

}

// DELETE
function deleteStudent(){

fetch("http://localhost:8080/deleteStudent/"+did.value,{
method:"DELETE"
})
.then(res=>res.text())
.then(data=>{
alert(data);
loadTotalStudents();
});

}

// EDIT
function editStudent(id){

content.innerHTML=`

<h2>Update Student</h2>

<input id="uid" value="${id}" readonly><br>
<input id="ufname" placeholder="First Name"><br>
<input id="ulname" placeholder="Last Name"><br>
<input id="uemail" placeholder="Email"><br>
<input id="uphone" placeholder="Phone"><br>
<input id="uattendance" placeholder="Attendance"><br>

<button onclick="updateStudent()">Update</button>

`;

}

// UPDATE
function updateStudent(){

fetch("http://localhost:8080/updateStudent/"+uid.value,{

method:"PUT",
headers:{'Content-Type':'application/json'},

body:JSON.stringify({

first_name:ufname.value,
last_name:ulname.value,
email:uemail.value,
phone:uphone.value,
attendance:uattendance.value

})

})
.then(res=>res.text())
.then(data=>alert(data));

}

function toggleMenu(){

let menu=document.getElementById("menuOptions");

menu.style.display =
menu.style.display === "block" ? "none" : "block";

}

// VIEW DEPARTMENTS
function showDepartments(){

fetch("http://localhost:8080/departments")
.then(res => res.json())
.then(data => {

let html="<h2>Departments</h2>";

html+=`
<table>
<tr>
<th>Department ID</th>
<th>Department Name</th>
</tr>
`;

data.forEach(d=>{

html+=`
<tr>
<td>${d.department_id}</td>
<td>${d.department_name}</td>
</tr>
`;

});

html+="</table>";

content.innerHTML=html;

});

}

// VIEW COURSES
function showCourses(){

fetch("http://localhost:8080/courses")
.then(res => res.json())
.then(data => {

let html="<h2>Courses</h2>";

html+=`
<table>
<tr>
<th>Course ID</th>
<th>Course Name</th>
</tr>
`;

data.forEach(c=>{

html+=`
<tr>
<td>${c.course_id}</td>
<td>${c.course_name}</td>
</tr>
`;

});

html+="</table>";

content.innerHTML=html;

});

}
// VIEW GRADES
// VIEW GRADES
function showGrades(){

fetch("http://localhost:8080/grades")
.then(res=>res.json())
.then(data=>{

let html="<h2>Student Grades</h2>";

html+=`
<table>
<tr>
<th>Grade ID</th>
<th>Student ID</th>
<th>Course ID</th>
<th>Grade</th>
</tr>
`;

data.forEach(g=>{

html+=`
<tr>
<td>${g.grade_id}</td>
<td>${g.student_id}</td>
<td>${g.course_id}</td>
<td>${g.grade}</td>
</tr>
`;

});

html+="</table>";

content.innerHTML=html;

});

}

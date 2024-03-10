// Sample student data structure
// Sample student data structure
let students = [];

function addStudent() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const semester = document.getElementById('semester').value;
    const year = document.getElementById('year').value;
    const branch = document.getElementById('branch').value;
    const collegeId = document.getElementById('collegeId').value;

    // Create student object
    const student = {
        name: name,
        age: age,
        semester: semester,
        year: year,
        branch: branch,
        collegeId: collegeId
    };

    // Add student to the array
    students.push(student);

    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('semester').value = '';
    document.getElementById('year').value = '';
    document.getElementById('branch').value = '';
    document.getElementById('collegeId').value = '';

    // Update the student list
    updateStudentList();
}

function updateStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    // Populate the student list
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${student.name}</strong> (Age: ${student.age}, Semester: ${student.semester}, Year: ${student.year}, Branch: ${student.branch}, College ID: ${student.collegeId}) <button onclick="removeStudent(${index})">Remove</button>`;
        studentList.appendChild(li);
    });
}

function removeStudent(index) {
    // Remove student from the array
    students.splice(index, 1);

    // Update the student list
    updateStudentList();
}

// Initial update
updateStudentList();

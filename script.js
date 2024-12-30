// Check if data already exists in localStorage
let studentDetails = JSON.parse(localStorage.getItem('students')) || [];

// Function to display student details (existing code remains)
function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    studentDetails.forEach(student => {
        const studentItem = document.createElement('div');
        studentItem.classList.add('student-item');
        studentItem.innerHTML = `
            <h

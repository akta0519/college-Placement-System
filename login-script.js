document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform basic validation
    if (userType && username && password) {
        if (userType === 'student') {
            window.location.href = 'student.html'; 
        } else if (userType === 'admin') {
            window.location.href = 'admin.html'; 
        } else if (userType === 'college_management') { // Ensure consistency in value
            window.location.href = 'college magemetn.html'; // Update to the correct file name
        }
    }
});

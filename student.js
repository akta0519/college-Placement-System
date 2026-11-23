
// Handle Profile Edit (for demonstration)
document.getElementById('editProfile').addEventListener('click', function () {
    alert("Profile editing is under development.");
});

// Handle Change Password
document.getElementById('changePassword').addEventListener('click', function () {
    alert("Password change functionality is under development.");
});

// Search for Jobs
document.getElementById('jobSearch').addEventListener('keyup', function () {
    let filter = this.value.toUpperCase();
    let jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach(function (job) {
        let company = job.querySelector('h3').textContent.toUpperCase();
        if (company.indexOf(filter) > -1) {
            job.style.display = '';
        } else {
            job.style.display = 'none';
        }
    });
});

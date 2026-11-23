let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Sample data for upcoming events, recent placements, and announcements
const upcomingEvents = [
    { title: "Campus Recruitment Drive", date: "15th March", link: "event1.html" },
    { title: "Guest Lecture by Industry Expert", date: "20th March", link: "event2.html" },
    { title: "Career Fair", date: "25th March", link: "event3.html" }
];

const recentPlacements = [
    { company: "TCS", position: "Software Engineer", date: "1st March", link: "placement1.html" },
    { company: "Infosys", position: "Data Analyst", date: "5th March", link: "placement2.html" },
    { company: "Wipro", position: "System Engineer", date: "10th March", link: "placement3.html" }
];

const announcements = [
    { text: "Placement orientation will be held on 10th April.", link: "announcement1.html" },
    { text: "Mock interviews scheduled for 15th April.", link: "announcement2.html" },
    { text: "Resume building workshop on 20th April.", link: "announcement3.html" }
];

// Function to populate upcoming events
function populateUpcomingEvents() {
    const eventList = document.getElementById('upcomingEvents');
    upcomingEvents.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.innerHTML = `<a href="${event.link}"><strong>${event.title}</strong> - ${event.date}</a>`;
        eventList.appendChild(eventItem);
    });
}

// Function to populate recent placements
function populateRecentPlacements() {
    const placementList = document.getElementById('recentPlacements');
    recentPlacements.forEach(placement => {
        const placementItem = document.createElement('div');
        placementItem.innerHTML = `<a href="${placement.link}"><strong>${placement.company}</strong> - ${placement.position} (${placement.date})</a>`;
        placementList.appendChild(placementItem);
    });
}

// Function to populate announcements
function populateAnnouncements() {
    const announcementList = document.getElementById('announcements');
    announcements.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.innerHTML = `<a href="${announcement.link}">${announcement.text}</a>`;
        announcementList.appendChild(announcementItem);
    });
}

// Call the functions to populate the sections
populateUpcomingEvents();
populateRecentPlacements();
populateAnnouncements();

// Array of skills to be displayed
const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Linux'];

// Get the skills list element
const skillsList = document.getElementById('skills-list');

// Add each skill to the skills list
skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Array of projects to be displayed
const projects = [
    { name: 'Project 1', category: 'web', description: 'A web development project.' },
    { name: 'Project 2', category: 'mobile', description: 'A mobile app project.' },
    { name: 'Project 3', category: 'design', description: 'A design project.' },
    { name: 'Project 4', category: 'web', description: 'Another web development project.' }
];

// Get the projects grid element
const projectsGrid = document.getElementById('projects-grid');

// Add each project to the projects grid
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p><strong>Category:</strong> ${project.category}</p>
        <p>${project.description}</p>
    `;
    projectsGrid.appendChild(projectCard);
});

// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Get the body element
const body = document.body;

// Add click event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');
    // Save the current theme preference to localStorage
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});

// Check for saved theme preference
if (localStorage.getItem('dark-mode') === 'true') {
    // If dark mode was previously selected, apply it
    body.classList.add('dark-mode');
}

// Update the copyright year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Get all role spans
const roles = document.querySelectorAll('.role');

// Add event listeners for each role
roles.forEach(role => {
    role.addEventListener('mouseenter', () => {
        role.style.transform = 'scale(1.2)';
        role.style.display = 'inline-block'; // This helps with the transform
        role.style.transition = 'transform 0.3s ease';
    });

    role.addEventListener('mouseleave', () => {
        role.style.transform = 'scale(1)';
        role.style.transition = 'transform 0.3s ease';
    });
});

// Adjust animation scale based on screen size
function getScaleValue() {
    return window.innerWidth <= 480 ? 1.05 : 1.1;
}

// Update existing animation code
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('profile-image')) {
                entry.target.style.transform = `scale(${getScaleValue()}) rotate(360deg)`;
            } else {
                entry.target.style.transform = `scale(${getScaleValue()})`;
            }
            entry.target.style.opacity = '1';
        } else {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '0.8';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -10px 0px"
});

// Get header elements
const headerElements = document.querySelectorAll('header .scroll-animate');

// Observe header elements
headerElements.forEach(element => {
    headerObserver.observe(element);
});

// Keep the existing section observer code
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1.1)';
            entry.target.style.transition = 'transform 0.5s ease';
        } else {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.transition = 'transform 0.5s ease';
        }
    });
}, {
    threshold: 0.2
});

// Get all sections with the scroll-animate class
const sections = document.querySelectorAll('section.scroll-animate');

// Observe each section
sections.forEach(section => {
    sectionObserver.observe(section);
});

// Add resize handler for dynamic updates
window.addEventListener('resize', () => {
    document.querySelectorAll('.scroll-animate').forEach(element => {
        if (element.style.transform.includes('scale')) {
            element.style.transform = `scale(${getScaleValue()})`;
        }
    });
});

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, window.scrollY + 1);
    }, 100);
});

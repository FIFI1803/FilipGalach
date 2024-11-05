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

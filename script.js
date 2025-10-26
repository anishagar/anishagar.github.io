// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--bg-primary)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'var(--bg-primary)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Projects data - Easy to update!
const projectsData = [
    {
        title: "Automatic Testing System",
        description: "A comprehensive testing software for WAKO Giken Co. that automatically tested power electronic models using Python and GPIB/PyVISA",
        technologies: ["Python", "GPIB", "Instrumentation"],
        githubUrl: "https://github.com/Anish-Agarwall/AutomaticInspectionGPIB",
        icon: "images/GPIB.png",
        isPrivate: false,
        details: {
            overview: "Developed a comprehensive automated testing system for WAKO Giken Co., designed to streamline validation of power electronic modules through seamless hardware control, data logging, and bilingual user interfaces.",
            features: [
                "Controlled lab instruments via GPIB/PyVISA (multimeters, PSU, load, oscilloscope)",
                "Built a Python GUI with English/Japanese localization",
                "Automated Excel report generation using OpenPyXL",
                "Authored bilingual documentation with setup and troubleshooting guides"
            ],
            challenges: "",
            learnings: ""
        }
    },
    {
        title: "Polaris",
        description: "An ESP-32 based flight computer used to log data onboard for the Longhorn Rocketry Association's Competition Rocket",
        technologies: ["C++", "KiCad", "Git"],
        githubUrl: "",
        icon: "images/Polaris.png",
        isPrivate: true,
        details: {
            overview: "Developed an ESP-32 based flight computer used to log data onboard using a 6-axis IMU and Pressure Sensor, which was implemented using C++(Arduino IDE/PlatformIO) and KiCad.",
            features: [
                "Custom 2-layer PCB design in KiCad with ESP32 and peripherals",
                "C++ firmware for IMU and pressure data logging via SPI",
                "Onboard storage for data logging",
                "Power management for ESP32 and peripherals via Buck Converters",
                "Buzzers and LEDs for status indication"
            ],
            challenges: "",
            learnings: ""
        }
    },
    {
        title: "V1",
        description: "An STM32 based flight computer used to log onboard data, transmit live telemetry, and control airbrake for the Longhorn Rocketry Association's Competition Rocket, Aurora",
        technologies: ["C++", "KiCad", "STM32CubeIDE", "Git"],
        githubUrl: "",
        icon: "images/V1.png",
        isPrivate: true,
        details: {
            overview: "Developed an STM32 based flight computer that integrated an IMU, Pressure Sensor, Magnetometer, a GPS, and airbrakes using SPI, UART, and PWM that will store onboard data and transmit live telemetry to the ground station using LoRa",
            features: [
                "Custom 4-layer PCB design in KiCad with STM32 and peripherals",
                "C firmware for peripheral control and data logging via SPI/UART/PWM through STM32CubeIDE",
                "Onboard storage for data logging",
                "Live telemetry transmission to the ground station using LoRa",
                "Power management for STM32 and peripherals via Buck Converters",
                "Active airbrake control using PWM",
                "Active pyro control using NMOS/PMOS configuration",
                "Buzzers and LEDs for status indication",
                "Clear documentation with setup and troubleshooting guides, ensuriung future use"
            ],
            challenges: "",
            learnings: ""
        }
    },
    {
        title: "Sync Up!",
        description: "A handheld rythm game developed using C and the MSPM0 controller.",
        technologies: ["C"],
        githubUrl: "https://github.com/Anish-Agarwall/Handheld-Rhythm-Game",
        icon: "images/SyncUp.png",
        isPrivate: false,
        details: {
            overview: "A handheld rythm game that required users to sync up their hits with visual and audio ques",
            features: [
                "LCD Display",
                "A DAC to output audio",
                "Spanish/English compatability",
                "Randomly generated levels to ensure replayability"
            ],
            challenges: "",
            learnings: ""
        }
    }
];

// Function to create project card HTML
function createProjectCard(project, index) {
    const githubButton = project.isPrivate 
        ? `<div class="project-private">
            <i class="fas fa-lock"></i> Private Repository
           </div>`
        : `<a href="${project.githubUrl}" target="_blank" class="project-link github">
            <i class="fab fa-github"></i> View Code
           </a>`;

    return `
        <div class="project-card" data-project-index="${index}">
            <div class="project-image">
                <img src="${project.icon}" alt="${project.title}" class="project-img">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${githubButton}
                </div>
            </div>
        </div>
    `;
}

// Function to load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map((project, index) => createProjectCard(project, index)).join('');
        
        // Add click event listeners to project cards
        const projectCards = projectsGrid.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't expand if clicking on the GitHub link
                if (e.target.closest('.project-link')) {
                    return;
                }
                
                const projectIndex = parseInt(card.dataset.projectIndex);
                const project = projectsData[projectIndex];
                showProjectDetails(project);
            });
        });
    }
}

// Load projects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Start typing immediately without delay
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--text-primary);
        color: var(--bg-primary);
        border: 1px solid var(--border);
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px var(--shadow);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Function to show project details in a modal
function showProjectDetails(project) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">${project.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="project-overview">
                    <h3>Overview</h3>
                    <p>${project.details.overview}</p>
                </div>
                
                <div class="project-features">
                    <h3>Key Features</h3>
                    <ul>
                        ${project.details.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-tech-details">
                    <h3>Skills Used</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-actions">
                    ${project.isPrivate 
                        ? `<div class="project-private-modal">
                            <i class="fas fa-lock"></i> This repository is private
                           </div>`
                        : `<a href="${project.githubUrl}" target="_blank" class="btn btn-primary">
                            <i class="fab fa-github"></i> View Code on GitHub
                           </a>`
                    }
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    const closeBtn = modal.querySelector('.modal-close');
    const modalOverlay = modal;
    
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    // Animate modal in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    
    // Set switch state based on saved theme
    if (savedTheme === 'light') {
        themeSwitch.checked = true;
    }
    
    // Update favicon based on initial theme
    updateFavicon(savedTheme);
    
    themeSwitch.addEventListener('change', () => {
        const newTheme = themeSwitch.checked ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateFavicon(newTheme);
    });
}

// Function to update favicon based on theme
function updateFavicon(theme) {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        // Create a new SVG with the appropriate color
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" fill="${theme === 'dark' ? 'black' : 'white'}"/>
        </svg>`;
        
        // Create a data URL from the SVG
        const dataUrl = 'data:image/svg+xml;base64,' + btoa(svgContent);
        favicon.href = dataUrl;
    }
}

// Initialize scroll-to-top button
document.addEventListener('DOMContentLoaded', () => {
    addScrollToTop();
    initThemeToggle();
});

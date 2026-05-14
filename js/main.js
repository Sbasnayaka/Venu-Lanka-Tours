// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Dropdown toggle on mobile
const dropdowns = document.querySelectorAll('.dropdown > a');
dropdowns.forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            link.parentElement.classList.toggle('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
        }
    });
});

// Load Trustindex widget for TripAdvisor
window.addEventListener('load', () => {
    // Check if widget placeholder exists
    if (document.querySelector('.trustindex-widget-placeholder')) {
        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?wp-widget';
        script.async = true;
        document.body.appendChild(script);
    }
});
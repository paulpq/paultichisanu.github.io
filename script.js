// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Handle navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            
            // Update active states
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(targetPage).classList.add('active');
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Visitor tracking using CountAPI
    const visitorCounter = document.createElement('div');
    visitorCounter.className = 'visitor-counter';
    document.querySelector('.container').appendChild(visitorCounter);

    // Track visit
    async function trackVisit() {
        try {
            const response = await fetch('https://api.countapi.xyz/hit/paultichisanu.xyz/visits');
            const data = await response.json();
            visitorCounter.innerHTML = `
                <div class="visitor-count">
                    <span>👥 Visitors: ${data.value}</span>
                </div>
            `;
        } catch (error) {
            console.error('Error tracking visit:', error);
        }
    }

    // Initialize tracking
    trackVisit();
});

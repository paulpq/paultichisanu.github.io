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

            // Visitor counter functionality
            async function trackVisit() {
                const visitorCountElement = document.querySelector('.visitor-count');

                try {
                    // Using a simple counter that increments each time
                    let visitorCount = localStorage.getItem('visitorCount') || 0;
                    visitorCount = parseInt(visitorCount) + 1;
                    localStorage.setItem('visitorCount', visitorCount);

                    // For demo purposes, we'll also try the CountAPI
                    try {
                        const response = await fetch('https://api.countapi.xyz/hit/paultichisanu.xyz/visits');
                        const data = await response.json();
                        if (data.value) {
                            visitorCount = data.value;
                        }
                    } catch (apiError) {
                        console.log('CountAPI not available, using local counter');
                    }

                    visitorCountElement.classList.remove('loading');
                    visitorCountElement.innerHTML = `
                        <span>👥 Visitors: ${visitorCount}</span>
                    `;
                } catch (error) {
                    console.error('Error tracking visit:', error);
                    visitorCountElement.classList.remove('loading');
                    visitorCountElement.innerHTML = `
                        <span>👥 Welcome!</span>
                    `;
                }
            }

            // Initialize tracking
            trackVisit();
        });

        // Smooth scrolling for any anchor links
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

        // Add some interactive effects
        const container = document.querySelector('.container');
        if (container) {
            container.addEventListener('mouseenter', () => {
                container.style.transform = 'translateY(-4px)';
            });

            container.addEventListener('mouseleave', () => {
                container.style.transform = 'translateY(0)';
            });
        }

// Fetch and display total visitors
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive effect for container
    const container = document.querySelector('.container');
    if (container) {
        container.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (clientX - left) / width;
            const y = (clientY - top) / height;
            
            container.style.transform = `
                perspective(1000px)
                rotateY(${(x - 0.5) * 5}deg)
                rotateX(${(y - 0.5) * -5}deg)
            `;
        });

        container.addEventListener('mouseleave', () => {
            container.style.transform = 'none';
        });
    }
});

async function fetchTotalVisitors() {
    const visitorCountElement = document.querySelector('.visitor-count');
    if (!visitorCountElement) return;

    try {
        const response = await fetch('/.netlify/functions/counter');
        const data = await response.json();
        
        if (data.count) {
            visitorCountElement.textContent = data.count.toLocaleString();
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        visitorCountElement.textContent = 'Loading...';
    }
} 
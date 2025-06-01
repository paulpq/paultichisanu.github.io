// Page navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    showPage('home');
    
    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get page name from onclick attribute or data attribute
            const onclick = this.getAttribute('onclick');
            if (onclick) {
                const match = onclick.match(/showPage\('([^']+)'\)/);
                if (match) {
                    showPage(match[1]);
                }
            }
        });
    });
});

function showPage(pageId) {
    const main = document.querySelector('main');
    const pages = {
        'home': document.getElementById('home-page'),
        'commonplace': document.getElementById('commonplace-page'),
        'posts': document.getElementById('posts-page')
    };
    
    // Hide all pages
    Object.values(pages).forEach(page => {
        if (page) {
            page.style.display = 'none';
        }
    });
    
    // Reset main element styles
    main.style.display = '';
    main.style.alignItems = '';
    main.style.justifyContent = '';
    main.style.minHeight = '';
    
    // Show the selected page and apply appropriate styling
    const targetPage = pages[pageId];
    if (targetPage) {
        targetPage.style.display = 'block';
        
        if (pageId === 'home') {
            // Apply home page specific styling
            main.style.display = 'flex';
            main.style.alignItems = 'center';
            main.style.justifyContent = 'center';
            main.style.minHeight = '100vh';
        } else {
            // Apply other pages styling
            main.style.display = 'block';
        }
        
        // Force reflow to ensure styles are applied
        main.offsetHeight;
    }
    
    // Update URL hash without triggering page reload
    if (pageId !== 'home') {
        window.history.replaceState(null, null, '#' + pageId);
    } else {
        window.history.replaceState(null, null, window.location.pathname);
    }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const hash = window.location.hash.substring(1);
    const page = hash || 'home';
    showPage(page);
});

// Handle direct navigation via URL hash
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'commonplace', 'posts'].includes(hash)) {
        showPage(hash);
    } else {
        showPage('home');
    }
});

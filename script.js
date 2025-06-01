// Run immediately to prevent flash
(function() {
    // Add styles to head before anything renders
    const style = document.createElement('style');
    style.textContent = `
        body:not(.js-loaded) main {
            display: none;
        }
        body.home-active main {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-height: 100vh !important;
            padding-top: 100px !important;
        }
        body.page-active main {
            display: block !important;
            align-items: initial !important;
            justify-content: initial !important;
            min-height: initial !important;
            padding-top: 100px !important;
        }
    `;
    document.head.appendChild(style);
    
    // Set initial state immediately
    document.body.classList.add('home-active', 'js-loaded');
})();

function showPage(pageId) {
    const body = document.body;
    const pages = ['home-page', 'commonplace-page', 'posts-page'];
    
    // Hide all pages
    pages.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    });
    
    // Remove all page classes
    body.classList.remove('home-active', 'page-active');
    
    // Show the selected page and add appropriate class
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.style.display = 'block';
        
        if (pageId === 'home') {
            body.classList.add('home-active');
        } else {
            body.classList.add('page-active');
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});

// Fallback initialization
if (document.readyState !== 'loading') {
    showPage('home');
}

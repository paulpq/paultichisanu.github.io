function showPage(pageId) {
    const body = document.body;
    const main = document.querySelector('main');
    const pages = ['home-page', 'commonplace-page', 'posts-page'];
    
    // Hide all pages
    pages.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    });
    
    // Remove all page classes from body
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
    
    // Force a repaint
    void main.offsetWidth;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});

// Also run immediately in case DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        showPage('home');
    });
} else {
    showPage('home');
}

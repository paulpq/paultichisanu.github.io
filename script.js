function showPage(page) {
            // Hide all content
            document.getElementById('home-page').style.display = 'none';
            document.getElementById('commonplace-page').style.display = 'none';
            document.getElementById('posts-page').style.display = 'none';
            
            // Remove active class from all nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Show selected page and activate nav link
            if (page === 'home') {
                document.getElementById('home-page').style.display = 'block';
                document.querySelectorAll('.nav-link')[0].classList.add('active');
            } else if (page === 'commonplace') {
                document.getElementById('commonplace-page').style.display = 'block';
                document.querySelectorAll('.nav-link')[1].classList.add('active');
            } else if (page === 'posts') {
                document.getElementById('posts-page').style.display = 'block';
                document.querySelectorAll('.nav-link')[2].classList.add('active');
            }
            
            // Update main-content styling based on page
            const mainContent = document.querySelector('.main-content');
            if (page === 'home') {
                mainContent.style.display = 'flex';
                mainContent.style.alignItems = 'center';
                mainContent.style.justifyContent = 'center';
                mainContent.style.minHeight = 'calc(100vh - 80px)';
            } else {
                mainContent.style.display = 'block';
                mainContent.style.alignItems = 'unset';
                mainContent.style.justifyContent = 'unset';
                mainContent.style.minHeight = 'unset';
            }
        }
        
        // Set default page
        window.onload = function() {
            showPage('home');
        };

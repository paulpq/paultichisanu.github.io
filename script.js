function showPage(page) {
            // Hide all content
            document.getElementById('home-page').style.display = 'none';
            document.getElementById('commonplace-page').classList.remove('active');
            document.getElementById('posts-page').classList.remove('active');

            // Remove active class from all nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            // Get main content container
            const mainContent = document.getElementById('main-content');

            // Show selected page and activate nav link
            if (page === 'home') {
                document.getElementById('home-page').style.display = 'block';
                document.querySelector('[data-page="home"]').classList.add('active');
                mainContent.classList.add('centered');
            } else {
                mainContent.classList.remove('centered');
                if (page === 'commonplace') {
                    document.getElementById('commonplace-page').classList.add('active');
                    document.querySelector('[data-page="commonplace"]').classList.add('active');
                } else if (page === 'posts') {
                    document.getElementById('posts-page').classList.add('active');
                    document.querySelector('[data-page="posts"]').classList.add('active');
                }
            }
        }

        // Add event listeners to navigation links
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('data-page');
                    showPage(page);
                });
            });

            // Set default page
            showPage('home');
        });

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Function to handle scroll events
    function handleScroll() {
        if (window.scrollY > 50) {
            // Add a class when scrolled down
            navbar.classList.add('scrolled');
        } else {
            // Remove the class when at the top
            navbar.classList.remove('scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();

            // Get the href attribute
            const targetId = this.getAttribute('href');

            // If it's a page section, scroll to it
            if (targetId.startsWith('#') && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else {
                // For demonstration purposes, just log the link
                console.log('Clicked on:', targetId);
                alert('You clicked on: ' + this.textContent);
            }
        });
    });

    // Get the announcement box
    const announcementBox = document.querySelector('.box1');

    // Add a close button to the announcement
    if (announcementBox) {
        // Create close button
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'close-btn';
        closeButton.style.position = 'absolute';
        closeButton.style.right = '10px';
        closeButton.style.top = '50%';
        closeButton.style.transform = 'translateY(-50%)';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontSize = '20px';
        closeButton.style.fontWeight = 'bold';

        // Add the close button to the announcement box
        announcementBox.style.position = 'relative';
        announcementBox.appendChild(closeButton);

        // Add click event to close the announcement
        closeButton.addEventListener('click', function() {
            announcementBox.style.display = 'none';
        });
    }
});
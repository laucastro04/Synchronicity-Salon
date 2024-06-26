//Hero Page//
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav ul');

    // Function to toggle the menu
    function toggleMenu() {
        if (menuToggle.checked) {
            menu.style.right = '0';
        } else {
            menu.style.right = '-250px';
        }
    }

    // Toggle menu when clicking the hamburger icon
    menuToggle.addEventListener('change', function() {
        toggleMenu();
    });

    // Close the menu when clicking anywhere on the document
    document.addEventListener('click', function(event) {
        const target = event.target;
        const isMenuToggle = target.matches('.hamburger') || target.matches('#menu-toggle');
        const isMenu = target.matches('nav ul');

        if (!isMenuToggle && !isMenu) {
            menuToggle.checked = false;
            toggleMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav ul');
    const bookNowButton = document.getElementById('book-now-button');

    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            menu.style.right = '0';
        } else {
            menu.style.right = '-250px';
        }
    });

    bookNowButton.addEventListener('click', function() {
        window.open('https://book.squareup.com/appointments/ue5ach716wqzhr/location/L3QN3ZPKMZGC8/services', '_blank');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







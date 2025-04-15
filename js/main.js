document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const transitionDiv = document.getElementById('theme-transition');
  const menu = document.querySelector(".components-sidebar");


  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      // Toggle display block/none
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }

      // Toggle classes if needed
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }


  toggleBtn.addEventListener('click', () => {
  // Set new theme background color on the overlay
  const isDark = body.classList.contains('dark');
  transitionDiv.style.background = isDark ? '#ffffff' : '#0f172a';

  // Trigger the circle animation from bottom-right (100% 100%)
  transitionDiv.style.clipPath = 'circle(150% at 100% 100%)';

  // After animation is mostly complete, switch theme
  setTimeout(() => {
    body.classList.toggle('dark');
  }, 500); // half of animation time

  // Shrink the circle back after theme is applied
  setTimeout(() => {
    transitionDiv.style.clipPath = 'circle(0% at 100% 100%)';
  }, 1000);
});





// Component navigation
const componentNavItems = document.querySelectorAll('.component-nav-item');
const componentGroups = document.querySelectorAll('.component-group');

componentNavItems.forEach(item => {
  item.addEventListener('click', function () {
    // Remove active class from all nav items
    componentNavItems.forEach(navItem => {
      navItem.classList.remove('active');
    });

    // Add active class to clicked nav item
    this.classList.add('active');

    // Hide all component groups
    componentGroups.forEach(group => {
      group.classList.remove('active');
    });

    // Show the target component group
    const targetId = this.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
});


window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


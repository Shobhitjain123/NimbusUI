document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const transitionDiv = document.getElementById('theme-transition');
  const menu = document.querySelector(".components-sidebar");
  const nav = document.querySelector(".nav-links");
  const mobileMenu = document.querySelector(".mobile-menu");
try{
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.style.display = 'flex';
      window.scrollTo(0, 0);
      document.body.classList.add('no-scroll');
    });

    const close = document.querySelector(".close");
    close.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      document.body.classList.remove('no-scroll');
    })
  }
}catch(e){console.log(e)}


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



// Timeline 9: Stepper Logic
const steps = document.querySelectorAll('.timeline-9 .step');
const progressBar = document.querySelector('.timeline-9 .progress-bar');

steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    steps.forEach(s => s.classList.remove('active'));
    step.classList.add('active');

    // Animate progress bar
    const percent = (index) / (steps.length - 1) * 100;
    progressBar.style.width = percent + '%';
  });
});

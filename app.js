// Timeline 1 - Expandable Items
function toggleExpand(item) {
    const content = item.querySelector('.expandable');
    item.classList.toggle('expanded');
  
    // Expand or collapse
    content.style.maxHeight = item.classList.contains('expanded')
      ? content.scrollHeight + "px"
      : null;
  
    // Accessibility update
    item.setAttribute('aria-expanded', item.classList.contains('expanded'));
  }
  
  // Event bindings
  document.querySelectorAll('.timeline-1 .timeline-item').forEach(item => {
    item.addEventListener('click', () => toggleExpand(item));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter') toggleExpand(item);
    });
  });
  


// Timeline 2: Scroll-triggered progress 
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
  
    // Progress bar fill
    const progress = document.querySelector('.timeline-2 .progress-line');
    if (progress) {
      progress.style.height = `${scrollPercent}%`;
    }
  
    // Reveal event boxes starting from 3rd
    document.querySelectorAll('.timeline-2 .timeline-event:nth-child(n+3) .event-box').forEach(box => {
      const rect = box.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        box.classList.add('visible');
      }
    });
  });
  

// TIMELINE 3 ke liye kuch nahi hai js me   

// Timeline 4: Lightbox Gallery
const galleryEvents = document.querySelectorAll('.timeline-4 .event');
const lightbox = document.querySelector('.timeline-4 .lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close-btn');

galleryEvents.forEach(event => {
  event.addEventListener('click', () => {
    lightboxImg.src = event.dataset.img;
    lightbox.classList.add('active');
    setTimeout(() => {
      lightboxImg.classList.add('visible');
    }, 10);
  });
});

function closeLightbox() {
  lightboxImg.classList.remove('visible');
  setTimeout(() => {
    lightbox.classList.remove('active');
  }, 300);
}

// Close on image click OR close button click
lightbox.addEventListener('click', e => {
  if (e.target === lightbox || e.target === closeBtn) {
    closeLightbox();
  }
});


// Timeline 5: Pro-Level Parallax Scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.event-parallax').forEach(event => {
    const rect = event.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const speed = 0.3;
    const offset = rect.top + scrollY;
    const yPos = (scrollY - offset) * speed;

    const bg = event.querySelector('.bg-image');
    bg.style.transform = `translateY(${yPos}px) scale(1.1)`;
  });
});


// Timeline 6: Video Hover Preview
document.querySelectorAll('.timeline-8 video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // rewind for preview-style
  });
});


// js for 7 is not needed

// js for 8 is not needed

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





/* Menu 1: Sidebar */
const menuToggle = document.getElementById('menuToggle');
const megaMenu = document.getElementById('megaMenu');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  megaMenu.classList.toggle('visible');
});

// Close menu if clicked outside
document.addEventListener('click', (e) => {
  if (!megaMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    megaMenu.classList.remove('visible');
  }
});

// Menu 2: Sidebar Multi-Level
const sidebarBtn = document.querySelector('.menu-2 button');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close'); // ✅ Renamed variable

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Toggle Submenu on Parent Click
document.querySelector('.menu-2 .parent').addEventListener('click', (e) => {
  e.currentTarget.querySelector('.submenu').classList.toggle('visible');
});


  // Menu 3: Full-Screen Overlay with Search
  document.addEventListener('DOMContentLoaded', () => {
    const openOverlayBtn = document.getElementById('openOverlayBtn');
    const closeOverlayBtn = document.getElementById('closeOverlayBtn');
    const overlay = document.getElementById('fullOverlay');
    const searchInput = document.getElementById('searchInput');

    openOverlayBtn.addEventListener('click', () => {
      overlay.classList.add('visible');
      overlay.classList.remove('hidden');
    });

    closeOverlayBtn.addEventListener('click', () => {
      overlay.classList.remove('visible');
      setTimeout(() => overlay.classList.add('hidden'), 300);
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('visible');
        setTimeout(() => overlay.classList.add('hidden'), 300);
      }
    });

    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase();
      const links = overlay.querySelectorAll('.links a');
      links.forEach(link => {
        link.style.display = link.textContent.toLowerCase().includes(val) ? 'block' : 'none';
      });
    });
  });



// Menu 4: Circular Radial
document.addEventListener("DOMContentLoaded", () => {
  const fabToggle = document.getElementById("fabToggle");
  const fabMenu = document.getElementById("fabMenu");

  fabToggle.addEventListener("click", () => {
    fabMenu.classList.toggle("active");
  });
});


// Menu 5: Hover-Animated Nav (CSS handles animation)

// Menu 6: Accordion with animation and chevron
document.querySelectorAll('.menu-6 .accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('.chevron');

    const isOpen = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.menu-6 .accordion-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-content').style.maxHeight = null;
      i.querySelector('.chevron').classList.remove('rotate-180');
    });

    // Open current if not already
    if (!isOpen) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add('rotate-180');
    }
  });
});


// Menu 7: Icon Tooltip


// Menu 8: Sticky Scroll with Shrink
const stickyNav = document.getElementById('stickyNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    stickyNav.classList.add('shrink');
  } else {
    stickyNav.classList.remove('shrink');
  }
});


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
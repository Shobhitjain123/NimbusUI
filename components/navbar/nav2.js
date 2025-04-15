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

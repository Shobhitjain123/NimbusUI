document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      const icon = this.querySelector('.accordion-icon');
  
      const isOpen = panel.style.maxHeight;
      console.log(isOpen);
      
      // Close all panels if you want accordion behavior
      document.querySelectorAll('.accordion-panel').forEach(p => p.style.maxHeight = null);
      document.querySelectorAll('.accordion-icon').forEach(i => i.style.transform = 'rotate(0deg)');
  
      if (isOpen) {
        panel.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';    
      }
    });
  });
  
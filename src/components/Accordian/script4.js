document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const panel = this.nextElementSibling;  
      const icon = this.querySelector('.accordion-icon');
      const isOpen = panel.style.maxHeight;
      console.log(isOpen);
      
      // Close all panels if you want accordion behavior
      document.querySelectorAll('.accordion-panel').forEach(p => p.style.maxHeight = null);
      document.querySelectorAll('.accordion-icon').forEach(i => {
        i.style.transform = 'rotate(0deg)'
        i.style.backgroundColor = "#6366f1"
      });
  
      if (isOpen) {
        panel.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
        i.style.backgroundColor = "#6366f1"
      } else {
        panel.style.maxHeight = '100px';
        panel.style.overflow = 'auto'
        icon.style.transform = 'rotate(180deg)';    
        icon.style.backgroundColor = "#37C46F"
      }
    });
  });
  
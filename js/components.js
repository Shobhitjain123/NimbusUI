document.addEventListener('DOMContentLoaded', function () {
  // Initialize syntax highlighting
  hljs.highlightAll();

  // Component navigation
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const previewFrame = document.getElementById('preview-frame');
  const previewTitle = document.querySelector('.preview-header h2');
  const htmlCode = document.getElementById('html-code');
  const cssCode = document.getElementById('css-code');
  const jsCode = document.getElementById('js-code');

  // Current component and variant state
  let currentComponent = 'button';
  let currentVariant = 'primary';

  //UTILITY - load css
  let currentCSS = null;

  function loadCSS(file) {
    if (currentCSS) currentCSS.remove(); // remove existing CSS

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    link.id = 'dynamic-css';

    document.head.appendChild(link);
    currentCSS = link;
  }

  // Load component data
  async function loadComponent(componentName, variant = 'primary') {
    try {
      currentComponent = componentName;
      currentVariant = variant;
      console.log(currentComponent)
      console.log(currentVariant)

      // Update preview title
      previewTitle.textContent = `${componentName.charAt(0).toUpperCase() + componentName.slice(1)} Component (${variant})`;

      // Load preview iframe
      loadCSS(`components/${currentComponent}/${currentVariant}.css`);



      // Load HTML code for specific variant
      try {
        console.log(`components/${componentName}/${variant}.html`)
        const htmlResponse = await fetch(`components/${componentName}/${variant}.html`);
        if (!htmlResponse.ok) throw new Error('HTML file not found');

        const htmlText = await htmlResponse.text();
        htmlCode.textContent = htmlText;
      } catch (err) {
        htmlCode.textContent = '<!-- No HTML file found for this variant -->';
      }


      // Load CSS code
      console.log(`components/${componentName}/${componentName}.css`)
      try {
        const cssResponse = await fetch(`components/${currentComponent}/${currentVariant}.css`);
        if (!cssResponse.ok) throw new Error('CSS file not found');

        const cssText = await cssResponse.text();
        cssCode.textContent = cssText;
      } catch (err) {
        console.warn(`No CSS file found for ${currentComponent}/${currentVariant}.css`);
        cssCode.textContent = '/* No CSS file found for this variant */';
      }

      // Load JS code
      try {
        const jsResponse = await fetch(`components/${componentName}/${currentVariant}.js`);
        if (!jsResponse.ok) throw new Error('JS file not found');

        const jsText = await jsResponse.text();
        jsCode.textContent = jsText;
      } catch (err) {
        console.warn(`No JS file found for ${componentName}/${currentVariant}.js`);
        jsCode.textContent = '// No JS file found for this variant';
      }

      // utility
      function renderPreview(html, css, js) {
        const previewContainer = document.getElementById('preview');

        // Create an iframe for sandboxed rendering
        const iframe = document.createElement('iframe');
        iframe.classList.add(`iframe-preview`,componentName)


        // Reset content
        previewContainer.innerHTML = '';
        previewContainer.appendChild(iframe);

        const previewDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Write HTML, CSS, and JS into the iframe
        previewDoc.open();
        previewDoc.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
          </html>
        `);
        previewDoc.close();
      }


      // Highlight code
      hljs.highlightElement(htmlCode);
      hljs.highlightElement(cssCode);
      hljs.highlightElement(jsCode);
      try {
        renderPreview(htmlCode.textContent, cssCode.textContent, jsCode.textContent)
      } catch (e) { console.log(e) }

      // Update variant selector if it exists
      updateVariantSelector(componentName);
    } catch (error) {
      console.error('Error loading component:', error);
    }

  }

  // Update variant selector based on component
  async function updateVariantSelector(componentName) {
    console.log("updated......................")
    try {
      // Fetch variants data
      const variantsResponse = await fetch(`components/${componentName}/variants.json`);
      const variants = await variantsResponse.json();

      // Get or create variant selector
      let variantSelector = document.querySelector('.preview-container');
      if (!variantSelector) {
        variantSelector = document.createElement('div');
        variantSelector.className = 'variant-selector';
        document.querySelector('.preview-actions').prepend(variantSelector);
      }



      // Clear existing variants
      variantSelector.innerHTML = '';

      // Add variant buttons
      variants.forEach(variant => {
        const sanitizedVariant = variant.replace(/\s+/g, '_');
        const variantBtn = document.createElement('button');
        variantBtn.className = `btn btn-primary variant-btn ui-button ${sanitizedVariant} ${sanitizedVariant === currentVariant ? 'active' : ''}`;
        // variantBtn.
        variantBtn.textContent = sanitizedVariant.charAt(0).toUpperCase() + variant.slice(1);
        variantBtn.setAttribute('data-variant', sanitizedVariant);


        variantBtn.addEventListener('click', function () {
          const selectedVariant = this.getAttribute('data-variant');

          // ✅ Load new variant: updates preview and all code panels
          loadComponent(currentComponent, selectedVariant);
        });

        variantSelector.appendChild(variantBtn);
      });
    } catch (error) {
      console.error('Error updating variant selector:', error);
    }
  }

  // Initialize with the first component (button)
  loadComponent('button', 'primary');

  // Handle sidebar navigation
  sidebarItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active class from all sidebar items
      sidebarItems.forEach(item => {
        item.classList.remove('active');
      });

      // Add active class to clicked item
      this.classList.add('active');

      // Load the selected component
      const componentName = this.getAttribute('data-component');
      loadComponent(componentName, 'primary'); // Reset to primary variant when changing components
    });
  });

  // Code tabs
  const codeTabs = document.querySelectorAll('.code-tab');
  const codePanels = document.querySelectorAll('.code-panel');

  codeTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs
      codeTabs.forEach(tab => {
        tab.classList.remove('active');
      });

      // Add active class to clicked tab
      this.classList.add('active');

      // Hide all code panels
      codePanels.forEach(panel => {
        panel.classList.remove('active');
      });

      // Show the target code panel
      const tabId = this.getAttribute('data-tab');
      document.getElementById(`${tabId}-panel`).classList.add('active');
    });
  });

  // Copy code buttons
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const codeElement = document.getElementById(targetId);
      const codeText = codeElement.textContent;

      // Copy to clipboard
      navigator.clipboard.writeText(codeText).then(() => {
        // Show copied feedback
        this.textContent = 'Copied!';
        this.classList.add('copied');

        // Reset after 2 seconds
        setTimeout(() => {
          this.textContent = 'Copy';
          this.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // Responsive preview toggle
  const previewResizeBtn = document.getElementById('preview-resize');
  const previewContainer = document.querySelector('.preview-container');

  previewResizeBtn.addEventListener('click', function () {
    previewContainer.classList.toggle('mobile');

    if (previewContainer.classList.contains('mobile')) {
      this.querySelector('.action-text').textContent = 'Full Width';
    } else {
      this.querySelector('.action-text').textContent = 'Responsive';
    }
  });
});
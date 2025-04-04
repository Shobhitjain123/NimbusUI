document.addEventListener("DOMContentLoaded", () => {
  // Get component ID from URL
  const urlParams = new URLSearchParams(window.location.search)
  const componentId = urlParams.get("id")

  // Update page title based on component
  if (componentId) {
    const componentName = componentId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    document.title = `${componentName} - Nimbus UI`
  }

  // Tab functionality for preview/code
  const tabButtons = document.querySelectorAll(".component-preview-tabs .tab-btn")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tab = this.dataset.tab

      // Remove active class from all buttons and panels
      this.closest(".tabs-list")
        .querySelectorAll(".tab-btn")
        .forEach((btn) => {
          btn.classList.remove("active")
        })

      const tabContent = this.closest(".component-preview-tabs").querySelector(".tabs-content")
      tabContent.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.remove("active")
      })

      // Add active class to clicked button and corresponding panel
      this.classList.add("active")
      tabContent.querySelector(`.tab-panel[data-tab="${tab}"]`).classList.add("active")
    })
  })

  // Copy code button
  const copyCodeBtn = document.querySelector(".copy-code-btn")

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener("click", function () {
      const codeElement = this.closest(".code-container").querySelector("code")
      const codeText = codeElement.textContent

      navigator.clipboard.writeText(codeText).then(() => {
        // Show copied feedback
        const originalIcon = this.innerHTML
        this.innerHTML = '<i class="fas fa-check"></i>'

        setTimeout(() => {
          this.innerHTML = originalIcon
        }, 2000)
      })
    })
  }

  // Variant buttons
  const variantButtons = document.querySelectorAll(".variant-buttons .nimbus-button")
  const previewComponent = document.querySelector(".component-preview-container > *")

  if (variantButtons.length && previewComponent) {
    variantButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const variant = this.dataset.variant

        // Remove active class from all buttons
        variantButtons.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        // Update component preview with selected variant
        previewComponent.className = `nimbus-button ${variant}`

        // Update code snippet
        const codeElement = document.querySelector(".code-container code")
        if (codeElement) {
          codeElement.textContent = `<button class="nimbus-button ${variant}">Click me</button>`

          // Trigger Prism to highlight the new code
          if (typeof Prism !== "undefined") {
            Prism.highlightElement(codeElement)
          }
        }
      })
    })
  }
})



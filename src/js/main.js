document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggleBtn = document.getElementById("theme-toggle-btn")
  const htmlElement = document.documentElement

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    htmlElement.classList.toggle("dark", savedTheme === "dark")
  } else {
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    htmlElement.classList.toggle("dark", prefersDark)
  }

  // Theme toggle button click handler
  themeToggleBtn.addEventListener("click", () => {
    const isDark = htmlElement.classList.toggle("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
  })

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Toggle hamburger to X
      const spans = mobileMenuBtn.querySelectorAll("span")
      if (mobileMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-btn")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.dataset.category
      const tabContent = this.closest(".tabs").querySelector(".tabs-content")

      // Remove active class from all buttons and panels
      this.closest(".tabs-list")
        .querySelectorAll(".tab-btn")
        .forEach((btn) => {
          btn.classList.remove("active")
        })

      if (tabContent) {
        tabContent.querySelectorAll(".tab-panel").forEach((panel) => {
          panel.classList.remove("active")
        })

        // Add active class to clicked button and corresponding panel
        this.classList.add("active")
        const activePanel = tabContent.querySelector(`.tab-panel[data-category="${category}"]`)
        if (activePanel) {
          activePanel.classList.add("active")
        }
      }
    })
  })

  // Scroll animation
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  function checkScroll() {
    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight * 0.9) {
        // Add delay if specified
        const delay = element.dataset.delay || 0
        setTimeout(() => {
          element.classList.add("visible")
        }, delay)
      }
    })
  }

  // Initial check
  checkScroll()

  // Check on scroll
  window.addEventListener("scroll", checkScroll)
})



document.addEventListener("DOMContentLoaded", () => {
  // Search functionality
  const searchInput = document.getElementById("component-search")
  const sidebarSearchInput = document.getElementById("sidebar-search-input")
  const componentCards = document.querySelectorAll(".component-card")

  function filterComponents(searchTerm) {
    searchTerm = searchTerm.toLowerCase()

    componentCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase()
      const description = card.querySelector(".component-description p").textContent.toLowerCase()
      const tags = Array.from(card.querySelectorAll(".tag")).map((tag) => tag.textContent.toLowerCase())

      const isMatch =
        title.includes(searchTerm) || description.includes(searchTerm) || tags.some((tag) => tag.includes(searchTerm))

      card.style.display = isMatch ? "block" : "none"
    })
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      filterComponents(this.value)
    })
  }

  if (sidebarSearchInput) {
    sidebarSearchInput.addEventListener("input", function () {
      // Filter sidebar items
      const searchTerm = this.value.toLowerCase()
      const sidebarItems = document.querySelectorAll(".sidebar-nav a")

      sidebarItems.forEach((item) => {
        const text = item.textContent.toLowerCase()
        const li = item.parentElement

        if (text.includes(searchTerm)) {
          li.style.display = "block"
        } else {
          li.style.display = "none"
        }
      })

      // Show/hide section headers based on visible items
      const sections = document.querySelectorAll(".sidebar-section")
      sections.forEach((section) => {
        const visibleItems = section.querySelectorAll('li[style="display: block"]').length
        if (visibleItems === 0) {
          section.style.display = "none"
        } else {
          section.style.display = "block"
        }
      })
    })
  }
})



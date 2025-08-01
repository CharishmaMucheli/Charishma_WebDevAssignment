// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // FAQ toggle functionality
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })

  // Smooth scrolling for navigation links
  const navLinksElements = document.querySelectorAll('a[href^="#"]')

  navLinksElements.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // CTA button click handlers
  const ctaButtons = document.querySelectorAll(".cta-btn-primary")

  ctaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Simulate enrollment process
      alert(
        "🎉 Thank you for your interest! Our counselor will contact you within 24 hours to complete your enrollment.",
      )
    })
  })

  // Demo class button handler
  const demoButtons = document.querySelectorAll(".cta-btn-secondary")

  demoButtons.forEach((button) => {
    if (button.textContent.includes("Demo") || button.textContent.includes("Counselor")) {
      button.addEventListener("click", () => {
        alert("📞 Our counselor will call you within 2 hours to schedule your free demo class!")
      })
    }
  })

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")

    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "none"
    }
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".feature-card, .testimonial-card, .faq-item")

  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Add mobile navigation styles
const style = document.createElement("style")
style.textContent = `
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            gap: 15px;
        }
        
        .nav-links.active .cta-btn-nav {
            align-self: flex-start;
        }
    }
`
document.head.appendChild(style)

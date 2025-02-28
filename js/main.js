// Main JavaScript file

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");

      if (navLinks) {
        if (navLinks.style.display === "flex") {
          navLinks.style.display = "none";
        } else {
          navLinks.style.display = "flex";
        }
      }
    });
  }

  // Header scroll effect
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navLinks && navLinks.style.display === "flex" && hamburger) {
          hamburger.classList.remove("active");
          navLinks.style.display = "none";
        }
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
      }

      // Here you would typically send the form data to a server
      // For demonstration, we'll just show an alert
      alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

      // Reset form
      contactForm.reset();
    });
  }

  // Add animation to timeline items when they come into view
  const observeElements = (elements, className) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  // Observe timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  if (timelineItems.length) {
    observeElements(timelineItems, "animate");
  }

  // Observe project cards
  const projectCards = document.querySelectorAll(".project-card");
  if (projectCards.length) {
    observeElements(projectCards, "animate");
  }
});

// Initialize editable content feature

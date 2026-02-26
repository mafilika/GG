/* =====================================================
   Gloss Guard – Production Frontend Script
   Clean | Scalable | Professional
===================================================== */

(() => {

  document.addEventListener("DOMContentLoaded", () => {
    initStickyHeader();
    initMobileNav();
    initSmoothScroll();
    initGalleryModal();
    initScrollAnimations();
  });

  /* ===============================
     Sticky Header with Shadow
  =============================== */
  function initStickyHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  /* ===============================
     Mobile Navigation Toggle
  =============================== */
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      toggle.classList.toggle("open");
    });
  }

  /* ===============================
     Smooth Anchor Scrolling
  =============================== */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  /* ===============================
     Gallery Modal System
  =============================== */
  function initGalleryModal() {
    const images = document.querySelectorAll(".gallery-grid img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    if (!images.length || !modal || !modalImg) return;

    images.forEach(img => {
      img.addEventListener("click", () => {
        openModal(img.src, img.alt);
      });
    });

    modal.addEventListener("click", closeModal);

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeModal();
    });

    function openModal(src, altText) {
      modalImg.src = src;
      modalImg.alt = altText || "Project Image";
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("active");
      modalImg.src = "";
      document.body.style.overflow = "";
    }
  }

  /* ===============================
     Scroll Reveal Animations
  =============================== */
  function initScrollAnimations() {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
  }

})();

initWhatsAppForm();
/* ===============================
   WhatsApp Form Submission
=============================== */
function initWhatsAppForm() {
  const form = document.getElementById("whatsapp-form");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const whatsappMessage =
      `*Gloss Guard Consultation Request*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email || "Not provided"}%0A` +
      `*Service:* ${service}%0A%0A` +
      `*Project Details:*%0A${message}`;

    const whatsappURL =
      `https://wa.me/27832269197?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  });
}

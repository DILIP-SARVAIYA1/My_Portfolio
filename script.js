const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");

// Toggle mobile menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

// Close nav on link click (mobile)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      menuIcon.classList.remove("fa-x");
      navbar.classList.remove("active");
    }
  });
});

// Highlight nav links on scroll & sticky header
window.onscroll = () => {
  const top = window.scrollY;
  sections.forEach((sec) => {
    const offset = sec.offsetTop - 80;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });

  // Sticky header
  const header = document.querySelector("header");
  header.classList.toggle("sticky", top > 0);

  // Close mobile nav on scroll (only for small screens)
  if (window.innerWidth <= 768) {
    menuIcon.classList.remove("fa-x");
    navbar.classList.remove("active");
  }
};

// ScrollReveal animations
ScrollReveal({
  distance: "20px",
  duration: 500,
  delay: 100,
  reset: false,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-image, .services-container, .portfolio-box, .contact .mainDiv",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed.js animation
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "ReactJS Developer"],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Dark mode toggle
const toggleDark = document.getElementById("toggle-dark");
const body = document.body;

toggleDark.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  // Change icon
  const icon = toggleDark.querySelector("i");
  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

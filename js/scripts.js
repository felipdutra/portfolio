// BODY TRANSITION
window.addEventListener("load", () => {
  document.body.classList.remove("loading");
  document.body.classList.add("loaded");
});

// SCROLLED NAV
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// TOGGLE MENU
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav__menu--toggle");
  const menu = document.querySelector(".nav__menu--links");

  toggle.addEventListener("click", function (event) {
    event.stopPropagation(); // impede o clique de propagar e fechar logo em seguida
    menu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      menu.classList.remove("active");
    }
  });
});

// PHOTO HOVER
document.querySelectorAll(".photo-hover").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  });

  el.addEventListener("mouseleave", () => {
    el.style.setProperty("--mouse-x", `50%`);
    el.style.setProperty("--mouse-y", `50%`);
  });
});

// DISABLE SCROLL ON MODAL OPEN
const modalToggle = document.getElementById("modalToggle");

modalToggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.style.overflow = "hidden"; // bloqueia scroll
  } else {
    document.body.style.overflow = ""; // libera scroll
  }
});

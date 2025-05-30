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

// LIGHTBOX

const thumbs = document.querySelectorAll(".modal-img img");
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const images = Array.from(thumbs);

function showModal(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex].src;
  modal.style.display = "flex";
}

thumbs.forEach((img, index) => {
  img.addEventListener("click", () => showModal(index));
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalImg.src = "";
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImg.src = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "Escape") closeBtn.click();
  }
});

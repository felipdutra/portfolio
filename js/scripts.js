// DATE & TIME
const updateDateTime = () => {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });
  const datePart = formatter.format(now); // Ex: "Mon, May 05"

  const hours24 = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;

  const timePart = `${hours12}:${minutes}${ampm}`;
  const display = `${datePart} - ${timePart}`;

  const el = document.getElementById("datetime");
  if (el) el.textContent = display;
};

updateDateTime();
setInterval(updateDateTime, 60000);

// TEMA
const themeButtons = document.querySelectorAll(".header__theme--item");

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("selectedTheme", theme);

  themeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
};

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selected = btn.dataset.theme;
    setTheme(selected);
  });
});

const savedTheme = localStorage.getItem("selectedTheme") || "dark";
setTheme(savedTheme);

// COPY E-MAIL
document.addEventListener("DOMContentLoaded", () => {
  const emailElements = document.querySelectorAll(".copyEmail");
  const alertElement = document.querySelector(".copyAlert");

  emailElements.forEach((el) => {
    el.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("felipdutra@gmail.com");

        alertElement.style.display = "flex";

        setTimeout(() => {
          alertElement.style.display = "none";
        }, 5000);
      } catch (err) {
        console.error("Erro ao copiar:", err);

        const textarea = document.createElement("textarea");
        textarea.value = "felipdutra@gmail.com";
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          alertElement.style.display = "flex";
          setTimeout(() => {
            alertElement.style.display = "none";
          }, 5000);
        } catch (e) {
          console.error("Erro no fallback:", e);
        }
        document.body.removeChild(textarea);
      }
    });
  });
});

// LIGHTBOX

const thumbs = document.querySelectorAll(".thumbItem img");
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

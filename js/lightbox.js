document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".modal-img img");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Verificação básica
  if (
    !thumbs.length ||
    !modal ||
    !modalImg ||
    !closeBtn ||
    !prevBtn ||
    !nextBtn
  ) {
    console.error("Algum dos elementos esperados não foi encontrado no DOM.");
    return;
  }

  let currentIndex = 0;
  const images = Array.from(thumbs);

  function showModal(index) {
    currentIndex = index;
    modalImg.src = images[currentIndex].src;
    modal.style.display = "flex";
  }

  // Clique nas miniaturas
  thumbs.forEach((img, index) => {
    img.addEventListener("click", () => {
      console.log("Imagem clicada:", img.src);
      showModal(index);
    });
  });

  // Fechar modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
  });

  // Botões de navegação
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

  // Fechar ao clicar fora da imagem
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });

  // Teclas de atalho
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "Escape") closeBtn.click();
    }
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar");
    const carCards = document.querySelectorAll(".car-card");

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      carCards.forEach((card) => {
        const title = card.querySelector(".car-card-h").textContent.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
      });
    });
  });

  //This is from Boris :)
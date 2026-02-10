document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});


const travelBtn = document.getElementById("travelMegaBtn");
const megaMenu = document.getElementById("travelMegaMenu");
const header = document.querySelector(".main-header");

travelBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isOpen = megaMenu.classList.toggle("show");
  header.classList.toggle("mega-active", isOpen);
});

/* Close on outside click */
document.addEventListener("click", (e) => {
  if (!travelBtn.contains(e.target) && !megaMenu.contains(e.target)) {
    megaMenu.classList.remove("show");
    header.classList.remove("mega-active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  // Mega Menu functionality
  const travelBtn = document.getElementById("travelMegaBtn");
  const megaMenu = document.getElementById("travelMegaMenu");
  const header = document.querySelector(".main-header");
  const heroSection = document.querySelector(".hero-section");
  const mainContainer = document.querySelector(".main-container");

  // Create backdrop element
  let backdrop = document.querySelector(".mega-menu-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "mega-menu-backdrop";
    document.body.appendChild(backdrop);
  }

  // Toggle mega menu
  travelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const isOpen = megaMenu.classList.contains("show");
    
    if (isOpen) {
      closeMegaMenu();
    } else {
      openMegaMenu();
    }
  });

  function openMegaMenu() {
    megaMenu.classList.add("show");
    header.classList.add("mega-active");
    backdrop.classList.add("show");
    if (heroSection) heroSection.classList.add("blur-active");
    if (mainContainer) mainContainer.classList.add("blur-active");
  }

  function closeMegaMenu() {
    megaMenu.classList.remove("show");
    header.classList.remove("mega-active");
    backdrop.classList.remove("show");
    if (heroSection) heroSection.classList.remove("blur-active");
    if (mainContainer) mainContainer.classList.remove("blur-active");
  }

  // Close on backdrop click
  backdrop.addEventListener("click", closeMegaMenu);

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!travelBtn.contains(e.target) && !megaMenu.contains(e.target)) {
      closeMegaMenu();
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMegaMenu();
    }
  });
});
// ============================================
// Operaciones Logísticas JyE
// Comportamientos sencillos de la página
// ============================================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navigationLinks = document.querySelectorAll(".site-nav a");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const year = document.querySelector("#current-year");

// Menú adaptable para celulares
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Abrir menú de navegación" : "Cerrar menú de navegación"
    );
    navigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú de navegación");
      navigation.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

// El formulario todavía no envía datos a un servidor.
// Se muestra un aviso honesto hasta conectar un servicio de correo.
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent =
      "Mensaje preparado. El envío real se activará cuando configuremos el correo.";
    contactForm.reset();
  });
}

// Mantiene el año actual en el pie de página.
if (year) {
  year.textContent = new Date().getFullYear();
}

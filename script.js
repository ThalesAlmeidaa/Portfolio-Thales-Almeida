document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const toggle = document.getElementById("menu-toggle");

    links.forEach(link => {
      link.addEventListener("click", () => {
        toggle.checked = false;
      });
    });
  });
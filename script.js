document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const toggle = document.getElementById("menu-toggle");

    links.forEach(link => {
      link.addEventListener("click", () => {
        toggle.checked = false;
      });
    });
  });

  function moverImagemResponsivo() {
    const largura = window.innerWidth;
    const imagem = document.getElementById('minhaImagem');
    const divImg = document.getElementById('img');
    const textoSobre = document.getElementById('textoSobre');
    const paragrafo = textoSobre.querySelector('p');

    if (!imagem || !divImg || !textoSobre || !paragrafo) return;

    if (largura <= 700) {
      
      if (imagem.parentElement !== textoSobre) {
        textoSobre.insertBefore(imagem, paragrafo);
      }
    } else {
      
      if (imagem.parentElement !== divImg) {
        divImg.appendChild(imagem);
      }
    }
  }

  window.addEventListener('load', moverImagemResponsivo);
  window.addEventListener('resize', moverImagemResponsivo);
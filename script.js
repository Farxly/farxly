function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  // Autoplay workaround (karena banyak browser blok autoplay)
  document.body.addEventListener("click", () => {
    audio.play().catch(e => {
      console.log("Autoplay diblokir, klik user diperlukan");
    });
  });
});

const slides = document.querySelectorAll(".image.main img");
let currentSlide = 0;

// Fungsi untuk menampilkan slide aktif
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Fungsi untuk navigasi tombol
document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Menampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);

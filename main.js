document.title = "kelasss";

const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#ham-menu");

// Toggle: Tampilkan atau sembunyikan nav saat hamburger diklik
hamburger.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

// Klik di luar navbarNav dan hamburger => tutup nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

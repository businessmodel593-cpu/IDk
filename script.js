const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const scrollTopBtn = document.querySelector(".scroll-top");

hamburger.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    if (window.innerWidth < 768) navLinks.style.display = "none";
  });
});

document.querySelectorAll(".menu-filters button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".menu-filters .active").classList.remove("active");
    button.classList.add("active");

    const filter = button.dataset.filter;
    document.querySelectorAll(".menu-card").forEach(card => {
      card.style.display =
        filter === "all" || card.classList.contains(filter)
          ? "block"
          : "none";
    });
  });
});

document.querySelectorAll(".whatsapp-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.open("https://wa.me/2348000000000?text=Hello%20Anambra%20Kitchen,%20I%20want%20to%20place%20an%20order", "_blank");
  });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const slides = document.querySelectorAll(".hero-slide");
const previousButton = document.querySelector("#hero-prev");
const nextButton = document.querySelector("#hero-next");
const indicators = document.querySelectorAll(".hero-indicator");
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("is-active");
    indicators[currentSlide].classList.remove("is-active");
    indicators[currentSlide].setAttribute("aria-pressed", "false");
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("is-active");
    indicators[currentSlide].classList.add("is-active");
    indicators[currentSlide].setAttribute("aria-pressed", "true");
}

previousButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => showSlide(index));
});

setInterval(() => showSlide(currentSlide + 1), 6500);

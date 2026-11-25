
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(n) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    index = (n + slides.length) % slides.length;

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

function currentSlide(n) {
    showSlide(n);
}

setInterval(nextSlide, 3000);

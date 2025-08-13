let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 4000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
}

function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
}

function prevSlide() {
    let newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    resetInterval();
});

document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    resetInterval();
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
        resetInterval();
    });
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

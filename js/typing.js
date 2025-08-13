// typing.js

const texts = [
    "SELAMAT DATANG DI PERPUSTAKAAN",
    "PERPUSTAKAAN DIGITAL SMKN 20 JAKARTA",
    "TEMUKAN BUKU FAVORITMU DI SINI",
    "BUATAN JURUSAN RPL"
];

let index = 0;      // index kalimat
let charIndex = 0;  // index huruf
let isDeleting = false;
const typingElement = document.getElementById("typing");
const typingSpeed = 100;  // kecepatan ketik
const eraseSpeed = 50;    // kecepatan hapus
const delayBetween = 1500; // jeda antar kalimat

function typeEffect() {
    const currentText = texts[index];

    if (!isDeleting) {
        // Ketik huruf
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetween);
            return;
        }
    } else {
        // Hapus huruf
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length; // pindah ke kalimat berikutnya
        }
    }

    setTimeout(typeEffect, isDeleting ? eraseSpeed : typingSpeed);
}

// Mulai animasi
typeEffect();

// === Toggle show/hide password ===
document.addEventListener("DOMContentLoaded", function () {
    const eyeIcon = document.querySelector(".eye-icon");
    const passwordInput = document.querySelector(".password-wrapper input");

    eyeIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.textContent = "🙈"; // Ganti ikon saat terlihat
        } else {
            passwordInput.type = "password";
            eyeIcon.textContent = "👁"; // Balik lagi ke ikon mata
        }
    });

    // === Remember Session ===
    const rememberCheckbox = document.querySelector('.options input[type="checkbox"]');

    if (localStorage.getItem("rememberSession") === "true") {
        rememberCheckbox.checked = true;
    }

    rememberCheckbox.addEventListener("change", function () {
        localStorage.setItem("rememberSession", rememberCheckbox.checked);
    });

    // === Animasi tombol login ===
    const loginForm = document.getElementById("loginForm");
    const loginBtn = document.getElementById("loginBtn");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Cegah reload langsung

        // Ubah tombol jadi spinner
        loginBtn.innerHTML = "<span class='loader'></span>";
        loginBtn.disabled = true;

        // Simulasi delay sebelum redirect
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);
    });
});

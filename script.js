// =========================
// Countdown
// =========================

const weddingDate = new Date("August 6, 2026 20:00:00").getTime();
const timer = document.getElementById("timer");

function countdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        timer.innerHTML = "💍 Today is our Engagement!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `
        ${days} Days<br>
        ${hours} Hours<br>
        ${minutes} Minutes<br>
        ${seconds} Seconds
    `;
}

countdown();
setInterval(countdown, 1000);

// =========================
// Open Invitation
// =========================

const openBtn = document.getElementById("openBtn");
const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", async () => {
    try {
        await music.play();
    } catch (error) {
        console.log(error);
    }

    welcomeScreen.style.display = "none";
    mainContent.style.display = "block";
});
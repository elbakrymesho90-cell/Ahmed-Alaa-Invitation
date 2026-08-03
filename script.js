// =========================
// Ahmed & Alaa Invitation
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

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    timer.innerHTML =
        `${days} Days<br>
         ${hours} Hours<br>
         ${minutes} Minutes<br>
         ${seconds} Seconds`;
}

countdown();

setInterval(countdown, 1000);

// =========================
// Music
// =========================

const music = document.getElementById("music");

document.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });
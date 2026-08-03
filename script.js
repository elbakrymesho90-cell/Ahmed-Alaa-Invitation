const openBtn = document.getElementById("openBtn");
const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", async () => {
    try {
        await music.play();
        console.log("Music started");
    } catch (e) {
        alert(e.name + " : " + e.message);
        return;
    }

    welcomeScreen.style.display = "none";
    mainContent.style.display = "block";
});
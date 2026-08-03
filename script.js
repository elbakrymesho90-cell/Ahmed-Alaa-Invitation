const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");
const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");

openBtn.onclick = async function () {

    alert("Button Clicked");

    try {
    await music.play();
    alert("Music Started");
} catch (e) {
    alert(e.name + "\n" + e.message);
    console.error(e);
}
        alert("Music Started");
    } catch (e) {
        alert(e.message);
        console.log(e);
    }

    welcomeScreen.style.display = "none";
    mainContent.style.display = "block";
};
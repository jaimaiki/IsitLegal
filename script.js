const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const song = document.getElementById("loveSong");

yesBtn.addEventListener("click", () => {
  song.play();
  document.body.innerHTML = `
    <h1>💖 YAYYYY 💖</h1>
    <p>You just made me the happiest person alive 🥹</p>
    <p>Happy Valentine’s Day, Aditya ❤️</p>
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 200;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

let questions = [
  "Vickyluh, will you marry me? 💍",
  "Babe, will you be mine forever? ❤️",
  "Will you grow old with me? 🥹",
  "Will you hold my hand forever? 🤝",
  "Will you keep choosing me every day? ❤️",
  "Will you let me annoy you forever? 😂",
  "Will you make beautiful memories with me? 📸",
  "Will you always love me? ❤️",
  "Can I be your forever, Thangoww? 💍❤️"
];

let index = 0;

function start() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("qBox").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  document.getElementById("question").innerText = questions[index];
  document.getElementById("bigEmoji").innerText = "🥰";
  document.getElementById("msg").innerText = "";
}

/* YES CLICK */
function yesClick() {

  // message
  document.getElementById("msg").innerText =
    "Good job my boy 😘💖💋";

  // big emoji reaction
  document.getElementById("bigEmoji").innerText = "🥰😍💖";

  // hearts explosion
  for (let i = 0; i < 15; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖💋❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }

  // move to next question after delay
  setTimeout(() => {
    index++;

    if (index < questions.length) {
      showQuestion();
    } else {
      showFinal();
    }
  }, 1200);
}

/* NO CLICK */
function noClick() {
  document.getElementById("msg").innerText =
    "Champutha go choose option Yes otherwise Only once fasaaak 😡";
}

/* FINAL SCREEN */
function showFinal() {
  document.getElementById("qBox").classList.add("hidden");
  document.getElementById("finalScreen").classList.remove("hidden");
}

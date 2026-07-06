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

/* ✅ FIXED YES BUTTON */
function yesClick() {

  document.getElementById("msg").innerText =
    "Good job my boy 😘💖💋";

  document.getElementById("bigEmoji").innerText = "😍💖🥰";

  // hearts
  for (let i = 0; i < 15; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖💋";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }

  // IMPORTANT FIX: wait then go next
  setTimeout(() => {
    index++;

    if (index < questions.length) {
      showQuestion();
    } else {
      showFinal();
    }
  }, 1000);
}

/* NO BUTTON */
function noClick() {
  document.getElementById("msg").innerText =
    "Champutha go choose option Yes otherwise Only once fasaaak 😡";
}

/* FINAL */
function showFinal() {
  document.getElementById("qBox").classList.add("hidden");
  document.getElementById("finalScreen").classList.remove("hidden");
}
function noClick() {
  let msg = document.getElementById("msg");

  msg.innerText = "Champutha go choose yes option only po 😤";

  document.getElementById("bigEmoji").innerText = "😡💢";
}

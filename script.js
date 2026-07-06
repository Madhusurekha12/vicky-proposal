let questions = [
  "Vickyluh, will you marry me? 💍",
  "Babe, will you be mine forever? ❤️",
  "Will you grow old with me Vicky Mah? 🥹",
  "Will you hold my hand forever? 🤝",
  "Will you keep choosing me every day? ❤️",
  "Will you let me annoy you forever? 😂",
  "Will you make beautiful memories with me? 📸",
  "Will you always love me? ❤️",
  "Can I be your wife and your forever, Thangoww? 💍❤️"
];

let index = 0;

function start() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("qBox").style.display = "block";
  showQuestion();
}

function showQuestion() {
  document.getElementById("question").innerText = questions[index];
  document.getElementById("msg").innerText = "";
}

function answerYes() {

  // special moment at first question
  if (index === 0) {
    document.getElementById("msg").innerText = "You're the best baby 💖";
  }

  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    document.getElementById("qBox").innerHTML =
      `<h1>💍 YAYYYY 💖</h1>
       <p>I Love You Forever Thangoww 💕</p>`;
  }
}

function answerNo() {
  document.getElementById("msg").innerText =
    "pandhi, waste fellow, korangu, mental 😤 choose YES option otherwise champutha po 💢";
}

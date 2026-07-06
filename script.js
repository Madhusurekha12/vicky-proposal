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
}

function nextYes() {
  index++;

  document.getElementById("msg").innerText = "";

  if (index < questions.length) {
    showQuestion();
  } else {
    showFinal();
  }
}

function noClick() {
  let msg = document.getElementById("msg");

  msg.innerText = "😡 Choose YES only! You don’t have option!";
}

function showFinal() {
  document.getElementById("qBox").classList.add("hidden");
  document.getElementById("finalScreen").classList.remove("hidden");

  // small heart animation
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

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

function nextQuestion() {
  const box = document.getElementById("questionBox");

  if (index < questions.length) {
    box.innerHTML = `
      <p id="question">${questions[index]}</p>
      <button onclick="nextQuestion()">Yes ❤️</button>
    `;
    index++;
  } 
  else {
    box.innerHTML = `
      <h2>Yayyyyy ❤️</h2>
      <p>I Love You Forever Thangoww 💖</p>
      <h1>💍❤️</h1>
    `;
  }
}

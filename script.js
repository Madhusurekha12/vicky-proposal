// =============================
// All Screens
// =============================

const screens = document.querySelectorAll(".screen");

const welcome = document.getElementById("welcome");
const promise = document.getElementById("promise");
const marry = document.getElementById("marry");
const questions = document.getElementById("questions");
const lastQuestion = document.getElementById("lastQuestion");
const proposal = document.getElementById("proposal");
const celebration = document.getElementById("celebration");

// =============================
// Buttons
// =============================

const promiseBtn = document.getElementById("promiseBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const lastBtn = document.getElementById("lastBtn");
const finalYes = document.getElementById("finalYes");
const nextQuestion = document.getElementById("nextQuestion");

// =============================

const questionText = document.getElementById("questionText");
const noMessage = document.getElementById("noMessage");

// =============================

const questionList = [

"Babe, will you be mine forever? ❤️",

"Will you grow old with me? 🥹",

"Will you hold my hand forever? 🤝",

"Will you keep choosing me every day? ❤️",

"Will you let me annoy you forever? 😂",

"Will you make beautiful memories with me? 📸",

"Will you always love me? ❤️"

];

let currentQuestion = 0;

// =============================
// Helper Function
// =============================

function showScreen(screen){

screens.forEach(s=>s.classList.remove("active"));

screen.classList.add("active");

}

// =============================
// Welcome Screen
// =============================

setTimeout(()=>{

showScreen(promise);

},3000);

// =============================
// Promise Button
// =============================

promiseBtn.addEventListener("click",()=>{

showScreen(marry);

});

// =============================
// No Button
// =============================

noBtn.addEventListener("click",()=>{

noMessage.innerHTML="😡 Eai go choose option Yes po!";

});

// =============================
// Yes Button
// =============================

yesBtn.addEventListener("click",()=>{

showScreen(questions);

questionText.innerHTML=questionList[currentQuestion];

});

// =============================
// Questions
// =============================

nextQuestion.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion<questionList.length){

questionText.innerHTML=questionList[currentQuestion];

}else{

showScreen(lastQuestion);

}

});

// =============================
// Last Question
// =============================

lastBtn.addEventListener("click",()=>{

showScreen(proposal);

});

// =============================
// Final Proposal
// =============================

finalYes.addEventListener("click",()=>{

showScreen(celebration);

startHeartRain();

startKissRain();

startConfetti();

});
// =============================
// ❤️ Heart Rain
// =============================

function startHeartRain() {

    const container = document.getElementById("heartContainer");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 250);

}

// =============================
// 💋 Kiss Rain
// =============================

function startKissRain() {

    const container = document.getElementById("kissContainer");

    setInterval(() => {

        const kiss = document.createElement("div");

        kiss.className = "kiss";

        kiss.innerHTML = "💋";

        kiss.style.left = Math.random() * 100 + "vw";

        kiss.style.animationDuration = (3 + Math.random() * 2) + "s";

        kiss.style.fontSize = (20 + Math.random() * 20) + "px";

        container.appendChild(kiss);

        setTimeout(() => {
            kiss.remove();
        }, 6000);

    }, 350);

}

// =============================
// 🎊 Confetti
// =============================

function startConfetti() {

    const container = document.getElementById("confettiContainer");

    const colors = [
        "#ff4081",
        "#ffeb3b",
        "#4caf50",
        "#03a9f4",
        "#ff9800",
        "#9c27b0"
    ];

    setInterval(() => {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);

    }, 120);

}

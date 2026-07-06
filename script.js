const photos = [
  "images/image.png.jpeg",
  "images/image1.png.jpeg",
  "images/image2.png.jpeg",
  "images/image3.png.jpeg",
  "images/image4.png.jpeg",
  "images/image5.png.jpeg",
  "images/image6.png.jpeg",
  "images/image7.png.jpeg",
  "images/image8.png.jpeg",
  "images/image9.png.jpeg"
];
let questions=[
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

let index=0;

function nextQuestion(){

if(index<questions.length){
document.getElementById("question").innerHTML=
`
<p>${questions[index]}</p>
<button onclick="nextQuestion()">Yes ❤️</button>
`;
index++;
}
else{
document.getElementById("question").innerHTML=
`
<h2>Yayyyyy ❤️</h2>
<p>I Love You Forever Thangoww 💖</p>
<h1>💍❤️</h1>
`;
}
}

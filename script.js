function yesClick() {
  window.location.href = "yes.html";
}

/* loader */
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  }, 2000);
};

/* runaway NO */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
});

/* hearts */
const hearts = document.querySelector(".hearts");

function createHeart() {
  const s = document.createElement("span");
  s.innerHTML = "💖";
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = (Math.random() * 3 + 3) + "s";
  hearts.appendChild(s);

  setTimeout(() => s.remove(), 6000);
}

setInterval(createHeart, 200);

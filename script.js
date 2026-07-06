function yesClick() {
  // Redirect to surprise page
  window.location.href = "yes.html";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
});

// 💖 floating hearts generator
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

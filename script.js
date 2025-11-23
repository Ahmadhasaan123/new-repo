document.addEventListener("DOMContentLoaded", function () {
  // --- Floating Hearts ---
  function createHearts() {
    const heartsContainer = document.querySelector(".hearts-container");
    const heartSymbols = [
      "💕",
      "💖",
      "💗",
      "💘",
      "💝",
      "💞",
      "💟",
      "💌",
      "💋",
      "❤️",
    ];
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 6 + "s";
      heart.style.fontSize = Math.random() * 10 + 15 + "px";
      heartsContainer.appendChild(heart);
    }
  }

  createHearts();
  setInterval(() => {
    if (Math.random() > 0.7) createHearts();
  }, 10000);

  // --- Music Toggle ---
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  let isPlaying = false;
  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      bgMusic.pause();
      musicToggle.textContent = "🎵";
      isPlaying = false;
    } else {
      bgMusic
        .play()
        .then(() => {
          musicToggle.textContent = "🔊";
          isPlaying = true;
        })
        .catch(() => {
          musicToggle.textContent = "❌";
        });
    }
  });

  // --- Love Note Toggle ---
  const loveButton = document.getElementById("loveButton");
  const loveNote = document.getElementById("loveNote");
  loveButton.addEventListener("click", () => {
    loveNote.classList.toggle("visible");
    loveButton.textContent = loveNote.classList.contains("visible")
      ? "Hide My Love Note 💝"
      : "Click for a surprise 💝";
    createHeartBurst();
  });

  function createHeartBurst() {
    const heartsContainer = document.querySelector(".hearts-container");
    const burstHearts = ["💕", "💖", "💗", "💘", "💝", "💞"];
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent =
        burstHearts[Math.floor(Math.random() * burstHearts.length)];
      heart.style.left = Math.random() * 80 + 10 + "%";
      heart.style.top = Math.random() * 80 + 10 + "%";
      heart.style.fontSize = "25px";
      heart.style.zIndex = "1000";
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 2000);
    }
  }

  // --- Kiss Counter ---
  let kissCount = 0;
  const kissButton = document.getElementById("kissButton");
  const kissCountDisplay = document.getElementById("kissCount");
  kissButton.addEventListener("click", () => {
    kissCount++;
    kissCountDisplay.textContent = kissCount;
    createKissEffect();
  });

  function createKissEffect() {
    const kissEffects = document.querySelector(".kiss-effects");
    const kissSymbols = ["💋", "💕", "💖", "💗", "😘"];
    for (let i = 0; i < 5; i++) {
      const kiss = document.createElement("div");
      kiss.textContent =
        kissSymbols[Math.floor(Math.random() * kissSymbols.length)];
      kiss.style.position = "absolute";
      kiss.style.left = Math.random() * 100 + "%";
      kiss.style.top = Math.random() * 100 + "%";
      kiss.style.fontSize = "30px";
      kiss.style.animation = "float 2s ease-out forwards";
      kiss.style.pointerEvents = "none";
      kiss.style.zIndex = "1000";
      kissEffects.appendChild(kiss);
      setTimeout(() => kiss.remove(), 2000);
    }
  }

  // --- Character Click Messages ---
  function showSpecialMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.style.position = "fixed";
    messageDiv.style.top = "50%";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translate(-50%,-50%)";
    messageDiv.style.background = "linear-gradient(135deg,#FF69B4,#FF1493)";
    messageDiv.style.color = "white";
    messageDiv.style.padding = "1rem 2rem";
    messageDiv.style.borderRadius = "2rem";
    messageDiv.style.fontFamily = "Great Vibes, cursive";
    messageDiv.style.fontSize = "1.5rem";
    messageDiv.style.fontWeight = "600";
    messageDiv.style.boxShadow = "0 10px 30px rgba(255,105,180,0.4)";
    messageDiv.style.zIndex = "10000";
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
  }

  const partnerCharacter = document.getElementById("partner");
  const youCharacter = document.getElementById("you");
  partnerCharacter.addEventListener("click", () => {
    showSpecialMessage("You're the most beautiful person in the world! 💕");
    createHeartBurst();
  });
  youCharacter.addEventListener("click", () => {
    showSpecialMessage("I'm so lucky to have you in my life! 💖");
  });
});

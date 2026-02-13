// =========================
// script.js
// Typing effect + single audio button
// =========================

// Typing
const typedEl = document.getElementById("typed");
const retypeBtn = document.getElementById("retypeBtn");

const message = "Happy Valentine’s Day <3";

let i = 0;
let timer = null;

function startTyping(){
  if (!typedEl) return;

  typedEl.textContent = "";
  i = 0;

  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    typedEl.textContent += message[i] ?? "";
    i++;

    if (i >= message.length){
      clearInterval(timer);
      timer = null;
    }
  }, 85);
}

if (retypeBtn) retypeBtn.addEventListener("click", startTyping);
startTyping();

// Audio (one button)
const audio = document.getElementById("bgAudio");
const audioBtn = document.getElementById("audioBtn");

let isPlaying = false;

if (audio) audio.volume = 0.35;

async function toggleAudio(){
  if (!audio || !audioBtn) return;

  try{
    if (!isPlaying){
      await audio.play();
      isPlaying = true;
      audioBtn.textContent = "♡ pause music";
      audioBtn.setAttribute("aria-pressed", "true");
    } else {
      audio.pause();
      isPlaying = false;
      audioBtn.textContent = "♡ play music";
      audioBtn.setAttribute("aria-pressed", "false");
    }
  } catch (err){
    console.log("Audio play blocked:", err);
    audioBtn.textContent = "tap again ♡";
  }
}

if (audioBtn) audioBtn.addEventListener("click", toggleAudio);

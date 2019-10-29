// General Selectors
let skin = document.getElementById("skin");
let eyes = document.getElementById("eyes");
let mouth = document.getElementById("mouth");

// Switching cards
let showSkin = document.getElementById("show-skin-card");
let showEyes = document.getElementsByClassName("show-eyes-card");
let showMouth = document.getElementById("show-mouth-card");
let cardSkin = document.getElementById("select-skin-card");
let cardEyes = document.getElementById("select-eyes-card");
let cardMouth = document.getElementById("select-mouth-card");

Object.values(showEyes).map(item => {
  item.onclick = () => {
    cardSkin.classList.remove("active");
    cardSkin.classList.add("hidden");
    cardEyes.classList.add("active");
    cardEyes.classList.remove("hidden");
    cardMouth.classList.remove("active");
    cardMouth.classList.add("hidden");
  };
});

showMouth.onclick = () => {
  cardEyes.classList.remove("active");
  cardEyes.classList.add("hidden");
  cardMouth.classList.add("active");
  cardMouth.classList.remove("hidden");
};
showSkin.onclick = () => {
  cardEyes.classList.remove("active");
  cardEyes.classList.add("hidden");
  cardSkin.classList.add("active");
  cardSkin.classList.remove("hidden");
};

// Faces selector
let yellow = document.getElementById("yellow-skin");
let green = document.getElementById("green-skin");
let red = document.getElementById("red-skin");

yellow.onclick = () => {
  skin.setAttribute("src", "./assets/skin/yellow.png");
  cardEyes.classList.add("active");
  cardEyes.classList.remove("hidden");
  cardSkin.classList.add("hidden");
  cardSkin.classList.remove("active");
};
red.onclick = () => {
  skin.setAttribute("src", "./assets/skin/red.png");
  cardEyes.classList.add("active");
  cardEyes.classList.remove("hidden");
  cardSkin.classList.add("hidden");
  cardSkin.classList.remove("active");
};
green.onclick = () => {
  skin.setAttribute("src", "./assets/skin/green.png");
  cardEyes.classList.add("active");
  cardEyes.classList.remove("hidden");
  cardSkin.classList.add("hidden");
  cardSkin.classList.remove("active");
};

// Eyes Selector

let normal = document.getElementById("eye-normal");
let closed = document.getElementById("eye-closed");
let long = document.getElementById("eye-long");
let laughing = document.getElementById("eye-laughing");
let rolling = document.getElementById("eye-rolling");
let winking = document.getElementById("eye-winking");

normal.onclick = () => {
  eyes.setAttribute("src", "./assets/eyes/normal.png");
  cardEyes.classList.remove("active");
  cardEyes.classList.add("hidden");
  cardMouth.classList.add("active");
  cardMouth.classList.remove("hidden");
};

closed.onclick = () => {
  eyes.setAttribute("src", "./assets/eyes/closed.png");
  cardEyes.classList.remove("active");
  cardEyes.classList.add("hidden");
  cardMouth.classList.add("active");
  cardMouth.classList.remove("hidden");
};

long.onclick = () => {
  eyes.setAttribute("src", "./assets/eyes/long.png");
  cardEyes.classList.remove("active");
  cardEyes.classList.add("hidden");
  cardMouth.classList.add("active");
  cardMouth.classList.remove("hidden");
};

laughing.onclick = () => {
  eyes.setAttribute("src", "./assets/eyes/laughing.png");
  cardEyes.classList.remove("active");
  cardEyes.classList.add("hidden");
  cardMouth.classList.add("active");
  cardMouth.classList.remove("hidden");
};

rolling.onclick = () => {
  eyes.setAttribute("src", "./assets/eyes/rolling.png");
  cardEyes.classList.remove("active");
  cardEyes.classList.add("hidden");
  cardMouth.classList.add("active");
  cardMouth.classList.remove("hidden");
};

winking.onclick = () => {
  eyes.setAttribute("src", "./assets/eyes/winking.png");
  cardEyes.classList.remove("active");
  cardEyes.classList.add("hidden");
  cardMouth.classList.add("active");
  cardMouth.classList.remove("hidden");
};

// Mouth Selector

let open = document.getElementById("mouth-open");
let smiling = document.getElementById("mouth-smiling");
let straight = document.getElementById("mouth-straight");
let sad = document.getElementById("mouth-sad");
let teeth = document.getElementById("mouth-teeth");

open.onclick = () => {
  mouth.setAttribute("src", "./assets/mouth/open.png");
};
smiling.onclick = () => {
  mouth.setAttribute("src", "./assets/mouth/smiling.png");
};
straight.onclick = () => {
  mouth.setAttribute("src", "./assets/mouth/straight.png");
};
sad.onclick = () => {
  mouth.setAttribute("src", "./assets/mouth/sad.png");
};
teeth.onclick = () => {
  mouth.setAttribute("src", "./assets/mouth/teeth.png");
};

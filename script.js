const loginButton = document.querySelector(".login-button");
const loginWindow = document.querySelector(".login-window");
const sliderBtnPrev = document.querySelector(".button-prev");
const sliderBtnNext = document.querySelector(".button-next");
const quoteImage = document.querySelector(".quote-image");
const quote = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".quote-author");

loginButton.addEventListener("click", login);
sliderBtnNext.addEventListener("click", showNextQuote);
sliderBtnPrev.addEventListener("click", showPrevQuote);
let quoteIndex = getRandomNum(0, 30);

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function login() {
  // loginWindow.classList.add("active");
  loginWindow.hidden = false;
}

showQuote();

async function showQuote() {
  const quotes = `quotes-db.json`;
  const res = await fetch(quotes);
  const data = await res.json();
  console.log(quoteIndex);
  quoteImage.style.backgroundImage = `url(${data[quoteIndex]["url"]})`;
  quote.textContent = data[quoteIndex]["quote"];
  quoteAuthor.textContent = data[quoteIndex]["author"];
}

function showNextQuote() {
  if (quoteIndex < 29) {
    quoteIndex = ++quoteIndex;
    showQuote();
  } else {
    quoteIndex = 0;
    showQuote();
  }
}

function showPrevQuote() {
  if (quoteIndex > 0) {
    quoteIndex = --quoteIndex;
    showQuote();
  } else {
    quoteIndex = 29;
    showQuote();
  }
}

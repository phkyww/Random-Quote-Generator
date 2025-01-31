let btn = document.querySelector(".btn");
let quote_txt = document.querySelector(".quote-txt");
let author = document.querySelector(".author");

//fetch data from api and add text and author name
btn.addEventListener("click", () => {
  btn.innerHTML = "Loading..";
  btn.classList.add("loading");
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      btn.classList.remove("loading");
      btn.innerHTML = "Generate";
      quote_txt.innerText = `${data.quote}`;
      author.innerText = `By ${data.author}`;
    })
    .catch((reject) => {});
});

//speech function
let speech = document.getElementById("speech");
speech.addEventListener("click", (_) => {
  let txtToSpeech = new SpeechSynthesisUtterance(
    `${quote_txt.innerText} ${author.innerText}`
  );
  speechSynthesis.speak(txtToSpeech);
});

//copy function
let copy = document.getElementById("copy");
copy.addEventListener("click", (_) => {
  navigator.clipboard.writeText(quote_txt.innerText);
  alert("Text copied!!");
});

//share function
let x_share = document.getElementById("x-share");
x_share.addEventListener("click", (_) => {
  let url = `https://x.com/compose/post?url=${quote_txt.innerText}`;
  window.open(url, "_blank");
});

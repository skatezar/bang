const play = () => {
  let audio = document.getElementById('audio');
  audio.play();
}

// TODO: React to a click on the button!
const button = document.getElementById("clickme");
button.addEventListener("click", (click) => {
  // Do something (callback)
  button.classList.add('disabled');
  button.innerText = "BAAANG"
  play()
});



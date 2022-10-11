//Get elements from the DOM
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//Functions

//Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Switch the play/pause icon
function updateToggle() {
  if (this.paused) {
    toggle.textContent = "►";
  } else {
    toggle.textContent = "❚ ❚";
  }
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
  console.log(this.name);
}

//Skip button function
function skip() {
  console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}

//Event Listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggle);
video.addEventListener("pause", updateToggle);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => 
  range.addEventListener("change", handleRangeUpdate)
);
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

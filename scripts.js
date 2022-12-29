const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay () {
  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  // Does the same as:
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function togglePlayButton() {
  const icon = this.paused ? '►' : '❚❚';
  toggle.textContent = icon;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);

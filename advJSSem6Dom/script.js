'use strict';

const container = document.querySelector('div.container');

const interfaceDiv = document.createElement('div');
interfaceDiv.classList.add('interface');

const videoDiv = document.createElement('div');
videoDiv.classList.add('video');

const controlEl = document.createElement('div');
controlEl.classList.add('control');
const monitorEl = document.createElement('div');
monitorEl.classList.add('monitor');

container.appendChild(videoDiv);
container.appendChild(interfaceDiv);
interfaceDiv.appendChild(controlEl);
interfaceDiv.appendChild(monitorEl);

// video
const videoEl = document.createElement('video');
videoEl.src = "video/321.mp4";
videoEl.classList.add('video-size');
videoDiv.appendChild(videoEl);


// controls
const playEl = document.createElement('i');
playEl.classList.add('fa');
playEl.classList.add('fa-play');
controlEl.appendChild(playEl);

const pauseEl = document.createElement('i');
pauseEl.classList.add('fa');
pauseEl.classList.add('fa-pause');
controlEl.appendChild(pauseEl);


// monitors
const volumeEl = document.createElement('input');
volumeEl.classList.add('volume');
volumeEl.type = 'range';
volumeEl.min = 0;
volumeEl.max = 10;
volumeEl.value = 10;
monitorEl.appendChild(volumeEl);

const progressEl = document.createElement('input');
progressEl.classList.add('time');
progressEl.type = 'range';
progressEl.value = 0;
progressEl.min = 0;
progressEl.max = 100;
monitorEl.appendChild(progressEl);

const timerEl = document.createElement('p');
timerEl.classList.add('timer');
timerEl.innerText = 0;
monitorEl.appendChild(timerEl);

// events

volumeEl.addEventListener('change', (e) => {
    videoEl.volume = e.target.value / 10;
});

playEl.addEventListener('click', function(e) {
    videoEl.play();
});

pauseEl.addEventListener('click', function(e) {
    videoEl.pause();
});

videoEl.addEventListener('timeupdate', function(e) {
    timerEl.innerText = videoEl.currentTime;
    progressEl.value = Math.round(videoEl.currentTime / videoEl.duration * 100);
});

progressEl.addEventListener('change', (e) => {
    videoEl.currentTime = videoEl.duration * (e.target.value / 100);
});
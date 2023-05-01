const video = document.querySelector("video");
// const playBtn = document.getElementById("play");
// const playBtnIcon = playBtn.querySelector("i");
// const muteBtn = document.getElementById("mute");
// const muteBtnIcon = muteBtn.querySelector("i");
// const volumeRange = document.getElementById("volume");
// const currentTime = document.getElementById("currentTime");
// const totalTitme = document.getElementById("totalTime");
// const timeline = document.getElementById("timeline");
// const fullScreenBtn = document.getElementById("fullScreen");
// const fullScreenIcon = fullScreenBtn.querySelector("i");
const videoContainer = document.getElementById("videoContainer");
// const videoControls = document.getElementById("videoControls");

// let controlsTimeout = null;
// let controlsMovementTimeout = null;
// let volumeValue = 0.5;
// video.volume = volumeValue;

// const handlePlayClick = (e) => {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
//   playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
// };

// const handleScreenClick = (e) => {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
//   playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
// };

// const handleMute = (e) => {
//   if (video.muted) {
//     video.muted = false;
//     volumeRange.value = volumeValue == 0 ? 0.5 : volumeValue;
//   } else {
//     video.muted = true;
//     volumeRange.value = 0;
//   }
//   muteBtnIcon.classList = video.muted
//     ? "fas fa-volume-mute"
//     : "fas fa-volume-up";
// };

// const handleVolumeChange = (event) => {
//   const {
//     target: { value },
//   } = event;
//   if (video.muted) {
//     video.muted = false;
//     muteBtnIcon.classList = "fas fa-volume-up";
//   }
//   volumeValue = value;
//   video.volume = value;
//   if (value == 0) {
//     video.muted = true;
//     muteBtnIcon.classList = "fas fa-volume-mute";
//   }
// };

// const formatTime = (seconds) =>
//   new Date(seconds * 1000).toISOString().substring(14, 19);

// const handleLoadedMetadata = () => {
//   totalTitme.innerText = formatTime(Math.floor(video.duration));
//   timeline.max = Math.floor(video.duration);
// };

// const handleTimeUpdate = () => {
//   currentTime.innerText = formatTime(Math.floor(video.currentTime));
//   timeline.value = Math.floor(video.currentTime);
// };

// const handleTimelineChange = (event) => {
//   const {
//     target: { value },
//   } = event;
//   video.currentTime = value;
// };

// const handleFullscreen = () => {
//   const fullscreen = document.fullscreenElement;
//   if (fullscreen) {
//     document.exitFullscreen();
//     fullScreenIcon.classList = "fas fa-expand";
//   } else {
//     videoContainer.requestFullscreen();
//     fullScreenIcon.classList = "fas fa-compress";
//   }
// };

// const hideConstrols = () => videoControls.classList.remove("showing");

// const handleMouseMove = () => {
//   if (controlsTimeout) {
//     clearTimeout(controlsTimeout);
//     controlsTimeout = null;
//   }
//   if (controlsMovementTimeout) {
//     clearTimeout(controlsMovementTimeout);
//     controlsMovementTimeout = null;
//   }
//   videoControls.classList.add("showing");
//   controlsMovementTimeout = setTimeout(hideConstrols, 3000);
// };

// const handleMouseLeave = () => {
//   controlsTimeout = setTimeout(hideConstrols, 3000);
// };

const handleEnded = () => {
  const { id } = videoContainer.dataset;
  fetch(`/api/videos/${id}/view`, { method: "POST" });
};

// playBtn.addEventListener("click", handlePlayClick);
// muteBtn.addEventListener("click", handleMute);
// volumeRange.addEventListener("input", handleVolumeChange);
// // video.addEventListener("canplay", handleLoadedMetadata);
// video.addEventListener("loadeddata", handleLoadedMetadata);
// video.addEventListener("timeupdate", handleTimeUpdate);
video.addEventListener("ended", handleEnded);
// video.addEventListener("click", handleScreenClick);
// videoContainer.addEventListener("mousemove", handleMouseMove);
// videoContainer.addEventListener("mouseleave", handleMouseLeave);
// timeline.addEventListener("input", handleTimelineChange);
// fullScreenBtn.addEventListener("click", handleFullscreen);

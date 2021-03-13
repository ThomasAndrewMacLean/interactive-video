let beeContainer = document.getElementById("beeContainer");
let beeVideo;

const turnBackgroundBlack = () => {
  document.querySelector("body").style.backgroundColor = "#333";
};
const turnBackgroundYellow = () => {
  document.querySelector("body").style.backgroundColor = "#e2e246";
};
const growVideo = () => {
  beeContainer.style.transform = "scale(2)";
};
const createVideo = () => {
  (beeVideo = document.createElement("video")), (beeVideo.id = "beeVideo");
  var e = document.createElement("source");
  (e.type = "video/mp4"),
    (e.src = "video/beefarm.mp4"),
    beeVideo.setAttribute("webkit-playsinline", "webkit-playsinline"),
    beeVideo.setAttribute("playsinline", "playsinline"),
    beeVideo.appendChild(e),
    beeVideo.addEventListener("click", () => {
      if (beeVideo.classList.contains("playing")) {
        beeVideo.pause(), beeVideo.classList.remove("playing");
      } else {
        beeVideo.play(), beeVideo.classList.add("playing");
      }
    }),
    beeContainer.appendChild(beeVideo),
    beeVideo.load();

  beeVideo.addEventListener("timeupdate", () => {
    console.log(beeVideo.currentTime);
    if (3 < beeVideo.currentTime && beeVideo.currentTime < 4) {
      turnBackgroundBlack();
    }

    if (10 < beeVideo.currentTime && beeVideo.currentTime < 11) {
      growVideo();
    }

    if (7 < beeVideo.currentTime && beeVideo.currentTime < 8) {
      turnBackgroundYellow();
    }
  });
};

createVideo();

let beeContainer = document.getElementById("beeContainer");
let beeVideo;

const changeBackgroundColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

const scaleVideo = (scale) => {
  beeContainer.style.transform = "scale(" + scale + ")";
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
    const controls = Array.from(
      document.getElementById("controls").querySelectorAll("li")
    );
    const totalLength = beeVideo.duration;
    const numberOfActions = controls.length;
    const timePerAction = totalLength / numberOfActions;
    const currentControlIndex = Math.floor(
      beeVideo.currentTime / timePerAction
    );
    if (
      currentControlIndex === totalLength ||
      Number.isNaN(currentControlIndex)
    ) {
      return;
    }
    const currentControl = controls[currentControlIndex];
    const changeValue = currentControl.querySelector("input").value;
    switch (currentControl.querySelector("select").value) {
      case "color":
        changeBackgroundColor(changeValue);
        break;

      case "scale":
        scaleVideo(changeValue);
        break;

      default:
        break;
    }
  });
};

createVideo();

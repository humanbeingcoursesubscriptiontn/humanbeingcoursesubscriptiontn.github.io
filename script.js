// MOBILE MENU
function toggleMenu() {
  let nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// FAKE STATS ANIMATION
function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let increment = range / (duration / 10);
  let current = start;

  let timer = setInterval(() => {
    current += increment;
    obj.innerText = Math.floor(current);

    if (current >= end) {
      obj.innerText = end;
      clearInterval(timer);
    }
  }, 10);
}

// LOAD VIDEOS (MANUAL FOR NOW)
function loadVideos() {
  let container = document.getElementById("videoContainer");

  let videos = [
    "YOUR_VIDEO_ID",
    "YOUR_VIDEO_ID",
    "YOUR_VIDEO_ID"
  ];

  videos.forEach(id => {
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.allowFullscreen = true;
    container.appendChild(iframe);
  });
}

// INIT
window.onload = () => {
  animateValue("subCount", 0, 1000, 2000);
  animateValue("videoCount", 0, 50, 2000);
  loadVideos();
};

enableHorizontalScrolling();
window.onresize = enableHorizontalScrolling;

function enableHorizontalScrolling() {
  if (window.innerWidth < 991) {
    disableHorizontalScrolling();
    return;
  }
  const track = document.querySelector(".track");
  const frame = document.querySelector(".frame");
  const items = Array.from(frame.children);
  let frameWidth = 0;

  items.forEach((item) => {
    const itemWidth = item.offsetWidth;
    frameWidth += itemWidth;
  });

  const trackWidth = frameWidth - window.innerWidth + window.innerHeight;
  track.style.height = trackWidth + "px";
  const trackOffset = track.getBoundingClientRect().top + window.scrollY;

  handleScroll();
  window.onscroll = handleScroll;

  function handleScroll() {
    const scrollY = window.scrollY;
    const max = trackWidth - window.innerHeight;
    let shift = scrollY - trackOffset;
    if (shift < 0) shift = 0;
    if (shift > max) shift = max;
    frame.style.transform = `translateX(-${shift}px)`;
  }
}

function disableHorizontalScrolling() {
  const track = document.querySelector(".track");
  const frame = document.querySelector(".frame");
  track.style.height = "auto";
  frame.style.transform = "translateX(0)";
  window.onscroll = null;
}

handleScroll();
window.onresize = handleScroll;

function handleScroll() {
  if (window.innerWidth < 991) return;
  if (window.orientation === undefined) enableHorizontalScroll();
  else disableHorizontalScroll();
}

function enableHorizontalScroll() {
  const track = document.querySelector(".track");
  const camera = document.querySelector(".camera");
  const frame = document.querySelector(".frame");
  const items = Array.from(frame.children);

  handleCSS();

  const frameWidth = calculateFrameWidth();
  const trackWidth = frameWidth - window.innerWidth + window.innerHeight;
  track.style.height = `${trackWidth}px`;
  const trackOffset = track.offsetTop;
  shiftFrame();
  window.onscroll = shiftFrame;

  function calculateFrameWidth() {
    let width = 0;
    items.forEach((item) => {
      const itemWidth = item.offsetWidth;
      width += itemWidth;
    });
    return width;
  }

  function handleCSS() {
    camera.style.position = "sticky";
    camera.style.top = "0";
    camera.style.overflow = "hidden";
    frame.style.flexDirection = "row";
  }

  function shiftFrame() {
    const scrollY = window.scrollY;
    const max = trackWidth - window.innerHeight;
    let shift = scrollY - trackOffset;
    if (shift < 0) shift = 0;
    if (shift > max) shift = max;
    frame.style.transform = `translateX(-${shift}px)`;
  }
}

function disableHorizontalScroll() {
  const track = document.querySelector(".track");
  const camera = document.querySelector(".camera");
  const frame = document.querySelector(".frame");
  track.style.height = "auto";
  camera.style.height = "auto";
  frame.style.transform = "translateX(0)";
  frame.style.flexDirection = "column";
  window.onscroll = null;
}

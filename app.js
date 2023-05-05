const track = document.querySelector(".track");
const frame = document.querySelector(".frame");
const items = Array.from(frame.children);
let frameWidth = 0;

items.forEach((item) => {
  const itemWidth = item.offsetWidth;
  frameWidth += itemWidth;
});

track.style.height = frameWidth + "px";
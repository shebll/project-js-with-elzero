let scroller = document.querySelector(".scroller");
const scrollHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let topOffset = document.documentElement.scrollTop;
  // console.log((topOffset / (scrollHeight - clientHeight)) * 100);
  let width = (topOffset / (scrollHeight - clientHeight)) * 100;
  scroller.style.width = ` ${width}% `;
});

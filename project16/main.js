let scrollToTop = document.querySelector(".scrollToTop");
window.onscroll = function () {
  if (window.scrollY >= document.documentElement.clientHeight) {
    scrollToTop.style.right = "10px";
  } else {
    scrollToTop.style.right = "-70px";
  }
};
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

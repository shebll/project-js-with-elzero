let open = document.querySelector(".nav .nav-btn-open");
let close = document.querySelector(".nav .content .nav-btn-close");
let nav = document.querySelector(".nav .content");

open.onclick = function () {
  nav.style.transform = "translateY(0%)";
  open.style.display = "none";
};
close.onclick = function () {
  nav.style.transform = "translateY(-100%)";
  open.style.display = "block";
};
document.onkeyup = function (e) {
  // console.log(e);
  if (e.key == "Escape") {
    nav.style.transform = "translateY(-100%)";
    open.style.display = "block";
  }
};

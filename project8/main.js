let section = document.querySelector(".three");
let nums = document.querySelectorAll(".three .nums .num");
let flag = false;
function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.innerHTML++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!flag) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    flag = true;
  }
};

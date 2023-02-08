let taps = document.querySelectorAll("ul li");
let contents = document.querySelectorAll(".content div");
console.log(taps);
console.log(contents);
////////////
taps.forEach((tap) => {
  tap.addEventListener("click", removeAllActive);
});
function removeAllActive() {
  taps.forEach((tap) => {
    // console.log(this.innerHTML);
    contents.forEach((content) => {
      content.style.display = "none";
      if (content.classList.contains(this.innerHTML)) {
        content.style.display = "block";
      }
    });
    tap.classList.remove("active");
    this.classList.add("active");
    this.classList;
  });
}

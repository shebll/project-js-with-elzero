let taps = document.querySelectorAll(".content .tap");
let cards = document.querySelectorAll(".content .card");

taps.forEach((tap) => {
  tap.addEventListener("click", removeAllActive);
  tap.addEventListener("click", mangeCards);
  tap.addEventListener("click", () => {
    let s = document.querySelectorAll(
      `.content .cards .card.${tap.innerHTML.toLowerCase()}`
    );
    s.forEach((s) => {
      s.style.display = "flex";
    });
  });
});

//function remove all active class and put on the owner
function removeAllActive() {
  taps.forEach((tap) => {
    tap.classList.remove("active");
    this.classList.add("active");
  });
}
function mangeCards() {
  cards.forEach((card) => {
    card.style.display = "none";
  });
}

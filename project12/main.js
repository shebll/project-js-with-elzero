let randomDigit1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let randomDigit2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//the color in hex = #FF00FF
let finalColor1 = [];
let finalColor2 = [];
// console.log(Math.random()); //random number from 0 to 1
// console.log(Math.random() * randomDigit.length); // random number from 0 * 3 to 1 * 3 (mean 0 to 3) , but have a fraction
// console.log(Math.trunc(Math.random() * randomDigit.length)); // random number from 0 * 3 to 1 * 3 (mean 0 to 3)
// console.log(randomDigit[Math.trunc(Math.random() * randomDigit.length)]); // random number from 0 * 3 to 1 * 3 (mean 0 to 3)

for (let i = 0; i < 6; i++) {
  finalColor1.push(
    randomDigit1[Math.trunc(Math.random() * randomDigit1.length)]
  );
}
for (let i = 0; i < 6; i++) {
  finalColor2.push(
    randomDigit2[Math.trunc(Math.random() * randomDigit2.length)]
  );
}
let theColor1 = `#${finalColor1.join("")}`;
let theColor2 = `#${finalColor2.join("")}`;
// document.body.append(theColor);
document.body.style.backgroundImage = `linear-gradient(${theColor1},${theColor2})`;

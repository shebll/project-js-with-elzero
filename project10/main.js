
let eventDAte =  new Date("Dec 26, 2023 23:59:59").getTime();
// console.log(eventDAte)

let counter =setInterval(()=>{
  let now  =  new Date().getTime();
  let diff =eventDAte - now ;
  let days =Math.floor(diff /(1000 * 60 * 60 * 24 )  ) ;
  let hours=Math.floor( diff %(1000 * 60 * 60 * 24 ) / 1000 /60 / 60 );
  let mins=Math.floor( diff %(1000 * 60 * 60 ) / 1000 /60 );
  let secs=Math.floor( diff %(1000 * 60  ) / 1000 );
  document.querySelector(".CONTENT .days").innerHTML = days ;
  document.querySelector(".CONTENT .hours").innerHTML = hours ;
  document.querySelector(".CONTENT .minutes").innerHTML = mins ;
  document.querySelector(".CONTENT .seconds").innerHTML = secs ;
},1000)
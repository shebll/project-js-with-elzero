fetch("https://api.fastforex.io/fetch-all?api_key=c10d83a966-d4adbd0e2d-rp7ewb").then((result) =>{
  //console.log(result);
  //console.log(result.json());
  return result.json();
}).then((currency)=>{
  // console.log(currency.results["EGP"]);
  // console.log(currency.results["SAR"]);
  let amount =document.querySelector(".amount");
  console.log(amount.innerHTML) ;
  let amountEGP =document.querySelector(".egp span") ;
  let amountSAR =document.querySelector(".sar span") ;
  amountEGP.innerHTML = (amount.innerHTML * currency.results["EGP"] ).toFixed(2) ;
  amountSAR.innerHTML = (amount.innerHTML * currency.results["SAR"]).toFixed(2) ;
})
  
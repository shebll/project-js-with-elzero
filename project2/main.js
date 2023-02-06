fetch(
  "https://api.currencyfreaks.com/latest?apikey=86a483de47b44ca19764706b404a7cb5"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.querySelector(
      ".last-date"
    ).innerHTML = `last update in ${data.date}`;
    let egpRate = data.rates["EGP"];
    let sarRate = data.rates["SAR"];
    let amount = +document.querySelector(".amount ").innerHTML;
    document.querySelector(".egp span").innerHTML = (amount * egpRate).toFixed(
      2
    );
    document.querySelector(".sar span").innerHTML = (amount * sarRate).toFixed(
      2
    );
  });

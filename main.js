//render top 10 crypto tickers to popup

//create some functionality to alert user when a big price move has happened
//while data is coming in form api checking for movement
//if big move happens, send an alert

const loadCoins = () => {
  const req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      renderCoins(JSON.parse(req.responseText));
    }
  };

  // req.open('GET', 'https://api.coinranking.com/v1/public/coins/?limit=10')
  req.open('GET', 'https://api.coincap.io/v2/assets/?limit=10');

  //maybe need to come back an specify content type
  req.setRequestHeader('Accept-Language', 'en-US');

  req.send();
};

//data.coins[i].name
const renderCoins = data => {
  const content = document.getElementById('content');
  console.log(data);

  data.data.forEach(coin => {
    const main = document.createElement('div');
    const price = coin.priceUsd;
    const roundedPrice = Math.round(price * 100) / 100;
    main.className = 'coinDiv';
    main.innerHTML = `
                  <div class= "eachCoin">
                    <div class="crypto">${coin.rank}: ${coin.name}</div>
                    <div class = "price">$${roundedPrice}</div>
                  </div><br />
            `;

    content.appendChild(main);
  });
};

loadCoins();

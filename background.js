const checkMovement = () => {
    const req = new XMLHttpRequest()
      
        req.onreadystatechange = () => {
          if(req.readyState === 4 && req.status === 200) {
            alertMovement(JSON.parse(req.responseText))
          }
        }
      
        // req.open('GET', 'https://api.coinranking.com/v1/public/coins/?limit=10')
        req.open('GET', 'https://api.coincap.io/v2/assets/?limit=10')
         
        //maybe need to come back an specify content type
        req.setRequestHeader('Accept-Language', "en-US")
      
        req.send()
}

const alertMovement = (data) => {
    data.data.forEach(coin => {
   
    if(coin.priceUsd / coin.vwap24Hr > 1.01) {
        alert(`${coin.name} PRICE MOVEMENT`)
    } else if(coin.priceUsd / coin.vwap24Hr < .99) {
        alert(`${coin.name} PRICE MOVEMENT`)
    }
    })
    //if price movement is x amount
     //window alert
    //must figure out how to recursivley fetch data 
    // setTimeout(checkMovement, 60000)
}

checkMovement()
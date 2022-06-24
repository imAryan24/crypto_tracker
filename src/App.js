import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';


function App() {


  const [coins, setCoins] = useState([]);
    const [search, setSearch]=useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {

        setCoins(res.data);
        console.log(res.data)
      })
      .catch(error => console.log(error))
      ;
  
  }, []);

  const handleChange=(event)=> {
    
   setSearch(event.target.value )
  }
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a Currency</h1>
        <form>
          <input type="text" placeholder ="search" className="coin-input" onChange={handleChange}/>
      </form>  
      </div>
       {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            volume={coin.market_cap}
            image={coin.image}
           
          />
        );
      })}
    </div>
  );
}

export default App;

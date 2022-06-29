import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';
import './Coin.css'


function App() {


  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {

        setCoins(res.data);
        console.log(res.data)
      })
      .catch(error => console.log(error))
      ;
  
  }, []);

  function handleChange(event){
    setSearch(event.target.value)
    event.preventDefault();
  }
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a Currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
           
            />
      </form>  
      </div>
          <div>
                 <table className='table'>
        <thead>
          <tr>
            <th class="col1"> Coin </th>
            <th class="col2"> Price </th>
            <th class='col3'>24H Volume</th>
            <th class="col4">24H</th>
            <th class='col5'>Market Cap</th>

            {/* <th class="cg-sticky-col-header cg-sticky-first-col" data-sort-method="none" role="columnheader"></th>
        <th class="coin-name text-center cg-sticky-col-header cg-sticky-third-col px-0" role="columnheader">
          Coin</th>
          <th class="price text-right pl-0" data-sort-method="number" role="columnheader">
Price
        </th>
        <th class="change24h text-right col-market" data-sort-method="number" role="columnheader">
24h
        </th>
        <th class="lit text-right col-market" data-sort-method="number" role="columnheader">
24h Volume
        </th>
        <th class="cap text-right col-market" data-sort-method="number" role="columnheader">
Mkt Cap
</th></tr></thead> */}
          </tr>
          </thead>
      </table>
      {
        filteredCoins.map((coin) => {
          return   <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          image={coin.image}
          priceChange={(typeof coin.price_change_percentage_24h=='number') ? coin.price_change_percentage_24h.toFixed(2) : coin.price_change_percentage_24h} 
          volume={coin.total_volume}
        />
        })
      }
          </div>
   
    </div>
  );
}

export default App;

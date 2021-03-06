import React from 'react'
import './Coin.css'
function Coin(
  props) {
  return (
    <div>
    <div className='page-head'>
     {/* <table className='table'>
        <thead>
          <tr>
           
            <th class="col1"> Coin </th>
            <th class="col2"> Price </th>
            <th class='col3'>24H Volume</th>
            <th class="col4">24H</th>
            <th class='col5'>Market Cap</th> */}

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
          {/* </tr>
          </thead>
      </table> */}
    <div className='coin-container '>
     
      <div className='coin-row'>
        <div className='coin'>
          <img src={props.image} alt='crypto' />
          <h1>{props.name}</h1>
          <p className='coin-symbol'>{props.symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>₹{props.price}</p>
          <p className='coin-volume'>₹{props.volume.toLocaleString()}</p>

          {props.priceChange < 0 ? (
            <p className='coin-percent red'>{props.priceChange}%</p>
          ) : (
            <p className='coin-percent green'>{props.priceChange}%</p>
          )}
          <p className='coin-marketcap'>
            ₹{props.marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div></div>
    </div>
  );
};

export default Coin;
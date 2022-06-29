import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from "react-router-dom";
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../Context';
import { useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';

const useStyles = makeStyles((theme) => ({
    Carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
    CarouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
    
}));
const Carousel = () => {

    const [trending, setTrending] = useState([]);

    const classes = useStyles();

    const { currency,symbol } = CryptoState();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        
        setTrending(data);
    };


    useEffect(() => {
        fetchTrendingCoins();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);

    const items = trending.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;
        return (
            <Link className={classes.CarouselItem} to={"/coins/${coin.id"}>
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }} />


                <span>
                    {coin?.symbol}
                    &nbsp;
                    <span
                        style={{
                            color: profit > 0 ? "rgb(14,203,129" : "red",
                            fontWeight:500,
                        }}>
                        {profit && "+"}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%
                        
                    </span>
                </span>
                 <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {(coin.current_price.toLocaleString())}
        </span>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };
    


  return (
      <div className={classes.Carousel}>
          <AliceCarousel
              mouseTracking
              infinite
              autoPlayInterval={ 1000}
              animationDuration={1500}
              disableDotsControls
        disableButtonsControls
          responsive={responsive}
              autoPlay
              items={items}
          />
    </div>
  )
}

export default Carousel
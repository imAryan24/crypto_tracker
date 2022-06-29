import React from 'react'
import axios from 'axios';
import { CoinList } from "../config/api";
import { CryptoState } from '../Context';
import { useEffect ,useState} from 'react';
import {
    Container,
    ThemeProvider,
    Typography,
    createTheme,
    TextField,
    TableContainer,
    LinearProgress,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles
} from '@material-ui/core';

import { useNavigate } from "react-router-dom"



const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {currency} = CryptoState();
    const useStyles = makeStyles();
    // const classes = useStyles();
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    const handleSearch = () => {
        return coins.filter(
            (coin) => 
            coin.name.toLowerCase().include(search) ||
                coin.symbol.toLowerCase().includes(search)
        )
        
    }
    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data);
        setLoading(false);
    }

   useEffect(() => {
        fetchCoins();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);


// const classes = useStyles();


  return (
    
      <ThemeProvider theme={darkTheme}>
          <Container style={{ textAlign: "center" }}>
              <Typography
                  variant="h4"
                  style={{
                      margin: 18,
                      fontFamily:"Montserrat"
              }}>
            Cryptocurrency Prices by Market Cap
              </Typography>

              <TextField
                  label="Search for Crypto Currency..."
                  variant="outlined"
                  style={{
                  marginBottom: 20,width:"100%"
                  }}
              onChange={(e)=>setSearch(e.target.value)}
></TextField>
          </Container>
          <TableContainer>
              {loading ? (
                  <LinearProgress style={{backgroundColor:"gold"}}/>
              ) : (
                      <Table>
                          <TableHead style={{backgroundColor:"#EEBC1D"}}>
                          <TableRow>
                                  {["Coin", "Price", "24H Change", "Market Cap"].map((head) => (
                                      <TableCell
                                          style={{
                                              color: "black",
                                              fontWeight: "700",
                                              fontFamily: "Montserrat",
                                          }}
                                          key={head}
                                  align = { head === "Coin" ? "" : "right"}
                                  >
                            {head}  
                              
                              </TableCell>
                              )
                              )}
                              </TableRow>
                          </TableHead>

                          {/* <TableBody>
                              {handleSearch().map((coin)=>{
                                  const profit= coin.price_change_percentage>0;
                                  
                                  return (
                                      <TableRow
                                          onClick={() => navigate.pushState('/coins/${coin.id}')}
                                      ClassName={classes.coin}
                                      key={coin.name}
                                      >
                                          <TableCell
                                              component="th"
                                              scope="row"
                                              styles={{
                                              display:"flex",
                                              gap:15,
                                              }}>
                                              <img 
                                                  src={coin?.image}
                                                  alt={coin.name}
                                                  height="50"
                                              style={{marginBottom:10}}/>



                                              </TableCell>


                               </TableRow>)
                              })}
                          </TableBody> */}

                      </Table>
              )}
        </TableContainer>


      </ThemeProvider>
  )
}

export default CoinsTable
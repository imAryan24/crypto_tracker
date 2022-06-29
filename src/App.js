import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/coins/:id" element={<CoinPage />}/>
        </Routes>
      </div>  
      </BrowserRouter>
    
  );
}

export default App;

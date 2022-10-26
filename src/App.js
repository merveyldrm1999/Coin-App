import { useState } from "react";
import "./App.css";
import CoinIndex from "./compenents/CoinIndex";
import NavbarCoin from "./compenents/NavbarCoin";
import IslemGecmisi from "./pages/IslemGecmisi";
// import Layout from "../pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlimSatim from "./pages/AlimSatim";
import { MainContext, useContext } from "./context";

function App() {
  const [wallet, setWallet] = useState(
    localStorage.getItem("items") !== "undefined" &&
      localStorage.getItem("items") !== null
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  const data = {
    wallet,
    setWallet,
  };
  return (
    <div className="App">
      <MainContext.Provider value={data}>
        <BrowserRouter>
          <NavbarCoin />

          <Routes>
            <Route path="/alimsatim" element={<AlimSatim />} />
            <Route path="/islemgecmisi" element={<IslemGecmisi />} />
            <Route path="/" element={<CoinIndex />} />

            <Route />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
      {/* <CoinIndex /> */}
    </div>
  );
}

export default App;

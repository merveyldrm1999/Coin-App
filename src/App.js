import { useState } from "react";
import "./App.css";
import CoinIndex from "./compenents/CoinIndex";
import NavbarCoin from "./compenents/NavbarCoin";
import IslemGecmisi from "./pages/IslemGecmisi";
// import Layout from "../pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlimSatim from "./pages/AlimSatim";

function App() {
  const [wallet, setWallet] = useState("light");
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarCoin />

        <Routes>
          <Route
            path="/alimsatim"
            element={<AlimSatim wallet={wallet} setWallet={setWallet} />}
          />
          <Route path="/islemgecmisi" element={<IslemGecmisi />} />
          <Route path="/" element={<CoinIndex />} />

          <Route />
        </Routes>
      </BrowserRouter>
      {/* <CoinIndex /> */}
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import CoinIndex from "./compenent/CoinIndex";
// import NavbarCoin from "./compenent/NavbarCoin";

// function App() {
//   const [page, setPage] = useState("alımSatım");
//   return (
//     <div className="App">
//       <NavbarCoin setPage={setPage} />
//       {page == "alımSatım"
//         ? console.log("alımsatım")
//         : console.log("islemgecmisi")}
//       <CoinIndex />
//     </div>
//   );
// }

// export default App;

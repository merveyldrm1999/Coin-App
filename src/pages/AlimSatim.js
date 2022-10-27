// import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  Row,
  Table,
} from "reactstrap";
import { MainContext, useContext } from "../context";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";

const AlimSatim = () => {
  const [sellCount, setSellCount] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState([]);

  const { wallet, setWallet } = useContext(MainContext);
  const { sellWallet, setSellWallet } = useContext(MainContext);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(wallet));
  }, [wallet]);
  useEffect(() => {
    localStorage.setItem("sellwallets", JSON.stringify(sellWallet));
  }, [sellWallet]);

  const handleSell = () => {
    let sellcoin = wallet.find((val) => val.name === selectedCoin.value);

    if (sellcoin.count >= sellCount) {
      axios
        .get(`https://rest.coinapi.io/v1/exchangerate/${sellcoin.name}/USD`, {
          headers: { "X-CoinAPI-Key": "3372D4C7-8A9E-4CA7-BD96-3486140B3D7E" },
        })
        .then((res) => {
          let now = new Date();
          const sell = {
            name: sellcoin.name,
            count: sellCount,
            date: now.toString(),
            byprice: sellcoin.price,
            sellPrice: res.data.rate,
          };

          console.log(sell);
          setSellWallet((sellWallet) => [sell, ...sellWallet]);
        });
      const delPieceSell = wallet.find((coin) => coin.name === sellcoin.name);

      if (delPieceSell.count - sellCount !== 0) {
        let changePieceSell = wallet.map((val) => {
          if (val.name === sellcoin.name) {
            delPieceSell.count -= parseFloat(sellCount);
          }
          return val;
        });
        setWallet(changePieceSell);
      } else {
        const delSell = wallet.filter((coin) => coin.name !== sellcoin.name);
        setWallet(delSell);
      }

      console.log(sellWallet);
    } else {
      alert("yeterli ürün yok");
    }

    console.log(sellcoin.name);
    console.log(selectedCoin.value);

    console.log(selectedCoin);
    console.log(sellCount);
  };
  const options = [];

  wallet.map((val) => {
    options.push({ value: val.name, label: val.name });
  });
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm="6">
            <div className="border">
              <h3>Coins in My Wallet</h3>

              <Table bordered>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {wallet.map((a) => {
                    return (
                      <tr key={Math.floor(Math.random() * 999999)}>
                        <th scope="row">{a.name}</th>
                        <td>{a.count}</td>
                        <td>{a.amount * a.count}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col sm="6">
            <div className="border">
              <h3>Selling</h3>
              <Row>
                <InputGroup>
                  <Col sm="3"> Coin:</Col>
                  <Col sm="7">
                    <Select
                      onChange={(selectedCoin) => setSelectedCoin(selectedCoin)}
                      options={options}
                    />
                  </Col>
                </InputGroup>
              </Row>
              <Row className="mt-5">
                <InputGroup>
                  <Col sm="3"> Count:</Col>
                  <Col sm="7">
                    <Input
                      value={sellCount}
                      onChange={(event) => setSellCount(event.target.value)}
                      type="number"
                      min="0"
                      max="5000"
                    />
                  </Col>
                </InputGroup>
              </Row>
              <Row>
                <Col className="mt-5 ms-5">
                  <Button onClick={() => handleSell()} color="primary">
                    Sell
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Container fluid>
          <Row className="border">
            <h3>Sold Coins</h3>
            <Table bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Count</th>
                  <th>Sold Price</th>
                  <th>Buy Price</th>
                  <th>Sell By</th>
                  <th>Profit and Loss</th>
                </tr>
              </thead>
              <tbody>
                {sellWallet.map((b) => {
                  return (
                    <tr key={Math.floor(Math.random() * 999999)}>
                      <th scope="row">{b.name}</th>
                      <td>{b.count}</td>
                      <td>{b.sellPrice}</td>
                      <td>{b.byprice}</td>
                      <td>{b.date}</td>
                      <td>{b.sellPrice - b.byprice}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default AlimSatim;

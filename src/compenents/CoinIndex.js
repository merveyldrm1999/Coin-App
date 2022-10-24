import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row, Button, Table, Container } from "reactstrap";
import CoinCard from "./CoinCard";
import CoinModal from "./CoinModal";

const CoinIndex = (props) => {
  const [coins, setCoins] = useState([]);
  const [basket, setBasket] = useState(
    localStorage.getItem("baskets") !== "undefined" &&
      localStorage.getItem("baskets") !== null
      ? JSON.parse(localStorage.getItem("baskets"))
      : []
  );
  const [modalAcikMi, setModal] = useState(false);

  const toggle = () => setModal(!modalAcikMi);
  const [wallet, setWallet] = useState(
    localStorage.getItem("items") !== "undefined" &&
      localStorage.getItem("baskets") !== null
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("baskets", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(wallet));
  }, [wallet]);

  useEffect(() => {
    axios
      .get("https://rest.coinapi.io/v1/exchangerate/USD", {
        headers: { "X-CoinAPI-Key": "8E0F754D-ABD5-4A30-842E-6DE6B7657406" },
      })
      .then((res) => {
        setCoins(res.data.rates);
      });
  }, []);

  const handleDelete = (basketid) => {
    const delBasket = basket.filter((coin) => coin.name !== basketid);
    setBasket(delBasket);
  };

  //fonksiyon mantıgının anlasılması ıcın parametre asdf olarak ısımlendırımdı

  const handleDeletePiece = (basketCoinname) => {
    const delPiece = basket.find((coin) => coin.name === basketCoinname);

    if (delPiece.count > 1) {
      // delPiece.count--;
      let changePiece = basket.map((val) => {
        if (val.name === basketCoinname) {
          delPiece.count -= parseFloat(1);
        }
        return val;
      });
      setBasket(changePiece);
    } else {
      const delBasket = basket.filter((coin) => coin.name !== basketCoinname);
      setBasket(delBasket);
    }
  };

  const handleBasket = () => {
    setWallet((wallet) => [...wallet, ...basket]);
    setBasket([]);
  };

  return (
    <Container className="p-5">
      <Row>
        <Col sm="9">
          <Row>
            {coins?.map((coin) => {
              return (
                <CoinCard
                  key={coin.asset_id_quote}
                  coin={coin}
                  setBasket={setBasket}
                  basket={basket}
                />
              );
            })}
          </Row>
        </Col>
        <Col sm="3">
          <h3>All Products Received</h3>
          <Table bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {basket.map((basketCoin) => {
                return (
                  <tr key={basketCoin.name}>
                    <th scope="row">{basketCoin.name}</th>
                    <td>{basketCoin.count}</td>
                    <td>{basketCoin.amount * basketCoin.count}</td>
                    <td>
                      <Button onClick={() => handleDelete(basketCoin.name)}>
                        Delete
                      </Button>
                      <Button
                        onClick={() => handleDeletePiece(basketCoin.name)}
                      >
                        Piece Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button onClick={() => handleBasket()} color="primary">
            Basket
          </Button>
          <div className="mt-5">
            <Button color="danger" onClick={toggle}>
              Coins
            </Button>

            <CoinModal
              toggle={toggle}
              modalAcikMi={modalAcikMi}
              wallet={wallet}
              setWallet={setWallet}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CoinIndex;
//return <p className="p-5">{coin.name}</p>;

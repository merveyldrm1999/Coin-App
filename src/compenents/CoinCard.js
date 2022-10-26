import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Input,
  Row,
} from "reactstrap";

const CoinCard = ({ coin, setBasket, basket }) => {
  const [count, setCount] = useState(1);

  const handleBuy = (asdf) => {
    let filtered = basket.filter((coin) => coin.name === asdf.asset_id_quote);

    if (filtered.length > 0) {
      let changeBasket = basket.map((val) => {
        if (val.name === asdf.asset_id_quote) {
          val.count = parseFloat(count) + parseFloat(val.count);
        }
        return val;
      });

      setBasket(changeBasket);
    } else {
      const totalAmout = parseFloat(asdf.rate) * parseFloat(count);

      const basketCoin = {
        name: asdf.asset_id_quote,
        price: asdf.rate,
        amount: totalAmout,
        count: count,
      };

      setBasket((basket) => [...basket, basketCoin]);
    }
  };

  return (
    <Col sm="6" className="mb-3" key={coin.asset_id_quote}>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{coin.asset_id_quote}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {coin.rate}
          </CardSubtitle>

          <Col sm="12">
            <Row>
              <Col sm="6">
                <Input
                  onChange={(e) => setCount(e.target.value)}
                  value={count}
                  type="number"
                  min="1"
                  max="5000"
                  placeholder="Count:"
                />
              </Col>
              <Col sm="6">
                <Button onClick={() => handleBuy(coin)} color="primary">
                  Buy
                </Button>
              </Col>
            </Row>
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CoinCard;

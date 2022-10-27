import { Container, Input } from "reactstrap";
import { MainContext, useContext } from "../context";

const IslemGecmisi = () => {
  const { sellWallet, setSellWallet } = useContext(MainContext);
  console.log(sellWallet);

  let total = 0;

  sellWallet.forEach((val) => {
    total = val.sellPrice - val.byprice + total;
  });

  return (
    <div>
      <h1>Toplam Para</h1>
      <Container fluid>
        <div>
          <Input value={total} disabled type="number" />
        </div>
      </Container>
    </div>
  );
};
export default IslemGecmisi;

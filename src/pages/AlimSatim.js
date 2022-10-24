import { Button, Table } from "reactstrap";

const AlimSatim = ({ wallet, setWallet }) => {
  const handleSell = (walletbuy) => {};
  return (
    <div>
      <h1>Alım Satım</h1>
      {/* Current theme={wallet} */}
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Amount</th>
            <th>Action to be taken</th>
          </tr>
        </thead>
        <tbody>
          {/* {wallet.map((walletname) => {
            return ( */}
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>

            <td>
              <div>
                <Button className="ms-5" color="warning">
                  Sell Piece
                </Button>
                <Button className="ms-5" color="danger">
                  Sell
                </Button>
              </div>
            </td>
          </tr>
          {/* );
          })} */}
        </tbody>
      </Table>
    </div>
  );
};
export default AlimSatim;

// import { useState } from "react";
import { CoinIndex } from "./CoinIndex";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";

const CoinModal = ({
  toggle,
  modalAcikMi,
  wallet,
  setWallet,
  theme,
  setTheme,
}) => {
  const deletePieceWallet = (walletnameName) => {
    const delWallet = wallet.find((val) => val.name === walletnameName);

    if (delWallet.count > 1) {
      let changePieceWallet = wallet.map((valu) => {
        if (valu.name === walletnameName) {
          delWallet.count -= parseFloat(1);
        }
        return valu;
      });
      setWallet(changePieceWallet);
    } else {
      const dellBasket = wallet.filter((val) => val.name !== walletnameName);
      setWallet(dellBasket);
    }
  };

  return (
    <>
      <Modal isOpen={modalAcikMi} toggle={toggle}>
        <ModalHeader toggle={toggle}>Coins</ModalHeader>
        <ModalBody>
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
              {wallet.map((walletname) => {
                return (
                  <tr key={Math.floor(Math.random() * 999999)}>
                    <th scope="row">{walletname.name}</th>
                    <td>{walletname.count}</td>
                    <td>{walletname.amount * walletname.count}</td>

                    <td>
                      <Button
                        onClick={() => deletePieceWallet(walletname.name)}
                      >
                        Delete From Wallet
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div>
            <Button color="primary" href="/alimsatim">
              Satış Kısmına Lİstele
            </Button>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
};
export default CoinModal;

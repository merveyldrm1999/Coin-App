import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavItem,
} from "reactstrap";

const NavbarCoin = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Navbar color="secondary" dark>
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <NavItem>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/"
              >
                Ana Sayfa
              </NavLink>
            </NavItem>

            <NavItem className="ms-5">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/alimsatim"
              >
                Satım
              </NavLink>
            </NavItem>
            <NavItem className="ms-5">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "black" : "white",
                })}
                to="/islemgecmisi"
              >
                İşlem Geçmişi
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCoin;

// <div>
// <Nav>
//   <NavItem>
//     <NavLink active href="#">
//       Alım Satım
//     </NavLink>
//     {/* </toggle> */}
//   </NavItem>
//   <NavItem>
//     <NavLink href="#">İşlem Geçmişi</NavLink>
//   </NavItem>
//   <NavItem>
//     <NavLink disabled href="#">
//       {/* Disabled Link */}
//     </NavLink>
//   </NavItem>
// </Nav>
// </div>

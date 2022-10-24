// import React, { useState } from "react";
// import { Nav, NavItem, NavLink, Table } from "reactstrap";
import { NavLink } from "react-router-dom";

const NavbarCoin = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
              to="/alimsatim"
            >
              Satım
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
              to="/islemgecmisi"
            >
              İşlem Geçmişi
            </NavLink>
          </li>
        </ul>
      </nav>
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

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu-container">
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to={"/categoria/llantas"}>Llantas</Link>
        </li>
      </ul>
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to={"/categoria/opticas"}>Opticas</Link>
        </li>
      </ul>
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to={"/categoria/pastillas"}>Pastillas.F</Link>
        </li>
      </ul>
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to={"/categoria/amortiguadores"}> Amortiguadores</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

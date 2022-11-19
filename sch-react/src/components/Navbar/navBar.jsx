import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu-container">
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to={"/categoria/Llantas"}>Llantas</Link>
        </li>
      </ul>
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to={"/categoria/Opticas"}>Opticas</Link>
        </li>
      </ul>
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to={"/categoria/Pastillas"}>Pastillas.F</Link>
        </li>
      </ul>
      <ul className="menu-list">
        <li className="menu-list-item">
          <Link to={"/categoria/Amortiguadores"}> Amortiguadores</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

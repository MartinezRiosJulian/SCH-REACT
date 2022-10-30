import React from "react";

const Navbar = ({ boton }) => {
    return (
        <ul className="menu-list">
            <li className="menu-list-item">{boton}</li>
        </ul>
    );
};

export default Navbar;

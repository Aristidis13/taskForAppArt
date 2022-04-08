import React from "react";
import {MenuState} from "../App"

const Menu = () => {
    const menuIsOpen = React.useContext(MenuState);
    return (menuIsOpen.stateOfMenu.menuIsOpen && <aside className="menu">menu appears</aside>);
}

export default Menu
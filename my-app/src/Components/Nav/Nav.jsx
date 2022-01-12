import React from 'react';
import kottok from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={kottok.nav}>
        <div className={kottok.my_parametr}>
            <div><NavLink to="/profile" activeclassname={kottok.activeLinc}>profile</NavLink></div>
            <div><NavLink to="/dialogs">dialogs</NavLink></div>
            <div><NavLink to="/message">message</NavLink></div>
        </div>

    </nav>
}

export default Nav;
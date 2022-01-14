import React from 'react';
import kottok from './Nav.module.css';
import {NavLink} from "react-router-dom";
import kot from "./Nav.module.css";

const Nav = () => {
    return <nav className={kottok.nav}>
        <div><NavLink to="/profile" className={navData => navData.isActive ? kottok.active : kottok.item}>Profile</NavLink>
        </div>
        <div><NavLink to="/dialogs" className = {navData => navData.isActive ? kottok.active : kottok.item}>dialogs</NavLink>
        </div>
        <div><NavLink to="/message" className = {navData => navData.isActive ? kottok.active : kottok.item}>message</NavLink>
        </div>
    </nav>
}

export default Nav;
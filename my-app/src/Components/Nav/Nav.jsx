import React from 'react';
import kottok from './Nav.module.css';

const Nav = () => {
    return <nav className={kottok.nav}>
        <div className={kottok.my_parametr}>
            <div><a href="/profile">profile</a></div>
            <div><a href="/dialogs">dialogs</a></div>
            <div><a href="/message">message</a></div>

        </div>
        <div className={kottok.my_parametr}>My post</div>
        <div className='my_parametr'><a>New post</a></div>
        <button>my list</button>
        <div className='my_parametr'><a>post 1</a></div>
        <button>my list</button>
        <div className={`${kottok.nav} ${kottok.my_parametr}`}><a>Makar</a></div>
        <div className={`${kottok.nav} ${kottok.my_parametr}`}><a>Makar</a></div>

        <button>my list</button>
    </nav>
}

export default Nav;
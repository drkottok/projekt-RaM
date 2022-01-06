import React from 'react';
import classes from './Nav.module.css';
/*
let classes = {
'nav' :
}

let c1 = w
*/
const Nav = () => {
    return <nav className={classes.nav}>
        <div className={classes.my_parametr}>
            <a>xava + post</a>

        </div>
        <div className='Nav_my_parametr__Ody95'>My post</div>
        <div className='Nav_my_parametr__Ody95'><a>New post</a></div>
        <div className='Nav_my_parametr__Ody95'><a>post 1</a></div>
        <div className='Nav_my_parametr__Ody95'><a>Makar</a></div>


    </nav>
}

export default Nav;
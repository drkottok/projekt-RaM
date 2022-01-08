import React from 'react';
import classes from './Nav.module.css';
console.log(classes);
const Nav = () => {
    return <nav className={classes.nav}>
        <div className={classes.my_parametr}>
            <a>xava + post</a>

        </div>
        <div className={classes.my_parametr}>My post</div>
        <div className='my_parametr'><a>New post</a></div>
        <div className='my_parametr'><a>post 1</a></div>
        <div className={`${classes.nav} ${classes.my_parametr}`}><a>Makar</a></div>


    </nav>
}

export default Nav;
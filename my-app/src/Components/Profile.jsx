import React from 'react';
import classes from'./Profile.module.css';

const Profile = () => {
    return <div className={classes.profile}>
        <div ><a>Profile</a></div>
        <div className={classes.my_parametr}><p>Messeges</p></div>
        <div className={classes.my_parametr}><p>News</p></div>
        <div className={classes.my_parametr}><p>Muzic</p></div>
        <div className={classes.my_parametr}><p>Settings</p></div>
    </div>
}

export default Profile;
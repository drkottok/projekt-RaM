import React from 'react';
import kottok from './Posts.module.css';


const   Post = (props) => {

    return <post className={kottok.my_posts}>
        <img src = 'https://kg-portal.ru/img/72137/main_2x.jpg'/>
        <button>Profile</button>
        <my_param  className = {kottok.my_param}>
        <textarea>{props.message}</textarea>
        <button>Like{props.like}</button>
        </my_param>
    </post>

}

 export default Post;
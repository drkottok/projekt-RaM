import React from 'react';
import kottok from './MyPosts.module.css';
import Post from "./Post/Posts";


const   MyPosts = (props) => {

    return <div className={kottok.my_posts} >
      <div> <Post message = 'hello, dr. kottok' like = '33'/></div>
        <div><Post message = 'hello, kitti' like = '65'/></div>
        <div><Post  message = 'hello, dr. kot' like = '87'/></div>
        <div><Post message = ' dr. kottok'  like = '39'/></div>
        {props.dr}
    </div>
};

 export default MyPosts;
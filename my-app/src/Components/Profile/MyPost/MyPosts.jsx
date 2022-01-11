import React from 'react';
import kottok from './MyPosts.module.css';
import Post from "./Post/Posts";


const   MyPosts = (props) => {

    return <div className={kottok.my_posts} >
      <div> <Post message = 'hello, dr. kottok' like = '33' dr= '0'/></div>
        <div><Post message = 'hello, kitti' like = '65'dr= '1'/></div>
        <div><Post  message = 'hello, dr. kot' like = '87'dr= '2'/></div>
        <div><Post message = ' dr. kottok'  like = '39'dr= '3'/></div>

    </div>
};

 export default MyPosts;
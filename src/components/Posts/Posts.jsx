import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post';

let Posts = () => {
    return (
        <div>
            Posts
            <div className={s.add_post_wrapper}>
                <textarea></textarea>
                <button className={s.add_post}>Add post</button>
            </div>
            <div>
                <Post message = 'Post 2' likesCount = "1"/>
                <Post message = 'Post 1' likesCount = "18"/>
            </div>
        </div>
    )
}

export default Posts
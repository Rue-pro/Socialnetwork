import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post';

let Posts = (props) => {

    
    let posts = []
    props.posts.forEach((element, key)=> {
        posts.push(<Post key = {key} content = {element.content} likesCount = {element.likesCount}/>)
    });

    return (
        <div>
            Posts
            <div className={s.add_post_wrapper}>
                <textarea></textarea>
                <button className={s.add_post}>Add post</button>
            </div>
            <div>
               {posts}
            </div>
        </div>
    )
}

export default Posts
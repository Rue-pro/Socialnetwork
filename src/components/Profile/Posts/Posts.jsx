import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

let Posts = (props) => {
    console.log(props)
    // let posts = []
    // props.posts.forEach((element, key)=> {
    //     posts.push(<Post key = {key} content = {element.content} likesCount = {element.likesCount}/>)
    // });

    // let addPost = () => {
    //     props.addPost()
    // }
    // let onPostChange = (e) => {
    //     let newPostContent = e.target.value
    //     props.onPostChange(newPostContent)
    // }

    return (
        <div>
            {/* Posts
            <div className={s.add_post_wrapper}>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost} className={s.add_post}>Add post</button>
            </div>
            <div>
               {posts}
            </div> */}
        </div>
    )
}

export default Posts
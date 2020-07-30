import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post';

let Posts = (props) => {

    let posts = []
    props.posts.forEach((element, key)=> {
        posts.push(<Post key = {key} content = {element.content} likesCount = {element.likesCount}/>)
    });

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let newPostContent = newPostElement.current.value
        props.changeNewPostText(newPostContent)
    }

    return (
        <div>
            Posts
            <div className={s.add_post_wrapper}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost} className={s.add_post}>Add post</button>
            </div>
            <div>
               {posts}
            </div>
        </div>
    )
}

export default Posts
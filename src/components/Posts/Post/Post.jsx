import React from 'react';
import s from './Post.module.css'

let Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://i.pinimg.com/564x/bf/cb/32/bfcb323be0409e69ae8175e3db053e94.jpg" alt=""/>
            <div className={s.content}>
                <div>{props.message}</div>
                <div>Likes: {props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post
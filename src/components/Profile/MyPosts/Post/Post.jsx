import React from "react";
import s from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={s.Post}>
            <p>{props.message}</p>
            <p>like:{props.likeCounter}</p>
        </div>
    )
}

export default Post
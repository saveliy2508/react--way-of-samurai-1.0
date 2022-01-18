import React from "react";
import s from './../Main.module.scss'
import Post from './Post/Post'

const Posts = (props) => {
    let postsElement = props.postsData
        .map(p => <Post message={p.message} likeCounter={p.likes} key={p.id} />)
    return (
        <div className={s.posts}>
            {postsElement}
        </div>
    )
}
export default Posts;
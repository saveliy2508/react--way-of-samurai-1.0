import React from "react";
import s from './../Main.module.scss'
import Post from './Post/Post'

const Posts = (props) => {
    let postsData = [
        { id: 1, message: "Hi, how are you!", likes: "15" },
        { id: 2, message: "I am a programmer", likes: "20" },
    ]

    let postsElement = postsData
        .map(p => <Post message={p.message} likeCounter={p.likes} />)

    return (
        <div className={s.posts}>
            {postsElement}
        </div>
    )
}
export default Posts;
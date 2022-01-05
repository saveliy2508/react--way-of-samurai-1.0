import React from "react";
import s from './Main.module.scss'
import Post from './MyPosts/Post/Post'

const Main = () => {

    let posts = [
        { id: 1, message: "Hi, how are you!", likes:"15" },
        { id: 2, message: "I am a programmer", likes:"20" },
    ]

    return (
        <div className={s.content}>
            <div className={s.avatar_wrapper}><img className={s.avatar} src='https://peterburg2.ru/uploads/20/02/03/ga11_1_16.jpg' alt=''></img></div>
            <div className={s.area}><input type="text" /><br /><button></button></div>
            <div className={s.posts}>
                <Post message={posts[0].message} likeCounter={posts[0].likes} />
                <Post message={posts[1].message} likeCounter={posts[1].likes} />
            </div>
        </div>
    )
}

export default Main
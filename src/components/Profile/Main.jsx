import React from "react";
import s from './Main.module.scss'
import Posts from './MyPosts/Posts'

const Main = () => {
    let postsData = [
        { id: 1, message: "Hi, how are you!", likes: "15" },
        { id: 2, message: "I am a programmer", likes: "20" },
    ]

    let postsElement = postsData
        .map(p => <Post message={p.message} likeCounter={p.likes} />)

    return (
        <div className={s.content}>
            <div className={s.avatar_wrapper}><img className={s.avatar} src='https://peterburg2.ru/uploads/20/02/03/ga11_1_16.jpg' alt=''></img></div>
            <div className={s.area}><input type="text" /><br /><button></button></div>
            <div className={s.posts}>
                <Posts postsElement/>
            </div>
        </div>
    )
}

export default Main;
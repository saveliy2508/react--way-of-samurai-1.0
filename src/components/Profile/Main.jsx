import React from "react";
import s from './Main.module.scss'
import Post from './MyPosts/Post/Post'

const Main = () => {
    return (
        <main className={s.content}>
            <div className={s.avatar_wrapper}><img className={s.avatar} src='https://peterburg2.ru/uploads/20/02/03/ga11_1_16.jpg' alt=''></img></div>
            <div className={s.area}><input type="text"/><br /><button></button></div>
            <div className={s.posts}>
                <Post message="Hi, how are you!" likeCounter="15"/>
                <Post message="I am programmer" likeCounter="20" />
            </div>
        </main>
    )
}

export default Main
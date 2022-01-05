import React from "react";
import s from './Main.module.scss'
import Posts from './MyPosts/Posts'

const Main = (props) => {
    return (
        <div className={s.content}>
            <div className={s.avatar_wrapper}><img className={s.avatar} src='https://peterburg2.ru/uploads/20/02/03/ga11_1_16.jpg' alt=''></img></div>
            <div className={s.area}><input type="text" /><br /><button></button></div>
            <Posts postsData={props.postsData} />
        </div>
    )
}

export default Main;
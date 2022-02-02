import React from "react";
import s from './Main.module.scss'
import MyPostsConteiner from './MyPosts/MyPostsConteiner'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Main = (props) => {
    return (
        <div className={s.content}>
                <ProfileInfo profile={props.profile} />
                <MyPostsConteiner />
        </div>
    )
}

export default Main;
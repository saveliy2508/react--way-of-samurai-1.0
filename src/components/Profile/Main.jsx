import React from "react";
import s from './Main.module.scss'
import Posts from './MyPosts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Main = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo
                profilePage={props.profilePage}
            />
            <Posts
                profilePage={props.profilePage}
                postsData={props.profilePage.postsData}
                addPost={props.onAddPost} />
        </div>
    )
}

export default Main;
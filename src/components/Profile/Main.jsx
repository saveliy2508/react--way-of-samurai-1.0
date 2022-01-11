import React from "react";
import s from './Main.module.scss'
import Posts from './MyPosts/Posts'
import {addPostActionCreator,updateNewPostActionCreator} from './../../redux/store'


const Main = (props) => {

    let newPostElement = React.useRef()
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <div className={s.content}>
            <div className={s.avatar_wrapper}>
                <img className={s.avatar} src='https://peterburg2.ru/uploads/20/02/03/ga11_1_16.jpg' alt=''></img>
            </div>
            <div className={s.area}>
                <input type="text"
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.profilePage.newPostText} />
                <br />
                <button onClick={addPost} className="btn">Post</button>
            </div>
            <Posts
                postsData={props.profilePage.postsData}
                addPost={props.addPost} />
        </div>
    )
}

export default Main;
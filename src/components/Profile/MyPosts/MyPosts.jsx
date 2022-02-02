import React from "react";
import s from './../Main.module.scss'
import Post from './Post/Post'

const Posts = (props) => {
    let postsElement = props.profilePage.postsData
        .map(p => <Post message={p.message} likeCounter={p.likes} key={p.id} />)
        debugger
    return (
        <div>
            <div className={s.area}>
                <input type="text"
                    onChange={props.onPostChange}
                    value={props.profilePage.newPostText} />
                <br />
                <button onClick={props.onAddPost} className="btn">Post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default Posts;
import React from "react";
import s from './../Main.module.scss'
import Post from './Post/Post'

const Posts = (props) => {
    let postsElement = props.profilePage.postsData
        .map(p => <Post message={p.message} likeCounter={p.likes} key={p.id} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }
    
    return (
        <div className={s.wrapper} >
            <div className={s.area}>
                <input type="text"
                    onChange={onPostChange}
                    value={props.profilePage.newPostText}
                    ref={newPostElement} />
                <br />
                <button onClick={onAddPost} className="btn">Post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default Posts;
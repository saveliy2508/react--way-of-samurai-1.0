import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/profileReducer'
import Main from './Main'



const MainConteiner = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return (<Main 
        onAddPost={addPost} 
        onPostChange={onPostChange} 
        profilePage={props.store.getState().profilePage}
        dispatch={props.dispatch} />)
}

export default MainConteiner;
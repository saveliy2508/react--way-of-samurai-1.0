import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/profileReducer'
import Main from './Main'
import StoreContext from './../../StoreContext'



const MainConteiner = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                debugger
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (e) => {
                    let text = e.currentTarget.value;
                    store.dispatch(updateNewPostActionCreator(text));
                }

                <Main
                    onAddPost={addPost}
                    onPostChange={onPostChange}
                    profilePage={store.getState().profilePage}
                    dispatch={store.dispatch} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MainConteiner;
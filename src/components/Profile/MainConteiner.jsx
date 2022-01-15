import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/profileReducer'
import Main from './Main'
import StoreContext from './../../StoreContext'



const MainConteiner = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let addPost = () => {
                store.dispatch(addPostActionCreator())
            }

            let onPostChange = (e) => {
                let text = e.currentTarget.value;
                store.dispatch(updateNewPostActionCreator(text));
            }

            return (
                <Main
                    onAddPost={addPost}
                    onPostChange={onPostChange}
                    profilePage={store.getState().profilePage}
                    dispatch={store.dispatch}
                />
            )
        }
        }
    </StoreContext.Consumer>
}

export default MainConteiner;
import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/profileReducer'
import Main from './Main'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (e) => {
            let text = e.currentTarget.value;
            dispatch(updateNewPostActionCreator(text));
        },
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        dispatch: dispatch,
    }
}

const MainConteiner = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainConteiner;
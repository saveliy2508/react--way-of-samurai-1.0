const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0
        }
        state.postsData.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.newText;
    }
    return state
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text,
    }
}

export default profileReducer;
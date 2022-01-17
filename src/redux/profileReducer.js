const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you!", likes: "15" },
        { id: 2, message: "I am a programmer", likes: "20" },
    ],
    newPostText: 'qq',
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0
        };
        let stateCopy = {
            ...state,
            postsData: [...state.postsData],
        };
        stateCopy.postsData.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy
    } else if (action.type === UPDATE_NEW_POST) {
        let stateCopy = { ...state };
        stateCopy.newPostText = action.newText;
        return stateCopy;
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
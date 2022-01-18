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
        return {
            ...state,
            newPostText: '',
            postsData: [...state.postsData, { id: 5, message: state.newPostText, likes: 0 }]
        }
    } else if (action.type === UPDATE_NEW_POST) {
        return {
            ...state,
            newPostText: action.newText,
        };
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
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you!", likes: "15" },
        { id: 2, message: "I am a programmer", likes: "20" },
    ],
    newPostText: 'qq',
    profile: null,
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
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile,
        };
    }
    return state
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPost = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}


export default profileReducer;
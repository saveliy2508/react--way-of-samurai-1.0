const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: true }
                } else {
                    return u;
                }
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {
                        ...u,
                        followed: false,
                    }
                } else {
                    return u;
                }
            }
            )
        }
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            users: [...action.users]
        }
    } else if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: [action.currentPage]
        }
    } else if (action.type === SET_USERS_TOTAL_COUNT) {
        return {
            ...state,
            totalUsersCount: [action.count]
        }
    }
    return state
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export const setUsersTotalCountAC = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        count: totalCount,
    }
}

export default usersReducer;
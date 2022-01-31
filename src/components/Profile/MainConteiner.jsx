import { addPostActionCreator, updateNewPostActionCreator } from './../../redux/profileReducer'
import ProfileWrapper from './ProfileWrapper'
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

const MainConteiner = connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper);

export default MainConteiner;
import { addPost, updateNewPost } from './../../../redux/profileReducer'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const MyPostsConteiner = connect(mapStateToProps, {
    updateNewPost,
    addPost,
})(MyPosts);

export default MyPostsConteiner;
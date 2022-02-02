import React from 'react'
import Main from './Main'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from './../../redux/profileReducer'

class MainConteiner extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Main {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {
    setUserProfile,
})(MainConteiner);
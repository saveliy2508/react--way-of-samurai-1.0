import React from 'react'
import Main from './Main'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from './../../redux/profileReducer'
import { useMatch } from "react-router"

class MainConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
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

const withRouter = (Component) => {
    let RouterComponent = (props) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match} />;
    }
    return RouterComponent;
}

let WithRouteUrlDataConteinerComponent = withRouter(MainConteiner);

export default connect(mapStateToProps, {
    setUserProfile,
})(WithRouteUrlDataConteinerComponent);
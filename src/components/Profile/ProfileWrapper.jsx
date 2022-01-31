import React from "react";
import Main from './Main'

class ProfileWrapper extends React.Component {
    render() {
        return (
            <Main {...this.props} />
        )
    }
}

export default ProfileWrapper;
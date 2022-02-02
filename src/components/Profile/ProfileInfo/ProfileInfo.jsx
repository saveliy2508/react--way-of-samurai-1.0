import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div>
            <div className={s.avatar_wrapper}>
                <img className={s.avatar} src={props.profile.photos.large} alt=''></img>
            </div>
        </div>
    )
}

export default ProfileInfo;
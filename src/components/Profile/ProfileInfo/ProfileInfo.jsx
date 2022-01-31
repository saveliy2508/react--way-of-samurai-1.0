import React from "react";
import s from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.avatar_wrapper}>
                <img className={s.avatar} src='https://peterburg2.ru/uploads/20/02/03/ga11_1_16.jpg' alt=''></img>
            </div>
        </div>
    )
}

export default ProfileInfo;
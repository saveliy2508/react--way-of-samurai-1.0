import React from "react";
import s from './../Side.module.scss'

const FriendsItem = (props) => {
    return (
        <div className={s.friendsItem}>
            <img src={props.picture} className={s.picture} />
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default FriendsItem;
import React from "react";
import s from './Side.module.scss'
import { NavLink } from 'react-router-dom'
import FriendsItem from './Friends/FriendsItem'
import { connect } from 'react-redux'

const Side = (props) => {
    return (
        <div className={s.side} >
            <ul className={s.menu}>
                <li className={s.link}>
                    <NavLink to={`/profile/${props.userId}`} className={nav => nav.isActive ? s.active : s.link}>Profile</NavLink>
                </li>
                <li className={s.link} >
                    <NavLink to="/message" className={nav => nav.isActive ? s.active : s.link}>Message</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/news" className={nav => nav.isActive ? s.active : s.link}>News</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/users" className={nav => nav.isActive ? s.active : s.link}>Users</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/music" className={nav => nav.isActive ? s.active : s.link}>Music</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/settings" className={nav => nav.isActive ? s.active : s.link}>Settings</NavLink>
                </li>
                <li className={`${s.link} ${s.friends}`}>
                    Friends
                    <div className={s.friendsItems}>
                        {props.friends}
                    </div>
                </li>
            </ul>
        </div>
    )
}


let mapStateToProps = (state) => {
    let friends = state.sidebar.friends
        .map(f => <FriendsItem picture={f.picture} name={f.name} key={f.id}/>);
    return {
        friends: friends,
        userId: state.auth.userId,
    }
}

let mapDispatchToProps = (dispatch) => {
    //zaglushka
}

const sideConteiner = connect(mapStateToProps, mapDispatchToProps)(Side)

export default sideConteiner;
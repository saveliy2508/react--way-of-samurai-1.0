import React from "react";
import s from './Side.module.scss'
import { NavLink } from 'react-router-dom'
import FriendsItem from './Friends/FriendsItem'

const Side = (props) => {
    let friends = props.friends
        .map(f => <FriendsItem picture={f.picture} name={f.name} />)
    return (
        <div className={s.side}>
            <ul className={s.menu}>
                <li className={s.link}>
                    <NavLink to="/profile" className={nav => nav.isActive ? s.active : s.link}>Profile</NavLink>
                </li>
                <li className={s.link} >
                    <NavLink to="/message" className={nav => nav.isActive ? s.active : s.link}>Message</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/news" className={nav => nav.isActive ? s.active : s.link}>News</NavLink>
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
                        {friends}
                    </div>
                </li>
            </ul>
        </div>)
}

export default Side;
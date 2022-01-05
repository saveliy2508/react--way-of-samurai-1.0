import React from "react";
import s from './Side.module.scss'
import { NavLink } from 'react-router-dom'

const Side = () => {
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
            </ul>
        </div>)
}

export default Side;
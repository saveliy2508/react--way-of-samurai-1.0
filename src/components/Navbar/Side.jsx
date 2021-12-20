import React from "react";
import s from './Side.module.scss'
import { NavLink } from 'react-router-dom'

const Side = () => {
    return (
        <div className={s.side}>
            <ul className={s.menu}>
                <li className={s.link}>
                    <NavLink to="/profile" className = {nav => nav.isActive ? s.active : s.link}>Profile</NavLink>
                </li>
                <li className={s.link} >
                    <NavLink to="/message" className = {nav => nav.isActive ? s.active : s.link}>Message</NavLink>
                </li>
                <li className={s.link}>
                    News
                </li>
                <li className={s.link}>
                    Music
                </li>
                <li className={s.link}>
                    Settings
                </li>
            </ul>
        </div>)
}

export default Side;
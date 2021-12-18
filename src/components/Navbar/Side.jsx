import React from "react";
import s from './Side.module.scss'

const Side = () => {
    return (
    <div className={s.side}>
        <ul className={s.menu}>
            <li className={s.link}>
                Profile
            </li>
            <li className={s.link}>
                Message
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
import React from "react";
import s from './Header.module.scss'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div><img className={s.logo}
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="" />
            </div>
            <div className={s.login}>
                {props.isAuth ? <span>{props.login}</span> : null}
                <NavLink to={'/login'}> LOGIN </NavLink>
            </div>
        </header>
    )
}

export default Header;
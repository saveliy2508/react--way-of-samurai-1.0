import React from "react";
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="" />
        </header>
    )
}

export default Header;
import React from 'react';
import s from './UsersPage.module.scss'

let UsersPage = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoURL: 'https://www.astromeridian.ru/assets/images/imya/dmitrii.jpg', followed: false, fullName: "Dmitry", status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 2, photoURL: 'https://www.astromeridian.ru/assets/images/imya/dmitrii.jpg', followed: true, fullName: "Artem", status: 'I am a boss too, like a Dima', location: { city: 'Moscow', country: 'Russia' } },
                { id: 3, photoURL: 'https://www.astromeridian.ru/assets/images/imya/dmitrii.jpg', followed: false, fullName: "Mikola", status: 'Glory to Ukraine!', location: { city: 'Kiev', country: 'Ukraine' } },
            ]
        )
    }
    return (
        <div className={s.wrapper}>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.user}>
                        <img src={u.photoURL} alt="" />
                        <br />
                        <span>{u.fullName}</span>
                        <br />
                        <span>{u.status}</span>
                        <br />
                        <span>{u.location.city}</span>
                        <br />
                        <span>{u.location.country}</span>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
                        }
                    </div>)
            }
        </div>
    )
}

export default UsersPage;
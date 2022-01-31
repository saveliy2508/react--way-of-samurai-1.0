import React from 'react';
import s from './UsersPage.module.scss'
import userPhoto from './../../assets/userPhoto.PNG'

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        //Ограничение, иначе несколько тысяч страниц в базе...
        if (pages.length < 10) {
            pages.push(i)
        }
    }
    return (
        <div className={s.wrapper} >
            <div>
                {pages.map(
                    p => {
                        return (
                            <span
                                className={props.currentPage === p ? s.selectedPage : ''}
                                onClick={() => props.onPageChanged(p)}>
                                {p}
                            </span> 
                        )
                    }
                )}
            </div>
            <div>
                {
                    props.users.map(u =>
                        <div key={u.id} className={s.user}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                            <br />
                            <span>{u.name}</span>
                            <br />
                            <span>{u.status}</span>
                            <br />
                            <span>u.location.city</span>
                            <br />
                            <span>u.location.country</span>
                            <br />
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
                            }
                        </div>)
                }
            </div>
        </div>
    )
};

export default Users;
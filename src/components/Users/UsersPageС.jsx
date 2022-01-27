import React from 'react';
import s from './UsersPage.module.scss'
import * as axios from 'axios'
import userPhoto from './../../assets/userPhoto.PNG'

class UsersPage extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            //Ограничение, иначе несколько тысяч страниц...
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
                                <span className={this.props.currentPage === p ? s.selectedPage : ''} onClick={() => this.onPageChanged(p)} >{p}</span>
                            )
                        }
                    )}
                </div>
                {
                    this.props.users.map(u =>
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
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Follow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>
                            }
                        </div>)
                }
            </div>
        )
    }
}

export default UsersPage;
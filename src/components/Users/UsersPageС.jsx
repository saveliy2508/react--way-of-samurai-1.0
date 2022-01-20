import React from 'react';
import s from './UsersPage.module.scss'
import * as axios from 'axios'
import userPhoto from './../../assets/userPhoto.PNG'

class UsersPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //     };
    // }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div className={s.wrapper} >
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
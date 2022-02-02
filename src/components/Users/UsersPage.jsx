import React from 'react';
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';

class UsersPageAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
    
    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return (
            <div>
                <Preloader isFetching ={this.props.isFetching} />
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    onPageChanged={this.onPageChanged.bind(this)}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setCurrentPage={this.props.setCurrentPage}
                    isFetching={this.props.isFetching}
                />
            </div>
        )
    }
}

export default UsersPageAPIComponent;
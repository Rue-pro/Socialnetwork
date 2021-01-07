import React from 'react'
import { connect } from "react-redux"
import { followUser, unfollowUser, getUsers, setCurPage, toggleFollowingProgress} from "../../redux/usersReducer"
import Users from './Users'
import Preloader from '../common/preloader/Preloader'

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChange = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? 
                <Preloader /> : null}
            <Users 
                {...this.props} onPageChange={this.onPageChange}
                />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        ...state.usersReducer
    }
}

export default connect(mapStateToProps, 
    {followUser
        , unfollowUser
        , setCurPage
        , toggleFollowingProgress
        , getUsers})(UsersContainer)
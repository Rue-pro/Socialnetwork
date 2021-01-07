import React from 'react'
import {addPost, onPostChange, setUserInfo, getProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { connect } from 'react-redux';
import Profile from './Profile';
import ProfileStatus from './ProfileStatus/ProfileStatus'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render(){
        return <>
            <ProfileStatus status = {this.props.status} updateStatus = {this.props.updateStatus}/>
            <Profile {...this.props} />
        </>
        
    }
}
let mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText,
        userInfo: state.profileReducer.userInfo,
        authorizedUserId: state.auth.userId,
        status: state.profileReducer.status
    }
}
//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export default compose (
    connect(mapStateToProps,
        {addPost, onPostChange, setUserInfo, getProfile, withAuthRedirect, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
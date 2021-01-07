import React from 'react'
import {addPost, onPostChange, setUserInfo, getProfile} from '../../../redux/profileReducer'
import { connect } from 'react-redux';
import Posts from './Posts';

class PostsContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
      this.state.getProfile(userId)
    }
    render(){
        return (
            <Posts userInfo={this.props.userInfo}/>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText,
        userInfo: state.profileReducer.userInfo
    }
}

export default connect(mapStateToProps,
     {addPost, onPostChange, setUserInfo, getProfile})(PostsContainer)
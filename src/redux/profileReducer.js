import {profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_INFO = 'SET_USER_INFO'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    userInfo: {
      userId: null,
      lookingForAJob: null,
      lookingForAJobDescription: null,
      fullName: null,
      contacts: {
        github: null,
        vk: null,
      },
      photos: {
        small: null,
        large: null
      },
      isFetched: false
    },
    posts: [
        {
        id: 1,
        content: "Post 1",
        likesCount: 1
        },{
        id: 2,
        content: "Post 2",
        likesCount: 18
        }
    ],
    newPostText: "",
    status: ""
}

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST:
          let newPost = {
            id: 3,
            content: state.newPostText,
            likesCount: 0
          }
          return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ""
          }
        case UPDATE_NEW_POST_TEXT:
          return {
            ...state,
            newPostText: action.newPostText
          }
        case SET_USER_INFO: 
          return {
            ...state,
            userInfo: action.userInfo
          }
        case SET_STATUS:
          return {
            ...state,
            status: action.status
          }
        default: 
          return state
      }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
  }
export const onPostChange = (newPostContent) => {
  return {
      type: UPDATE_NEW_POST_TEXT,
      newPostText: newPostContent
  }
}
export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    userInfo: userInfo
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
    .then(data=>{
        dispatch(setUserInfo(data))
    })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(data=>{
      dispatch(setStatus(data))
    })
  }
}

export const updateStatus = (status) => {
  return(dispatch) => {
    profileAPI.updateStatus(status)
    .then(data=>{
      console.log(data)
    })
  }
}
export default profileReducer


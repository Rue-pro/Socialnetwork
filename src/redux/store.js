import profileReducer from './pofileReducer'
import postsReducer from './postsReducer'

let store = {
  _state: {
      postsPage: {
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
        newPostText: ""
      },
      profilePage: {
        dialogs: [
          {
            name: "я",
            id: "1"
          },{
            name: "ты",
            id: "2"
          }
      ],
        messagesPage: {
          messages: [
            {
                user_id: 1,
                message: "Сообщение 1"
            },{
                user_id: 2,
                message: "Сообщение 1"
            },{
                user_id: 1,
                message: "Сообщение 2"
            }
          ],
          newMessage: ""
        }
    }  
  },
  getState() {
    return this._state
  },
  _callsubscriber() {
    console.log("state chenged")
  },
  subscribe(observer) {
    this._callsubscriber = observer
  },
  dispatch(action) { // {type: 'ADD-POST'}a
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.postsPage = postsReducer(this._state.postsPage, action)
    this._callsubscriber(this._state)
  }
}
export default store
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
      dialogs: [
          {
            name: "я",
            id: "1"
          },{
            name: "ты",
            id: "2"
          }
      ],
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
      ]
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
  addPost() {
    let newPost = {
      id: 3,
      content: this._state.postsPage.newPostText,
      likesCount: 0
    }
    this._state.postsPage.posts.push(newPost)
    this._state.postsPage.newPostText = ""
    this._callsubscriber(this._state)
  },
  changeNewPostText (newPostText) {
    this._state.postsPage.newPostText = newPostText
    this._callsubscriber(this._state)
  }
}

export default store
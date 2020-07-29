
import {rerenderEntireTree} from './render'
let state = {
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
      newPost: ""
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
}
export let addPost = (post) => {
    let newPost = {
    id: 3,
    content: post,
    likesCount: 0
  }
  state.postsPage.posts.push(newPost)
  rerenderEntireTree(state)
}

export default state
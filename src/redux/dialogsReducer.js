const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
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
    ],
    newMessage: ""
}

const dialogsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
          return {
            ...state,
            messages: [...state.messages, {user_id: 1, message: state.newMessage}],
            newMessage: ""
          }
        case UPDATE_NEW_MESSAGE:
          return {
            ...state,
            newMessage: action.newMessage
          }
        default: 
          return state
      }
}

export const updateNewMessage = (newMessageContent) => {
    return {
      type: UPDATE_NEW_MESSAGE,
      newMessage: newMessageContent
    }
  }
export const addMessage = () => {
  return {
      type: ADD_MESSAGE
  }
}

export default dialogsReducer
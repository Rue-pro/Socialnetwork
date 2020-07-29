import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

let Dialogs = (props) => {
    let dialogs = []
    let messages = []
    let newMessageElement = React.createRef()
    let showData = () => {
        let newMessage = newMessageElement.current.value
        console.log(newMessage)
    }
    props.dialogs.forEach((element, key) => {
        dialogs.push(<DialogItem key={key} name={element.name} id={element.id}/>)
    });
    props.messages.forEach((element, key) => {
        messages.push(<Message key={key} message={element.message}/>)
    })
    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div>
                <div className={s.messages}>
                    {messages}
                </div>
                <div className={s.add_post_wrapper}>
                    <textarea ref={newMessageElement} defaultValue="Enter your message">
                    </textarea>
                    <button onClick={showData}  className={s.add_post}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
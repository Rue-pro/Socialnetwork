import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

let Dialogs = (props) => {
    let dialogs = []
    let messages = []
    let onMesasgeChange = (e) => {
        let newMessage = e.target.value
        props.updateNewMessage(newMessage)
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
                    <textarea onChange={onMesasgeChange} value={props.newMessageText}>
                    </textarea>
                    <button onClick={()=>{props.addMessage()}}  className={s.add_post}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
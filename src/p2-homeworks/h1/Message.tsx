import React from 'react'

type MessageType = {
    avatar:string,
    name:string,
    message:string,
    time:string
}
function Message(props: MessageType) {
    return (
        <div>
            {props.avatar}
            {props.name}
            {props.message}
            {props.time}
        </div>

    )
}

export default Message
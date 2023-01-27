import React from 'react'

type AlternativeMessageStyle = {
    title: string
}

function AlternativeMessage(props: AlternativeMessageStyle) {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default AlternativeMessage

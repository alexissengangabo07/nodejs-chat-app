import React, { useEffect, useState } from 'react';
import * as api from "../../api/messages";

const Messages = () => {
    let [messages, setMessages] = useState([]);

    useEffect(() => async () => {
        const { data } = await api.fetchMessages();
        console.log(data);
        setMessages(data);
    }, []);

    return (
        <>
            <div>Messages</div>
            <div>
                {messages.map((message, index) => (
                        <div key={index}>
                            <h2>{message.username}</h2>
                            <p>{message.message}</p>
                            <span>{message.dateTime}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Messages
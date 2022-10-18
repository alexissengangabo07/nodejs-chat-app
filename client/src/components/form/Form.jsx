import React, { useState } from 'react';
import './style.css';
import * as api from "../../api/messages";

const Form = () => {
    let [messageInput, setMessageInput] = useState('');

    const handleMessage = async(e) => {
        e.preventDefault();
        console.log(messageInput);
        await api.createMessage({username: 'alexnew', message: messageInput, dateTime: new Date()});
        // console.log(data);
    }

    return (
        <>
            <div className='form-container'>
                <form onSubmit={handleMessage}>
                    <div>
                        <textarea name="message" className="textarea-message" onChange={(e) => {setMessageInput(e.target.value)}} placeholder='Tapez votre message'></textarea>
                    </div>
                <div>
                    <input type="submit" value="Envoyer" />
                </div>
        </form>
            </div >
        </>
            )
}

export default Form
import React, { useState } from 'react';
import './style.css';
import * as api from "../../api/messages";

const Form = () => {
    let [messageInput, setMessageInput] = useState('');

    const handleMessage = async (e) => {
        e.preventDefault();
        console.log(messageInput);
        await api.createMessage({ username: 'alexnew', message: messageInput, dateTime: new Date() });
        // console.log(data);
    }

    return (
        <>
            <div className='form-container'>
                <form onSubmit={handleMessage}>
                    <div>
                        <textarea name="message" className="textarea-message" onChange={(e) => { setMessageInput(e.target.value) }} placeholder='Tapez votre message'></textarea>
                    </div>
                    <div>
                        <input className='Envoye' type="submit" value="Envoyer" />
                    </div>
                </form>

                <section>

                    <main class="msger-chat">
                        <div class="msg left-msg">
                            <div
                                class="msg-img"
                                
                            ></div>

                            <div class="msg-bubble">
                                <div class="msg-info">
                                    <div class="msg-info-name">BOT</div>
                                    <div class="msg-info-time">12:45</div>
                                </div>

                                <div class="msg-text">
                                    Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                                </div>
                            </div>
                        </div>

                        <div class="msg right-msg">
                            <div
                                class="msg-img"
                                
                            ></div>

                            <div class="msg-bubble">
                                <div class="msg-info">
                                    <div class="msg-info-name">Sajad</div>
                                    <div class="msg-info-time">12:46</div>
                                </div>

                                <div class="msg-text">
                                    You can change your name in JS section!
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div >
        </>
    )
}

export default Form
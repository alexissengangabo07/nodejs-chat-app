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
              

                <section>

                    <main class="msger-chat">
                        <div class="msg left-msg">
                            <div
                                class="msg-img"
                                
                            ></div>

                            <div class="msg-bubble">
                                <div class="msg-info">
                                    <div class="msg-info-name">Bon</div>
                                    <div class="msg-info-time">12:45</div>
                                </div>

                                <div class="msg-text">
                                    Salut! bienvenu chez nous. 😄
                                </div>
                            </div>
                        </div>

                        <div class="msg right-msg">
                            <div
                                class="msg-img"
                                
                            ></div>

                            <div class="msg-bubble">
                                <div class="msg-info">
                                    <div class="msg-info-name">Obedi</div>
                                    <div class="msg-info-time">12:46</div>
                                </div>

                                <div class="msg-text">
                                    Tu peux me dire ce que je peux faire?!
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
                <form onSubmit={handleMessage}>
                    <div>
                        <textarea name="message" className="textarea-message" onChange={(e) => { setMessageInput(e.target.value) }} placeholder='Tapez votre message'></textarea>
                    </div>
                    <div>
                        <input className='Envoye' type="submit" value="Envoyer" />
                    </div>
                </form>
            </div >
        </>
    )
}

export default Form
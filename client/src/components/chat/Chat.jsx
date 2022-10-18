import React, { useEffect } from 'react';
import Messages from '../messages/Messages';
import Form from '../form/Form';
import { useNavigate, Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

const Chat = ({ username }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (username.trim() === '') {
            navigate("/home")
        }
    })
    return (
        <div>
            <h2> Utilisateur connecté <span style={{ color: 'white' }}>{username}</span></h2>
            <Link to={'/home'} >Déconnecter <CiLogout size={20} /></Link>
            <Messages username={username} />
            <Form />
        </div>
    )
}

export default Chat
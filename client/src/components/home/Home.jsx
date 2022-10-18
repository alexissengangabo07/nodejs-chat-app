import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Home = ({ handleUsername }) => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div>
                <FaRegUserCircle size={60} />
                <form onSubmit={e => { e.preventDefault(); navigate("/message"); }}>
                    <div>
                        <input type="text" onChange={e => handleUsername(e.target.value)} placeholder="Enter your username" />
                    </div>
                    <div>
                        <input type="submit" value="Connectez-vous" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
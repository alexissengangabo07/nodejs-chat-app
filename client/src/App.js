
import React, {useState} from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  let [username, setUsername] = useState('');

  const handleUsername = (username) => {
    setUsername(username);
  }

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home  handleUsername={handleUsername}/>} />
          <Route path="/home" element={<Home handleUsername={handleUsername} />} />
          <Route path="/message" element={<Chat username={username} />} />
        </Routes>
    </div>
  );
}

export default App;

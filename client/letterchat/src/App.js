import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Components/Main'
import ChatRoom from './Components/ChatRoom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:roomId' element={<ChatRoom />} />
      </Routes>
    </div>
  )
}

export default App

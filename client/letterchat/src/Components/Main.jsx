import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from './logo.png'

const Main = () => {

    const [roomName, setRoomName] = useState("");

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };


    return (
        <div className='flex flex-col justify-center h-[100vh] bg-black items-center gap-5'>
            <Link to='/' className='sm:w-[10%] w-[30%]'><img src={logo} alt='logo'/></Link>
            <input placeholder='Room' onChange={handleRoomNameChange} value={roomName} className='w-[50%] sm:w-[25%] text-[25px] text-center rounded bg-zinc-800 text-white/30'/>
            <Link to={`/${roomName}`} className='text-white bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 animate-bg pt-2 pb-2 pl-6 pr-6 rounded'>Join/Create</Link>

            <div className="flex flex-col text-white text-center mt-10">
            <span>Stella Verse.</span>
            <span>by ange1beat</span>
      </div>
        </div>
    )
}

export default Main
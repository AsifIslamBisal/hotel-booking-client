import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';

const Rooms = () => {

    const [rooms, setrooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => setrooms(data))
    },[])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'>
            {
                rooms.map(room => <RoomCard key={room._id} room ={room}></RoomCard>)
            }
        </div>
    );
};

export default Rooms;
import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    return (
        <div className="single-room w-72 mx-auto">
            <img src={room.image_url} alt="" className="mb-2 w-72 h-64" />
            <div className="flex justify-between">
                <div className="">
                    <h3>{room.title}</h3>
                    <h4>$<span>{room.price}</span>/night</h4>
                </div>
                <Link to={`/rooms/${room._id}`}><button className="mr-2 border border-yellow-500 py-2 px-4 ">Book</button></Link>
            </div>
        </div>
    );
};

export default Room;
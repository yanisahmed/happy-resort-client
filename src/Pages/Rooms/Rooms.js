import { faRulerHorizontal, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Room from '../../component/Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://quiet-bastion-48114.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                setLoading(true);
            });
    }, []);

    return (
        <>
            <section className="section-title mt-8 mb-4">
                <h3 className="uppercase text-center font-semibold text-3xl">Special Rooms</h3>
                <p className="text-center text-gray-300 mt-2"><FontAwesomeIcon icon={faRulerHorizontal} /><FontAwesomeIcon icon={faSmile} className="mx-2" /><FontAwesomeIcon icon={faRulerHorizontal} /></p>
            </section>
            {!loading ? <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span> : <section className="my-8">
                <div className="container mx-auto grid md:grid-cols-4 gap-x-4 gap-y-8">
                    {rooms.map(room => <Room key={room._id} room={room} />)}
                </div>
            </section>}
        </>
    );
};

export default Rooms;
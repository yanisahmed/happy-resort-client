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
            {!loading ? <button type="button" className="bg-rose-600 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing
            </button> : <section className="my-8">
                <div className="container mx-auto grid md:grid-cols-4 gap-x-4 gap-y-8">
                    {rooms.map(room => <Room key={room._id} room={room} />)}
                </div>
            </section>}
        </>
    );
};

export default Rooms;
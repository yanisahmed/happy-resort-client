import { faRulerHorizontal, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Details from '../../component/Room/Details';
import { useParams } from 'react-router';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState([]);
    useEffect(() => {
        fetch(`https://quiet-bastion-48114.herokuapp.com/rooms/${id}`)
            .then(res => res.json())
            .then(data => {
                setRoom(data);
            })
    }, [id])
    return (
        <>
            <section className="section-title mt-8 mb-4">
                <h3 className="uppercase text-center font-semibold text-3xl">Room Details</h3>
                <p className="text-center text-gray-300 mt-2"><FontAwesomeIcon icon={faRulerHorizontal} /><FontAwesomeIcon icon={faSmile} className="mx-2" /><FontAwesomeIcon icon={faRulerHorizontal} /></p>
            </section>
            <section className="my-8">
                <div className="container mx-auto ">
                    <Details room={room}></Details>
                </div>
            </section>
        </>
    );
};

export default RoomDetails;
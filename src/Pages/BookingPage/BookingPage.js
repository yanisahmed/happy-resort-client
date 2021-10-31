import { faRulerHorizontal, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingDetails from '../../component/BookingDetails/BookingDetails';

const BookingPage = () => {
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
                <h3 className="uppercase text-center font-semibold text-3xl">Book Now</h3>
                <p className="text-center text-gray-300 mt-2"><FontAwesomeIcon icon={faRulerHorizontal} /><FontAwesomeIcon icon={faSmile} className="mx-2" /><FontAwesomeIcon icon={faRulerHorizontal} /></p>
            </section>
            <section className="my-8">
                <div className="container mx-auto ">
                    <BookingDetails room={room}></BookingDetails>
                </div>
            </section>
        </>
    );
};

export default BookingPage;
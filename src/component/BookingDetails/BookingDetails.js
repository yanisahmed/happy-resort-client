import React from 'react';
import { Link } from 'react-router-dom';

const BookingDetails = ({ room }) => {
    return (
        <>
            <div className="grid md:grid-cols-2 md:gap-x-4 px-2 md:px-0">
                <div>
                    <img src={room.image_url} alt="" />
                    <p className="mt-4">{room.description}</p>
                </div>
                <div>
                    <h3 className="text-yellow-300, text-3xl">{room.title}</h3>
                    <h3 className="text-3xl my-2">Price: ${room.price}/night</h3>
                    <Link to={`/order/${room._id}`}><button className="uppercase px-4 py-2 bg-yellow-500 text-white">Book Now</button></Link>
                </div>
            </div>
        </>
    );
};

export default BookingDetails;
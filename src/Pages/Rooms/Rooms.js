import { faRulerHorizontal, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Room from '../../component/Room/Room';

const Rooms = () => {
    return (
        <>
            <section className="section-title mt-8 mb-4">
                <h3 className="uppercase text-center font-semibold text-3xl">Special Rooms</h3>
                <p className="text-center text-gray-300 mt-2"><FontAwesomeIcon icon={faRulerHorizontal} /><FontAwesomeIcon icon={faSmile} className="mx-2" /><FontAwesomeIcon icon={faRulerHorizontal} /></p>
            </section>
            <section className="my-8">
                <div className="container mx-auto grid md:grid-cols-4 gap-x-4 gap-y-8">
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                </div>
            </section>
        </>
    );
};

export default Rooms;
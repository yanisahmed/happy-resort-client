import { faRulerHorizontal, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SectionTitle = () => {
    return (
        <section className="section-title mt-8 mb-4">
            <h3 className="uppercase text-center font-semibold text-3xl">Welcome to the Happy Resort</h3>
            <p className="text-center text-gray-300 mt-2"><FontAwesomeIcon icon={faRulerHorizontal} /><FontAwesomeIcon icon={faSmile} className="mx-2" /><FontAwesomeIcon icon={faRulerHorizontal} /></p>
            <p className="text-center w-8/12 mx-auto mt-8 mb-8">Happy Resort have been provding amazing services since 2020. It is where you feel like home and spend quality time. Happy Resort have been provding amazing services since 2020. It is where you feel like home and spend quality time</p>
        </section>
    );
};

export default SectionTitle;
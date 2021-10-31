import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <section>
            <div className="container mx-auto flex justify-center items-center content-center h-screen">
                <div className="thank-you-content">
                    <h1 className="text-5xl md:text-9xl text-center">Thank You</h1><br />
                    <span className="text-center block">We will contact through your email </span>
                    <p className="text-center">You can see more accomadation <Link to="/rooms" className="text-blue-900">here </Link></p>

                </div>
            </div>
        </section>
    );
};

export default ThankYou;
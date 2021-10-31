import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <div className="container mx-auto flex justify-center items-center content-center h-screen">
                <div className="not-found-content">
                    <h1 className="text-5xl md:text-9xl text-center">404</h1><br />
                    <span className="text-center block">Sorry! Page not found </span>
                    <p className="text-center">The requested URL was not found on this server. That’s all we know.Click <Link to="/" className="text-blue-900">here </Link>to get to the front page?</p>

                </div>
            </div>
        </section>
    );
};

export default NotFound;
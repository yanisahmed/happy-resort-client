import { faRulerHorizontal, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Login from '../../component/Login/Login';

const LoginPage = () => {
    return (
        <div className="h-screen">
            <section className="section-title mt-8 mb-4">
                <h3 className="uppercase text-center font-semibold text-3xl">Login</h3>
                <p className="text-center text-gray-300 mt-2"><FontAwesomeIcon icon={faRulerHorizontal} /><FontAwesomeIcon icon={faSmile} className="mx-2" /><FontAwesomeIcon icon={faRulerHorizontal} /></p>
            </section>
            <Login></Login>
        </div>
    );
};

export default LoginPage;
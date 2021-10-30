import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleGoogleLogin = () => {

    }
    return (
        <div className="container mx-auto flex justify-center">
            <div className="">
                <h3 className="text-center"><Link to="/">
                    <FontAwesomeIcon icon={faSmile} className="mr-2 text-yellow-300" />
                    <span className="uppercase font-semibold">Happy Resort</span>
                </Link></h3>
                <h4 className="text-center mb-8 mt-2">Welcome Back!</h4>
                <button onClick={handleGoogleLogin} className="bg-gray-200 px-8 py-2 mb-8">Sign in With Google</button><br />

            </div>

        </div>
    );
};

export default Login;
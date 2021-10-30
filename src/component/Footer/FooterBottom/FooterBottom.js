import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SocialIcons from '../../SocialIcons/SocialIcons';
import './FooterBottom.css'

const FooterBottom = () => {
    return (
        <div className="footer-bottom w-full bg-gray-800 flex justify-center">
            <div className="md:w-1/4  py-4">
                <span className="text-center text-white"><SocialIcons /></span>
                <div className="text-center mt-4 text-white">
                    <span>Copyright &copy;2021 </span>
                </div>
                <div className="footer-logo text-center">
                    <FontAwesomeIcon icon={faSmile} className="text-yellow-300" />
                    <h3 className="uppercase font-semibold">Happy Resort</h3>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;
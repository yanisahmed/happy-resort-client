import { faFacebook, faGooglePlus, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialIcons.css';

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
            <FontAwesomeIcon icon={faGooglePlus} className="mr-2" />
            <FontAwesomeIcon icon={faYoutube} className="mr-2" />
            <FontAwesomeIcon icon={faPinterest} className="mr-2" />
        </div>
    );
};

export default SocialIcons;
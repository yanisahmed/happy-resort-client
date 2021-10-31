import React from 'react';
import useAuth from '../../../hooks/useAuth';
import SocialIcons from '../../SocialIcons/SocialIcons';

const HeaderTop = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="bg-gray-800">
                <div className="container mx-auto flex justify-between py-4 ">
                    <div>
                        <span className="text-white"><SocialIcons></SocialIcons></span>
                    </div>
                    <div>
                        <span className="text-white">{!user.displayName ? "Welcome, Guest" : <span>Welcome, {user.displayName}</span>}</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HeaderTop;
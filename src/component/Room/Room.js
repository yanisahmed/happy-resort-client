import React from 'react';

const Room = () => {
    return (
        <div className="single-room w-72 mx-auto">
            <img src="https://via.placeholder.com/290x250" alt="" className="mb-2" />
            <div className="flex justify-between">
                <div className="">
                    <h3>Name</h3>
                    <h4>$<span>200</span>/night</h4>
                </div>
                <button className="mr-2 border border-yellow-500 py-2 px-4 ">Book</button>
            </div>
        </div>
    );
};

export default Room;
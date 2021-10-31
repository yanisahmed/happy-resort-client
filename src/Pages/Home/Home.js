import React, { useEffect, useState } from 'react';
import HeroHome from '../../component/HeroHome/HeroHome';
import Room from '../../component/Room/Room';
import SectionTitle from '../../component/SectionTitle/SectionTitle';

const Home = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://quiet-bastion-48114.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                setLoading(true);
            });
    }, []);
    return (
        <>
            <HeroHome></HeroHome>
            <SectionTitle></SectionTitle>
            {!loading ? <button type="button" className="bg-rose-600 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing
            </button> : <section className="my-8">
                <div className="container mx-auto grid md:grid-cols-4 md:gap-x-4 gap-y-8">
                    {rooms.map((room, index) => index < 6 && <Room key={room._id} room={room} />)}
                </div>
            </section>}
        </>
    );
};

export default Home;
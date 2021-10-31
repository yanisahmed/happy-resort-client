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
            {!loading ? <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span> : <section className="my-8">
                <div className="container mx-auto grid md:grid-cols-4 md:gap-x-4 gap-y-8">
                    {rooms.map((room, index) => index < 6 && <Room key={room._id} room={room} />)}
                </div>
            </section>}
        </>
    );
};

export default Home;
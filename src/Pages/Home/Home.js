import React, { useEffect, useState } from 'react';
import HeroHome from '../../component/HeroHome/HeroHome';
import Room from '../../component/Room/Room';
import SectionTitle from '../../component/SectionTitle/SectionTitle';

const Home = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                console.log(data);
            });
    }, []);
    return (
        <>
            <HeroHome></HeroHome>
            <SectionTitle></SectionTitle>
            <section className="my-8">
                <div className="container mx-auto grid md:grid-cols-4 md:gap-x-4 gap-y-8">
                    {rooms.map((room, index) => index < 6 && <Room key={room._id} room={room} />)}
                </div>
            </section>
        </>
    );
};

export default Home;
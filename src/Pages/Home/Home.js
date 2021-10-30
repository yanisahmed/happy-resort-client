import React from 'react';
import HeroHome from '../../component/HeroHome/HeroHome';
import Room from '../../component/Room/Room';
import SectionTitle from '../../component/SectionTitle/SectionTitle';

const Home = () => {
    return (
        <>
            <HeroHome></HeroHome>
            <SectionTitle></SectionTitle>
            <section className="my-8">
                <div className="container mx-auto grid md:grid-cols-4 md:gap-x-4 gap-y-8">
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                    <Room></Room>
                </div>
            </section>
        </>
    );
};

export default Home;
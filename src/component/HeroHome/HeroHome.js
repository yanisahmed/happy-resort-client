import React from 'react';
import './HeroHome.css'

const HeroHome = () => {
    return (
        <section className="hero-section content-center">
            <div className="container mx-auto  h-full flex flex-wrap content-center ">
                <div className="hero-content md:w-6/12 px-2">
                    <h1 className="uppercase text-3xl md:text-5xl">Book your winter holidays and have fun</h1>
                    <button className="bg-yellow-500  text-white font-bold mt-4 py-4 px-8">
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
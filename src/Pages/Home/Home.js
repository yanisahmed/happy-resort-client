import { faPaperPlane, faRulerHorizontal, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import HeroHome from '../../component/HeroHome/HeroHome';
import Room from '../../component/Room/Room';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import './Home.css';

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
                    {rooms.map((room, index) => index < 8 && <Room key={room._id} room={room} />)}
                </div>
            </section>}
            <section className="section-title mt-8">
                <h3 className="uppercase text-center font-semibold text-3xl">Gallery</h3>
                <p className="text-center text-gray-300 mt-2"><FontAwesomeIcon icon={faRulerHorizontal} /><FontAwesomeIcon icon={faSmile} className="mx-2" /><FontAwesomeIcon icon={faRulerHorizontal} /></p>

            </section>

            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/p0PLGt2/room-8.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/1Lfx46f/room-2.jpg" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/Nxp9xdm/room-6.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/wMt3FrC/room-1.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/WG8j5bR/room-7.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/fQ5CRzg/room-4.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newsletter h-48">
                <div className="flex justify-center items-center content-center">
                    <div class="mb-3 pt-0">
                        <p className="mt-12">Subscribe newsletter</p>
                        <input
                            type="text"
                            placeholder="Placeholder"
                            className="
      px-3
      py-3
      placeholder-gray-400
      text-gray-600
      relative
      bg-white bg-white
      rounded
      text-sm
      border border-gray-400
      outline-none
      focus:outline-none focus:ring
      w-8/12
    "
                        />
                        <button
                            className="
    bg-purple-500
    text-white
    active:bg-purple-600
    font-bold
    uppercase
    text-sm
    px-6
    py-3
    rounded
    shadow
    hover:shadow-lg
    outline-none
    focus:outline-none
    mr-1
    mb-1
    ease-linear
    transition-all
    duration-150
  "
                            type="button"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} className="" />
                        </button>
                    </div>


                </div>
            </section>

        </>
    );
};

export default Home;
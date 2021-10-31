import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';

/*
https://i.ibb.co/wMt3FrC/room-1.jpg
https://i.ibb.co/1Lfx46f/room-2.jpg
https://i.ibb.co/0mjjRbh/room-3.jpg
https://i.ibb.co/fQ5CRzg/room-4.jpg
https://i.ibb.co/KbGrb5v/room-5.jpg
https://i.ibb.co/Nxp9xdm/room-6.jpg
https://i.ibb.co/WG8j5bR/room-7.jpg
https://i.ibb.co/p0PLGt2/room-8.jpg
https://i.ibb.co/s1F0c2n/room-9.jpg
https://i.ibb.co/5hqSjYZ/room-10.jpg
*/

const AddRoom = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('https://quiet-bastion-48114.herokuapp.com/rooms', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Room Added');
                    reset();
                }
            })
    }
    return (
        <div className="container mx-auto">
            <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Room Title
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-room-title" type="text" placeholder="Room Title" {...register("title")} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Room Description
                        </label>
                        <textarea rows="4" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-description" placeholder="Room Description" {...register("description")} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Image URL
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image-url" type="text" placeholder="Image URL" {...register("image_url")} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-price" type="text" placeholder="Price" {...register("price")} />
                    </div>
                </div>
                <button
                    className="
                        bg-yellow-500
                        text-white
                        active:bg-purple-600
                        font-bold
                        uppercase
                        text-sm
                        px-6
                        py-3
                        rounded-full
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
                    type="submit"
                >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Room
                </button>


            </form>
        </div>
    );
};

export default AddRoom;
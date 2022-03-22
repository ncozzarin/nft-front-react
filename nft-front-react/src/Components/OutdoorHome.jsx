import React from 'react';
import "../styles/App.css";
import "../styles/output.css";
import image from "../assets/grow-image.jpeg"


// now it is harcoded

const OutdoorHome = () => {

    return (
        <div className="flex">
            <div className="h-screen w-72 bg-red">
                <img className="w-full h-72" src={image} alt="" />
                <h2 className='text-white text-bold p-4'>Grow your own cannabis outdoor plant and show it off with the community</h2>
                <div className='divide-y border-t text-white block'>
                    <div className='hover:cursor-pointer hover:bg-red-400'>
                    <p>Tent home</p>
                    </div>
                    <div className='hover:cursor-pointer hover:bg-red-400'>
                    <p>Shop</p>
                    </div>
                    <div className='pt-8'>
                        <div className=' hover:cursor-pointer hover:bg-red-400'>Back to tents</div>
                    </div>
                </div>
            </div>
            <div className="p-7 text-2xl flex-1 h-screen bg-white">
                <p className='text-red-800	'>HELLO</p>
            </div>
        </div>
    );
    }
export default OutdoorHome;
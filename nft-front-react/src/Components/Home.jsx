import React from 'react';
import "../styles/Home.css";
import "../styles/output.css";
import Cards from './Cards';
// Constants

const Home = () => {

    return (
        <div className=' content-start bg-white	mx-auto p-8 mb-2'>
        <div>
            <div>
                <div className='projects-title-container'>
                    <p className='text-3xl font-bold '>🧪 Tents</p>
                    <p className='project-subtitle-text'>Pick a tent setup and start growing!</p>
                </div>
                <div className='grid justify-items-center 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>


                </div>
            </div>
        </div>
        </div>

    );
    }
export default Home;
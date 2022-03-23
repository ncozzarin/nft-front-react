import React from 'react';
import "../styles/App.css";
// now it is harcoded

const HeaderCourses = () => {

    return (
        <div className='w-full h-32 bg-black  flex fixed p-7'>
            <div className='block w-full'>
                <div className='justify-center content-center flex w-full'>
                <p className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-cyan-400 to-blue-400 font-sans md:pr-72'>Weedmaniac</p>
                </div>
                <div className='justify-center content-center flex w-full md:pr-72'>
                    <ol className='justify-center content-center flex w-full text-white'>
                        <il>Section 1</il>
                        <il>Section 2</il>
                        <il>Section 3</il>
                        <il>Section 4</il>
                    </ol>
                </div>
            </div>
        </div>
    );
    }
export default HeaderCourses;


import React from 'react';
import "../styles/App.css";
import image from "../assets/grow-image.jpeg"
import { Link } from 'react-router-dom'
// now it is harcoded

const Cards = (props) => {

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer hover:shadow-2xl hover:shadow-green-500 ">
            <Link to={`/courses/outdoor`}>
        <img class="w-full" src={image} alt="Outdoorgrow"/>
        <div class="px-6 py-4 hover:from-green-400 hover:to-blue-500">
            <div class="font-bold text-xl mb-2">Outdoor Enthusiast</div>
            <p class="text-gray-700 text-base">
            First steps into outdoor growing to maximize yield and minimize costs. Earn an unique NFT at the end of the course. 
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#yield</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nature</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#outdoor</span>
        </div>
        </Link>
        </div>
    );
    }
export default Cards;

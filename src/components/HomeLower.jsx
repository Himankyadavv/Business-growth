import React from 'react';
import working from '../assets/working.jpg';
import womanworking from '../assets/woman-working.jpg';
import stocks from '../assets/stocks.jpg';

export function HomeLower() {
    const cards = [
        {
            image: working,
            title: "Sales via the web",
            description: "Increase sales via the web, maximize traffic independently",
        },
        {
            image: womanworking,
            title: "Content management",
            description: "Maximize social media management to make it more efficient",
        },
        {
            image: stocks,
            title: "Increase mobile app users",
            description: "We carry out various campaigns so the users want to download the app",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-[#f2f5f9] w-full px-4 sm:px-6 lg:px-[6rem] py-8 lg:py-[4rem]">
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
}

function Card({ image, title, description }) {
    return (
        <div className="w-full md:w-1/3 relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out shadow-xl group hover:shadow-lg">
            <img
                className="w-full h-[300px] md:h-[400px] object-cover"
                src={image}
                alt={title}
            />
            <div className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2 z-10">{title}</h3>
                    <p className='text-white text-xs md:text-sm font-light mb-2 z-10'>{description}</p>
                </div>
                <button className="text-white border-solid border-white border-2 py-2 px-4 rounded-full self-start text-sm md:text-base">
                    Learn More
                </button>
            </div>
        </div>
    );
}
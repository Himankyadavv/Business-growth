import React from 'react';
import marketing from "../assets/marketing.png";

const ServiceCard = ({ title, description, bgColor }) => (
  <div className="rounded-lg h-full shadow shadow-slate-200 flex flex-col justify-between">
    <div>
      <div className={`flex gap-2 items-center ${bgColor} rounded-t-lg p-4`}>
        <img className="w-6 h-6 md:w-8 md:h-8" src={marketing} alt="" />
        <h2 className="font-semibold text-base md:text-lg font-montserrat">{title}</h2>
      </div>
      <div className="p-4">
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
    <div className="m-4">
      <button className="w-full px-4 py-2 md:px-5 md:py-3 rounded-full bg-[#4f4bb3] text-white flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base transition-all hover:bg-[#3f3b93]">
        <span>Learn More</span>
        <svg className="w-3 h-3 md:w-4 md:h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </button>
    </div>
  </div>
);

export function ServicesCards() {
  const services = [
    {
      title: "Marketing & Hiring",
      description: "We help you develop strategies to market your brand and hire top talent that drives your business growth.",
      bgColor: "bg-[#fdf0ec]"
    },
    {
      title: "Web development/design",
      description: "Build responsive, user-friendly websites with our expert design and development team to boost your online presence.",
      bgColor: "bg-[#e8fbef]"
    },
    {
      title: "Hiring",
      description: "Elevate your business image with professional branding that resonates with your audience and builds loyalty.",
      bgColor: "bg-[#d8e4ff]"
    },
    {
      title: "Consultant",
      description: "Receive expert business advice to solve complex challenges and improve your business processes.",
      bgColor: "bg-[#E1DBCB]"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 my-8 md:my-12 lg:my-16 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}
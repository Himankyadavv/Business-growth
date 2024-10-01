import React from 'react';
import contactus from '../assets/Contactus.jpg';

const ContactInfo = ({ icon, text }) => (
  <div className='bg-[#f2f5f9] p-3 sm:p-4 rounded-lg flex gap-2 items-center'>
    {icon}
    <p className="text-sm sm:text-base">{text}</p>
  </div>
);

export function ContactusMiddle() {
  return (
    <div className="bg-[#f2f5f9] w-full px-4 py-8 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-12 w-full lg:w-1/2">
          <h2 className="text-[#4f4bb3] font-semibold mb-2 text-xl sm:text-2xl">Get in Touch</h2>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Let's Chat, Reach Out to Us</h1>
          <p className="text-gray-600 mb-6 sm:mb-8">
            Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours
          </p>
          
          <form className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f4bb3] focus:border-[#4f4bb3]"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f4bb3] focus:border-[#4f4bb3]"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f4bb3] focus:border-[#4f4bb3]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Leave us message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f4bb3] focus:border-[#4f4bb3]"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-[#4f4bb3] text-white py-2 px-4 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#4f4bb3] focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-6 sm:gap-8">
          <div className='w-full h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 overflow-hidden rounded-lg'>
            <img className='w-full h-full object-cover' src={contactus} alt="Contact Us" />
          </div>
          <div className='bg-white rounded-lg p-4 sm:p-6 flex flex-col gap-4 sm:gap-5'>
            <ContactInfo 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                </svg>
              }
              text="techteam@foxyline.com"
            />
            <ContactInfo 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
              }
              text="(+91) 8463764536"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
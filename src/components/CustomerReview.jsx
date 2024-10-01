import React from 'react';
import customer from '../assets/customer.jpeg';

export function CustomerReview() {
    return (
        <div className="flex flex-col gap-6 sm:gap-10 justify-center items-center py-8 sm:py-[3rem] px-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:gap-10 items-center text-center">
                <div className="font-bold text-3xl sm:text-4xl md:text-5xl">
                    Why they prefer Foxyline
                </div>
                <div className="font-base text-base sm:text-lg">
                    To accelerate the growth of their company
                </div>
            </div>
            
            <div className="border-solid border-[0.5px] border-[#dee3e5] flex flex-col md:flex-row w-full max-w-[70rem]">
                <div className='w-full md:w-1/2'>
                    <img src={customer} alt="customer" className="w-full h-full object-cover" />
                </div>
                <div className='flex flex-col w-full md:w-1/2 py-6 px-4 sm:px-6 md:py-[2rem] md:px-[2rem]'>
                    <div className='flex items-center font-extrabold text-6xl sm:text-7xl md:text-8xl font-montserrat'>
                        ''
                    </div>
                    <div className='font-semibold text-lg sm:text-xl leading-tight sm:leading-[1.5rem] mb-4 sm:mb-[1rem] font-montserrat'>
                        "I made the switch to Foxyline from Paypal for my writing agency. It was EASY. It was FAST. And they don't charge fees. THIS is a business that believes in small business."
                    </div>
                    <div className='font-montserrat text-xs sm:text-sm mt-auto'>
                        MARINA HUTATA, CEO, RIKO KOWALSKI INC
                    </div>
                </div>
            </div>
        </div>
    );
}
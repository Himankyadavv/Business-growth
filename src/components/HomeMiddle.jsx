import React from 'react';
import logo from '../assets/meta-logo.png';

export function HomeMiddle() {
    return (
        <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 lg:px-[6rem] py-8 lg:py-[3rem] gap-8 lg:gap-0">
            <div className="flex flex-col gap-8 lg:gap-[4rem]">
                <div className="text-base sm:text-lg font-bold font-montserrat leading-tight sm:leading-[1.5rem]">
                    Our portfolio has been proven to help <br className="hidden sm:inline" />
                    increase company growth by <br className="hidden sm:inline" />
                    up to 25% per year.
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-8 h-8 sm:w-10 sm:h-10' src={logo} alt="logo" />
                    <div className='flex flex-col text-[#3a4043] text-xl sm:text-2xl'>
                        <div>Meta Business</div>
                        <div>Partners</div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[30rem]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-[7rem]'>
                    <StatItem percentage="89.9%" description="Increase in total social engagements" />
                    <StatItem percentage="80%+" description="Reduction in average time to first response" />
                    <StatItem percentage="$240k" description="In marketing costs saved" />
                    <StatItem percentage="156+" description="Countries in the world use Foxyline" />
                </div>
            </div>
        </div>
    );
}

function StatItem({ percentage, description }) {
    return (
        <div className='flex flex-col w-full sm:w-[10rem] items-center'>
            <div className='font-bold text-4xl sm:text-5xl text-[#4f4bb3] font-montserrat'>
                {percentage}
            </div>
            <div className='flex-1 text-sm text-[#797676] mt-2'>
                {description}
            </div>
        </div>
    );
}
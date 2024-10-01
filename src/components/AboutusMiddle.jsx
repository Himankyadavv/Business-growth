import illustration from '../assets/illustration.png'

export function AboutUsMiddle() {
    return (
        <div className="bg-[#f2f5f9] px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:p-[3rem] w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-1/2">
                    <h1 className="font-semibold text-xl sm:text-2xl text-[#4743ae]">About us</h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                        Innovating Solution For Lasting Growth, One Step At A Time
                    </h2>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-base text-slate-600">
                        At Foxyline, we are a dynamic team of experienced professionals committed to helping businesses scale, evolve, and thrive in today's competitive market. With expertise spanning marketing, web design & development, branding, and consulting, we offer a comprehensive suite of services to accelerate your business growth and achieve sustainable success.
                    </p>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-base text-slate-600">
                        Our passion lies in empowering businesses with innovative solutions that drive measurable results. Whether you are a startup seeking to establish your brand or an established company aiming for higher efficiency and reach, we partner with you to achieve your goals.
                    </p>
                </div>
                
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img 
                        className='w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl object-contain' 
                        src={illustration} 
                        alt="About Us Illustration"
                    />
                </div>
            </div>
            
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-16 sm:gap-[2rem] lg:mt-20'>
                <StatBox number="2k" text="Numbers of customers are currently active increasing more and more daily" />
                <StatBox number="80%" text="Success rate from growing to marketing we are not stopping" />
                <StatBox number="9/10" text="customer satisfaction and we are continuously increasing this" />
            </div>
        </div>
    )
}

function StatBox({ number, text }) {
    return (
        <div className='flex flex-col items-center text-center'>
            <h3 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#4743ae] font-extrabold font-montserrat mb-2 sm:mb-3'>
                {number}
            </h3>
            <p className='text-xs sm:text-sm lg:text-base text-slate-700 max-w-xs'>
                {text}
            </p>
        </div>
    )
}
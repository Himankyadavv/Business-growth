import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ServicesCards } from "../components/ServicesCards";

export function Services() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-screen py-[5rem] ">
            <div className="flex flex-col justify-start items-center">
                <div className="flex flex-col justify-center items-center gap-5 px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-montserrat text-[#2C223A] text-center">
                    OUR SERVICES
                    </h1>
                    <p className="tracking-widest text-base md:text-lg text-center">
                    Services we provide to our customers
                    </p>
                </div>
            </div>
                <ServicesCards />
                <Footer />
            </div>

                
        </div>
    )
}
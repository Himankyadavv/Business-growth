import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio'},
        { name: 'Contact us', href: '/contactus' },
        { name: 'About us', href: '/aboutus' },
    ];

    return (
        <nav className="bg-white shadow-md relative z-50">
            <div className='max-w-7xl mx-auto flex flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4'>
                <div className='flex items-center gap-3'>
                    <img src={logo} alt="logo" className="h-8 w-auto" />
                    <label className='text-2xl font-semibold text-[#00102d]'>Foxyline</label>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-10 text-[#7e7f87]'>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    to={item.href} 
                                    className={`hover:text-[#00102d] transition-colors duration-200 ${location.pathname === item.href ? 'text-[#00102d] font-semibold' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='hidden md:flex gap-6 items-center'>
                    <Link to="/login" className='text-[#00102d] hover:text-[#3a4b6d] transition-colors duration-200'>
                        Log In
                    </Link>
                    <Link to="/signup" className='rounded-full bg-[#00102d] text-white py-2 px-5 hover:bg-[#3a4b6d] transition-colors duration-200'>
                        Sign up
                    </Link>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-[#00102d] hover:text-[#3a4b6d] transition-colors duration-200'>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
            
            <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleMenu} className='text-[#00102d] hover:text-[#3a4b6d] transition-colors duration-200'>
                        <X size={24} />
                    </button>
                </div>
                <div className='px-4'>
                    <ul className='space-y-4 text-[#7e7f87]'>
                        {navItems.map((item) => (
                            <li key={item.name} className='py-2'>
                                <Link 
                                    to={item.href} 
                                    className={`block hover:text-[#00102d] transition-colors duration-200 ${location.pathname === item.href ? 'text-[#00102d] font-semibold' : ''}`}
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='mt-6 space-y-4'>
                        <Link to="/login" className='block w-full text-[#00102d] py-2 text-center hover:bg-gray-100 transition-colors duration-200' onClick={toggleMenu}>
                            Log In
                        </Link>
                        <Link to="/signup" className='block w-full bg-[#00102d] text-white rounded-full py-2 text-center hover:bg-[#3a4b6d] transition-colors duration-200' onClick={toggleMenu}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            
            {isOpen && (
                <div className='fixed inset-0 bg-black opacity-50 z-40 md:hidden' onClick={toggleMenu}></div>
            )}
        </nav>
    );
}
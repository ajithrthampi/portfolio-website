"use client";
import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const links = [
        { id: "home", text: "Home" },
        { id: "about", text: "About" },
        { id: "projects", text: "Projects" },
        { id: "contact", text: "Contact" }
    ];
    return (
        <>
            <nav className="slg:absolute fixed right-0 left-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 slg:bg-transparent bg-[#0b011e]">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-3xl text-white fontManrope-bold">Ajith</span>
                    </a>
                    <button onClick={handleShow} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg slg:hidden" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full slg:block md:w-auto text-white fontManrope-regular" id="navbar-default">
                        <ul className="font-medium flex flex-col text-[14px] p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0">
                            {links.map(link => (
                                <li key={link.id}>
                                    <ScrollLink to={link.id} spy={true} smooth={true} offset={-70} duration={500}>
                                        <p className="cursor-pointer block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">{link.text}</p>
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {show && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='fixed bg-[#0d0716] top-0 right-0 w-[300px] h-screen slg:hidden'>
                        <div className='w-full h-full'>
                            <div className='absolute top-3 text-white right-3 left-0 text-3xl cursor-pointer w-full'>
                                <div className='flex items-center justify-between w-full px-6 pt-7' onClick={() => setShow(false)}>
                                    <p className='className="self-center text-2xl text-white fontManrope-bold"'>Ajith</p>
                                    <IoClose />
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col justify-center text-white fontManrope-regular px-5" id="navbar-default">
                                <ul className="font-medium flex flex-col justify-center text-xl   rounded-lg ">
                                    {links.map(link => (
                                        <li key={link.id}>
                                            <ScrollLink to={link.id} spy={true} smooth={true} offset={-70} duration={500} onClick={() => setShow(false)}>
                                                <p className="cursor-pointer hover:text-[#6820a5] transition-all duration-300 block py-2 px-3 p-0" aria-current="page">{link.text}</p>
                                            </ScrollLink>
                                        </li>
                                    ))}
                                </ul>
                                <div className='pt-6 px-3  text-white fontManrope-regular'>
                                    <div>
                                        <p>My Address</p>
                                        <p className='pt-2 fontManrope-regular text-[#c2bfc6]'>Kerala, Alappuzha</p>
                                        <div className='pt-4 fontManrope-regular text-[#c2bfc6]'>
                                            <p>Call me</p>
                                            <p className='text-[#6820a5]'>
                                                <a href='tel:7510757114'>+91 7510757114</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    )
}

export default Navbar
"use client";
import React, { useEffect, useState } from 'react'
import square1 from "../public/images/about/square1.png"
import squareShadow1 from "../public/images/about/squareShadow1.png"
import { GoArrowUpRight } from "react-icons/go";
import instagram from "../public/images/socials/instagram.png"
import linkedin from "../public/images/socials/linkedin.png"
import twitter from "../public/images/socials/twitter.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState("")
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Clear error and display success toast
        setError('');
        toast.success("Your message has been sent successfully!");

        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <div className='h-full  contact-containe overflow-hidden' id="contact">
        <hr className="h-[1.5px] bg-gray-900 bg-gradient-to-r from-[#0b011d] via-[#372c4b] to-[#0b011d]  border-0 " />
        <div className='xl:px-[150px] md:px-[40px]  sm:px-[30px] vsm:px-[12px] px-[7px] md:py-28 py-16 '>
            <div className=''>
                <div className='relative top28  left-0 right-0 bottom-0 w-[100%] h-auto  xl:max-w-[1128px] lg:max-w-[1000px] md:max-w-  mr-auto ml-auto  '>
                    <div className='absolute sm:top-28 top-10'>
                        <img className='md:w-full sm:w-20 w-16 '
                            src={square1}
                            alt="" />
                        <div className='absolute top-0'>
                            <img src={squareShadow1}
                                alt="" />
                        </div>
                    </div>
                    <div className='absolute  right-0 transform -rotate-90'>
                        <img className='md:w-full sm:w-20 w-16'
                            src={square1}
                            alt="" />
                        <div className='absolute top-0'>
                            <img src={squareShadow1}
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col  justify-center items-center '>
                <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[70px]
         sm:text-[70px] vsm:text-[40px] text-[40px]  font-inter fontManrope-bold font-medium '>Contact</h2>
            </div>
            <section className='md:pt-20 pt-10 text-white flex slg:flex-row flex-col  lg:gap-20 gap-10  justify-center'>
                <div className='slg:w-[40%]'>
                    <p className='fontManrope-medium md:text-3xl text-lg'>SEND ME A MESSAGE</p>
                    <p className=' pt-5 bg-clip-text bg-gradient-to-br from-white via-[#dddbe0] to-[#bbb8c0] text-transparent fontManrope-regular leading-[29px] tracking-wide md:text-base text-sm'>
                        Have a specific inquiry or message for us? Please use the contact form below, and we&apos;ll get back to you promptly.
                    </p>
                </div>

                {/* form */}
                <div className='slg:w-[60%]' >
                    {
                        error&& <p className='fontManrope-regular text-red-500'>{error}</p>
                    }
                    <form action=" " className='flex flex-col md:gap-10 gap-7' onSubmit={handleSubmit}>
                        <div className='flex sm:flex-row flex-col justify-between sm:gap-10 gap-6'>
                            <div className='flex flex-col md:gap-2 w-full'>
                                <label className='  text-[#ffffff] fontManrope-regular leading-[29px] tracking-wide  md:text-sm text-xs' htmlFor="">Full Name</label>
                                <input
                                    placeholder='First Name'
                                    name="user_name"
                                    value={name}
                                    // required
                                    onChange={(e)=> setName(e.target.value)}
                                    className=' placeholder:uppercase fontManrope-thin md:text-base text-sm tracking-wider border-b border-[#302D38] pt-3 outline-none bg-transparent bg-clip-text bg-gradient-to-br py-2 from-white via-[#dddbe0] to-[#bbb8c0] text-transparent'
                                    type="text" />
                            </div>
                        </div>
                        <div className='flex sm:flex-row flex-col justify-between sm:gap-10 gap-6'>
                            <div className='flex flex-col md:gap-2 w-full'>
                                <label className='  text-[#ffffff]  fontManrope-regular leading-[29px] tracking-wide  md:text-sm text-xs' htmlFor="">Email</label>
                                <input
                                    placeholder='Email Address'
                                    name="user_email"
                                    value={email}
                                    // required
                                    onChange={(e)=> setEmail(e.target.value)}
                                    className=' placeholder:uppercase fontManrope-thin md:text-base text-sm  tracking-wider border-b border-[#302D38] pt-3 outline-none bg-transparent bg-clip-text bg-gradient-to-br py-2 from-white via-[#dddbe0] to-[#bbb8c0] text-transparent'
                                    type="text" />
                            </div>
                        </div>

                        <div className='flex w-full justify-between gap-10'>
                            <textarea
                                placeholder='Message'
                                value={message}
                                // required
                                onChange={(e)=> setMessage(e.target.value)}
                                className=' placeholder:uppercase fontManrope-thin w-full  md:text-base text-sm tracking-wider border-b border-[#302D38] pt-3 outline-none bg-transparent bg-clip-text bg-gradient-to-br py-2 from-white via-[#dddbe0] to-[#bbb8c0] text-transparent'
                                name="message">

                            </textarea>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[40px]
                                            sm:text-[30px] vsm:text-[20px] text-[20px]  font-inter fontManrope-bold font-medium '>
                                SEND MESSAGE
                            </h2>
                            <button className='w-24 bg-gradient-to-b group  from-purple-800  to-transparent py-3 text-white  md:text-sm text-xs  fontManrope-medium bg-[#150b26 rounded-full flex items-center justify-center gap-1  ' style={{ border: " 1px solid rgb(48, 45, 56)" }}>
                                <span className='group-hover:rotate-45 transition-all duration-500'>

                                    <GoArrowUpRight size={27} />
                                </span>

                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </div>

        <div className='md:pb-32 pb-10 xl:px-[150px] md:px-[40px]  sm:px-[30px] vsm:px-[12px] px-[7px]'>
            <hr className="h-[1.5px] bg-gray-900 bg-gradient-to-r from-[#0b011d] via-[#372c4b] to-[#0b011d]  border-0 " />
            <div className='flex sm:flex-row flex-col justify-between items-center pt-5'>
                {/* <p className='text-[#AFB0B6] fontManrope-thin text-sm  tracking-wide leading-6 pt-5'>
                    © 2023 {name}. All rights reserved.
                </p> */}
                <div className='flex text-2xl gap-2 sm:pt-0 pt-5'>
                    <button className='w-8 h-8 rounded-full hover:scale-105 border border-[#302D38] flex justify-center items-center bg-[#1a0f2e]'>
                        <a href="https://www.instagram.com/ajith_rth/">
                            <img src={instagram.src} alt="" />
                        </a>
                    </button>
                    <button className='w-8 h-8 rounded-full border hover:scale-105 border-[#302D38] flex justify-center items-center bg-[#1a0f2e]'>
                        <a href="https://www.linkedin.com/in/ajith-r-thampi-377183210/">
                            <img src={linkedin.src} alt="" />
                        </a>
                    </button>
                    <button className='w-8 h-8 rounded-full border hover:scale-105 border-[#302D38] flex justify-center items-center bg-[#1a0f2e]'>
                        <a href="https://twitter.com/AjithRThampi1">
                            <img src={twitter.src} alt="" />
                        </a>
                    </button>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
    )
}

export default Contact
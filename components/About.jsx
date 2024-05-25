"use client";
import React from 'react'
import square1 from "../public/images/about/square1.png"
import squareShadow1 from "../public/images/about/squareShadow1.png"


const About = () => {
    return (
        <div  className=' h-full pb-10' id="about">
            <hr className="h-px  grbg-ay-900 bg-gradient-to-r from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  border-0 " />
            <div className='xl:px-[210px]  md:px-[140px]  sm:px-[100px] vsm:px-[12px] px-[7px]'>
                <div className='relative top-28  left-0 right-0 bottom-0 w-[100%] h-auto  xl:max-w-[1128px] lg:max-w-[1000px] md:max-w-  mr-auto ml-auto  '>

                    <div className='absolute xl:left-32 left-0  bg-red500  '>
                        <img className='md:w-full sm:w-20 w-16 '
                            src={square1.src}
                            alt="" />
                        <div className='absolute top-0'>
                            <img src={squareShadow1.src}
                                alt="" />
                        </div>
                    </div>
                    <div className='absolute sm:top-20 top-10 xl:right-32 right-0 transform -rotate-90'>
                        <img className='md:w-full sm:w-20 w-16'
                            src={square1.src}
                            alt="" />
                        <div className='absolute top-0'>
                            <img src={squareShadow1.src}
                                alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  justify-center items-center pt-10 '>
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[88px] sm:text-[70px] vsm:text-[40px] text-[40px]  font-interV font-medium '>About</h2>
                </div>

                <div className='flex flex-col justify-cente items-center pt-10 '>

                    <div className='relative text-[#d5d0e2] font-interV text font-normal md:text-xl md:pt-0 pt-5 md:max-w-xl sm:px-10 px-5 flex flex-col gap-6'>
                        <div className='flex justify-start w-full md:pb-7'>
                            <img className='md:w-28 w-20 md:h-28 h-20 rounded-full object-cover' src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <p>Hey, I&apos;m Ajith,</p>
                        <p>I create premium websites for ambitious, design-driven people.</p>
                        <p>Wielding world-class programmes and robust, elegant code, I captivate audiences with stories, illustrations, mockups & animations.</p>
                        <p>I agonise over the details so that you don&apos;t have to, offering consulting services during the design phase and beyond. In short, I am a multidisciplinary front-end developer—doing his best to craft websites that are beautiful, compelling and performant.</p>
                        <p>Thank you for taking the time to explore my little corner of the internet.</p>
                        <div className='absolute right-0 bottom-0 transform rotate-90'>
                            <img className='md:w-full sm:w-20 w-16'
                                src={square1.src}
                                alt="" />
                            <div className='absolute top-0'>
                                <img src={squareShadow1.src}
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
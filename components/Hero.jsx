
"use client";
import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Button from './ui/Button'
import profile from "../public/images/profile/profile.jpg"
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className="  h-screen flex justify-center items-center flex-col   px-10">
      <div className='flex justify-center items-center flex-col gap-3'>
        <img className='w-32 h-32 rounded-full object-cover' src={profile.src} alt="" />
        <p className='text-white text-sm'>Hi i&apos;am Ajith.</p>
      </div>

      <TextGenerateEffect
        className="text-center lg:text-[40px] md:text-[30px] text-[25px] md:text-5xl lg:text-5xl  "
        words="Front-End Developer, builds  user interfaces and web applications"
      />
      <Link to="projects">
        <div className='pt-8'>
        <Button title="Show my work" />
        </div>
      </Link>
    </div>
  )
}

export default Hero
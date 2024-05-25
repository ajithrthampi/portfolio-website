
"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div id="home"  className="  h-screen flex justify-center items-center flex-col  ">
      <div className='flex justify-center items-center flex-col gap-3'>
        <img className='w-32 h-32 rounded-full object-cover' src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p className='text-white text-sm'>Hi i&apos;am Ajith</p>
      </div>

      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-5xl  "
        words="Building digital Products, brands, and experience"
      />
      <a className='pt-8' href="">
        <Button title="Show my work" />
      </a>
    </div>
  )
}

export default Hero
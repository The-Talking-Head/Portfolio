// Use rafce to add the initial doc

"use client";
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b6c5d] to-[#bda298]">
              Hello! I'm{" "}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                "Nawreen",
                1000,
                "SQA Engineer",
                1000,
                "Web Developer",
                1000,
                "Photographer",
                1000,
              ]}
            wrapper = "span"
            speed = {30}
            repeat = {Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
              I am a Software Quality Assurance Engineer at ReliSource Technologies Ltd. I have worked as a Software Engineer (QA)
              at TigerIT Bangladesh Ltd for 1.5 years. I have learning about various types of applications and how to test theese applications
              by building my tester mindset. I love to sing, read books, watch movies and click photographs in my leisure time. My whole life
              has been shaped in a way that makes me want to do something productive every day that may contribute to my learning. Currently I am
              learning to make this portfolio using Next JS step by step.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#3E2723] via-[#6D4C41] to-[#A1887F] hover:from-[#6D4C41] hover:to-[#A1887F] text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#6D4C41] to-[#A1887F] hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#222020] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-2">
          <div className="rounded-full bg-[#96745f69] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src = "/images/coder.png"
              alt = "Coder Image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width = {350}
              height = {350}
            />

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
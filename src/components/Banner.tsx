import React from 'react'
import Image from "next/image";

const Banner = () => {
  return (
    <section className="h-[calc(100vh-5rem)] flex flex-col lg:flex-row-reverse lg:items-center  mx-auto  ">
      <div className="h-1/3  md:h-1/2 lg:h-[40vh]  lg:w-1/2 relative z-10">
        <Image
          className=" h-full w-full object-cover "
          fill
          alt=""
          src="https://images.unsplash.com/photo-1721932423849-e9033192b190?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="flex h-2/3 flex-col gap-5 justify-center px-3 md:h-1/2 lg:h-full lg:gap-10 lg:w-1/2 lg:pr-20 ">
        <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl capitalize">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
        </h1>
        <h3 className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          officiis!
        </h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <button className="rounded-lg bg-black px-12 py-3 text-white">
            Get Started
          </button>
          <button className="rounded-lg px-12 py-3 text-black ring-1 ring-black">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
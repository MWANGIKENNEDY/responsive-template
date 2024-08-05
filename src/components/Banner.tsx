import React from 'react'
import Image from "next/image";

const Banner = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] grid grid-rows-[30%,70%] md:grid-rows-[40%,60%] lg:grid-cols-2 lg:grid-rows-1  mx-auto lg:items-center ">
      <div className=" h-full w-full lg:h-[50vh] relative z-10 bg-red-400 order-1 lg:order-2">
        <Image
          className=" h-full w-full object-cover "
          fill
          alt=""
          src="https://images.unsplash.com/photo-1711486107626-855a7a5ca7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="flex  py-3 flex-col gap-5 justify-center px-3  lg:pr-20 order-2 lg:order-1 ">
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
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-full inline-block text-white bg-gray-200 rounded-lg overflow-hidden md:w-1/2">
      <div className="relative h-48">
        <Image
          src="https://images.unsplash.com/photo-1722189265463-557ef7d08d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          layout=" cover"
          className=" w-full h-full"
        />
      </div>

      <div className=" p-4 flex flex-col gap-2 ">

        <h3 className="  text-gray-900 font-bold">Card Title</h3>

        <p className=" text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad fuga modi numquam odit doloribus autem unde ipsum minima sequi eligendi.</p>

        <button className="bg-green-500 px-6 py-3 rounded-md w-full">Click Me</button>
      </div>
    </div>
  );
};

export default Card;

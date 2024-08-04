import React from "react";
import Image from "next/image";

const SocialProof = () => {
  return (
    <div className="flex flex-col space-y-5 lg:flex-row lg:items-center lg:gap-5 ">
      {/* image section */}

      <div className="relative  h-72 lg:h-96 w-full lg:w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1721932423849-e9033192b190?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* text section */}

      <div className=" lg:w-1/2 flex flex-col space-y-5">
        {/* title section */}

        <div className="">
          <h3 className="text-xl font-bold  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
        </div>

        {/* list section */}

        <ul className=" space-y-5">
          <li className="flex gap-2 ">
            <div className=" w-16 h-16 flex justify-center items-center bg-gray-200 ">
              K
            </div>

            <div className="flex-1 ">
              <p className="font-bold text-sm ">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-400 text-sm ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Fuga autem a
                vero.
              </p>
            </div>

            <span></span>
          </li>
          <li className="flex gap-2 ">
            <div className=" w-16 h-16 flex justify-center items-center bg-gray-200 ">
              K
            </div>

            <div className="flex-1 ">
              <p className="font-bold text-sm ">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-400 text-sm ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Fuga autem a
                vero.
              </p>
            </div>

            <span></span>
          </li>

          <li className="flex gap-2 ">
            <div className=" w-16 h-16 flex justify-center items-center bg-gray-200 ">
              K
            </div>

            <div className="flex-1 ">
              <p className="font-bold text-sm ">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-400 text-sm ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Fuga autem a
                vero.
              </p>
            </div>

            <span></span>
          </li>

          <li className="flex gap-2 ">
            <div className=" w-16 h-16 flex justify-center items-center bg-gray-200 ">
              K
            </div>

            <div className="flex-1 ">
              <p className="font-bold text-sm ">Lorem ipsum dolor sit amet.</p>
              <p className="text-gray-400 text-sm ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Fuga autem a
                vero.
              </p>
            </div>

            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialProof;

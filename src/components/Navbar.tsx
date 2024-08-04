import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex h-20 items-center justify-between bg-black px-3 z-30">
      <span className="text-2xl font-bold text-white">Shop-It</span>
      <button className="rounded-md bg-white px-5 py-2.5">login</button>
    </div>
  );
};

export default Navbar;

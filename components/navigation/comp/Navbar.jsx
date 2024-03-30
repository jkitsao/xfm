import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 relative ">
      <div className="absolute w-12 h-12 lg:w-16 lg:h-16 left-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZt4v_gnup86P48zzfOn5gqio0K-u6-5Xuzln4szl0A&s"
          alt="logo"
          className="w-12 h-12 lg:w-16 lg:h-16  object-contain"
        />
      </div>
      <div className="flex justify-center items-center p-3 lg:p-5 text-xl font-semibold text-300-700/80">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZt4v_gnup86P48zzfOn5gqio0K-u6-5Xuzln4szl0A&s"
          alt="logo"
          className="w-12 h-12 rounded shadow-xl shadow-red-700 animate-pulse object-contain mr-2"
        /> */}
        <span className="text-md text-center leading-tight max-w-[20rem]">
          Rock and Alternative Music 24/7
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

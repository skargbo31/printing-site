import React from "react";

const NavBar = () => {
  return (
    <div className="logoDiv bg-blue-400  ">
    
      <p className="text-center  max-w-auto text-2xl ">
        Lorem ipsum dolor sit amet.
      </p>

      <ul className="flex gap-3 text-[15px] pb-5 p-2 items-center justify-center text-[white] font-bold">
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default NavBar;

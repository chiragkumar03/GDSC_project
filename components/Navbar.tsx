import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent flex justify-around items-center py-7 px-7">
      <h1 className="logo ml-10">Logo</h1>
      <ul className="flex gap-[40px] ml-[5px  ]">
        <li className="font-medium">Home</li>
        <li className="font-[500]">About</li>
        <li className="font-[500]">Skills</li>
        <li className="font-[500]">Works</li>
        <li className="font-[500]">Testimonials</li>
        <li className="font-[500]">Contact</li>
      </ul>
      <button className="button font-[600]">Download CV</button>
    </div>
  );
};

export default Navbar;

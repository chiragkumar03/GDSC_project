import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between">
        <div className="px-[20rem] py-[10rem]">
          <div className=" overflow-y-hidden">
            {/* first div */}
            <div className="w-[99px] h-[42px] border text-[#0DB760] flex justify-center items-center">
              Welcome
            </div>
            <h1 className="w-[491px] h-[140px] poppins font-[600] text-[58px]">
              I'm a <span className="text-[#0DB760]">Creative Web</span>{" "}
              Developer!!
            </h1>
            <p className="w-[640px] h-[48px] poppins font-[500] text-[18px] my-[50px]">
              I’m <span className="text-[#0DB760]">Karan</span>, a Creative
              <span className="text-[#0DB760]">Web Developer</span>. I’ve been
              helping businesses to solve their problems with my Developing
              solutions for 1 year.
            </p>
          </div>
          <div className="flex justify-around items-center w-[290px] h-[52px]">
            <button className="w-[139px] bg-[#0DB760] poppins text-white py-[1rem]  rounded-[3px]">
              Contact Me
            </button>
            <button className="w-[138px] border-[0.5px] border-[#0DB760] font-medium py-[1rem] rounded-[3px]">
              Learn More
            </button>
          </div>
        </div>
        {/* second div  */}
        <div className="border-2 overflow-hidden border-none">
          {/* side div */}
          <div className="w-[420px] mr-[120rem] mt-[10rem]  h-[420px] bg-[#0DB760]"></div>
        </div>
        <div className="w-[420px] border-[5px] bg-transparent rounded-[2px]  border-black h-[420px] absolute top-[20.5rem] right-[32.5rem]"></div>
      </div>
      <div className="w-full  mt-[3rem] flex justify-around px-[12rem] pl-[17rem]">
        <div className="border-r-2 border-[#0DB760] flex flex-col items-baseline  pr-[3rem] pb-[1rem]">
          <h1 className="w-[96px] h-[40px] font-[600] my-[1.5rem] text-[48px] text-[#0DB760]">
            80+
          </h1>
          <p className="text-[28px] w-[218px] h-[28px] font-[400]">
            Satisfied clients
          </p>
        </div>
        <div className="border-r-2 border-[#0DB760] flex flex-col items-baseline  pr-[3rem] pb-[1rem]">
          <h1 className="w-[96px] h-[40px] font-[600] my-[1.5rem] text-[48px] text-[#0DB760]">
            200+
          </h1>
          <p className="text-[28px] w-[290px] h-[28px] font-[400]">
            Projects Completed
          </p>
        </div>
        <div className=" flex flex-col items-baseline  pr-[3rem] pb-[1rem]">
          <h1 className="w-[96px] h-[40px] font-[600] my-[1.5rem] text-[48px] text-[#0DB760]">
            99+
          </h1>
          <p className="text-[28px] w-[218px] h-[28px] font-[400]">
            Reviews given
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

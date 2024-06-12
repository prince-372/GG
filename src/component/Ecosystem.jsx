import React from "react";
import men from "../assets/image/png/menWithNewspaper.png";
import lineCircle from "../assets/image/svg/lineCircle.svg";
import horse from "../assets/image/svg/horse.svg";
import twiter from "../assets/image/svg/twiter.svg";
import taligram from "../assets/image/svg/taligram.svg";
import globe from "../assets/image/svg/globe.svg";
import newspaper from '../assets/image/svg/newspaper.svg';
import gogals from '../assets/image/svg/gogals.svg';

const Ecosystem = () => {
  return (
    <div className="bg-lineing bg-no-repeat bg-cover bg-center relative">
        <img className="absolute sm:top-[2%] top-[0%] sm:left-[7%] left-[3%] sm:w-[159px] w-[100px]" src={newspaper} alt="newspaper" />
      <img className="absolute sm:bottom-[2%] bottom-[9%] right-[2%] sm:w-[160px] w-[100px]" src={gogals} alt="gogals" />
      <div className=" container px-3 mx-auto sm:pt-[200px] pt-5 pb-[60px]">
        <div className="grid lg:grid-cols-2 lg:gap-20 grid-cols-1 items-center">
          <div className=" flex justify-center ">
            <img className=" max-w-[565px] w-full " src={men} alt="men" />
          </div>
          <div>
            <div className="flex flex-wrap justify-center lg:justify-start items-center sm:gap-[23px] gap-3">
              <a href=""><img className=" sm:w-[59px] w-[37px]" src={lineCircle} alt="lineCircle" /></a>
              <a href=""><img className=" sm:w-[79px] w-[57px]" src={horse} alt="horse" /></a>
              <a href=""><img className=" sm:w-[72px] w-[52px]" src={twiter} alt="twiter" /></a>
              <a href=""><img className=" sm:w-[75px] w-[48px]" src={taligram} alt="taligram" /></a>
              <a href=""><img className=" sm:w-[75px] w-[48px]" src={globe} alt="globe" /></a>
            </div>
            <h2 className="font-Inter font-black flex justify-center lg:justify-start sm:text-xxxl text-[40px] sm:leading-[77px] leading-[36px] text-black pt-3.5">
              ECOSYSTEM
            </h2>
            <p className="font-Inter font-normal text-base flex justify-center lg:justify-start mx-auto lg:mx-0 text-center lg:text-start text-black opacity-[80%] lg:max-w-[550px] pt-5">
              The $LHGG ecosystem is built upon the principles of inclusivity,
              humor, and innovation. Our community-driven approach empowers
              members to actively participate in governance, decision-making,
              and promotional activities. Through social media campaigns, memes,
              and creative content, we seek to amplify the message of embracing
              humor in the crypto space and challenging conventional narratives.
              Together, we aspire to foster a vibrant and engaging ecosystem
              where laughter reigns supreme.
            </p>
            <div className="flex justify-center lg:justify-start"><button className="font-Inter mt-[33px] font-semibold text-base border border-transparent hover:border hover:border-black leading-[19px] text-black rounded-[189px] py-[19px] px-8 bg-yellow relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-white hover:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">Buy $GrayGensler</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;

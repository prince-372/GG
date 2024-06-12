import React from "react";
import smallpic from "../assets/image/svg/smallPic.svg";
import { Bluetik, Commant, Downlod, Heart, Swafel } from "./Icones";
import { newsItems } from "./Helper";
import phone from "../assets/image/svg/mobile.svg";
import laptop from "../assets/image/svg/laptop.svg";

const News = () => {
  return (
    <div className="bg-lineing bg-no-repeat bg-cover bg-center sm:pt-[96px] pt-10 pb-6 relative z-10">
      <img
        className="absolute sm:top-[-2%] top-[-2%] left-[2%] md:w-[129px] w-[80px] pointer-events-none"
        src={phone}
        alt="phone"
      />
      <img
        className=" absolute sm:top-[2%] top-[-2%] right-[2%] md:w-[165px] w-[90px] pointer-events-none"
        src={laptop}
        alt="laptop"
      />
      <div className=" container max-w-[1140px] px-3 mx-auto">
        <h2 className="font-Inter font-black text-center sm:text-xxxl text-[40px] sm:leading-[77px] leading-[36px] text-black sm:pb-[96px] pb-8">
          LATEST NEWS
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="lg:max-w-[367px] border duration-300 hover:duration-300 hover:scale-95 border-black sm:pt-[26px] pt-4 sm:ps-[22px] ps-2.5 relative z-50 bg-white"
            >
              <div className="flex items-center">
                <img
                  className=" w-[80px] h-[80px]"
                  src={smallpic}
                  alt="smallpic"
                />
                <span className="ml-3.5">
                  <span className="flex gap-1">
                    <p className="font-Inter font-black text-base leading-[19px] text-black">
                      {item.author}
                    </p>
                    <Bluetik />
                  </span>
                  <p className="font-normal text-sm leading-[25px] font-Inter text-black opacity-[80%]">
                    {item.authorDescription}
                  </p>
                </span>
              </div>
              <p className="font-Inter font-normal text-base text-black opacity-[80%] pt-5">
                {item.content}
              </p>
              <div className="flex xl:gap-[57px] lg:gap-[49px] md:gap-[57px] gap-11 pt-[27px] pb-5">
                <div className="flex items-center gap-1">
                  <Commant />
                  <p className="sf-pro text-sm font-normal text-black opacity-[80%]">
                    {item.comments}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Swafel />
                  <p className="sf-pro text-sm font-normal text-black opacity-[80%]">
                    {item.shares}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Heart />
                  <p className="sf-pro text-sm font-normal text-black opacity-[80%]">
                    {item.likes}
                  </p>
                </div>
                <Downlod />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

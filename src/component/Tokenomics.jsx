import React from 'react';
import clouds from '../assets/image/png/corveTop.png';
import clouds2 from '../assets/image/png/corvebottom.png';

const Tokenomics = () => {
    return (
        <div>
            <section>
                <img className='w-full translate-y-1' src={clouds} alt="black-clouds" />
                <div className='bg-black'>
                    <div className=' container mx-auto px-3'>
                        <div className="grid lg:grid-cols-2 grid-cols-1 sm:pt-[82px] pt-5 sm:pb-14 pb-8">
                            <div className='flex flex-col'>
                                <h4 className='text-white font-Inter font-black sm:text-xxxl text-[40px] sm:leading-[77px] leading-[36px] text-center '>TOKENOMICS</h4>
                                <p className='text-white opacity-80 font-Inter font-normal sm:text-base text-sm sm:leading-[30px] leading-[22px] lg:max-w-[453px] pt-5 text-center lg:text-start mx-auto  '>
                                    Let's Hug GG ($LHGG) operates on a deflationary tokenomics model designed to incentivize selling Bitcoin. With a fixed total supply and a burn mechanism in place, each transaction contributes to reducing the circulating supply of $LHGG, thereby increasing its scarcity and value over time. Additionally, a portion of transaction fees is allocated to liquidity pools, ensuring stability and liquidity for $LHGG holders.
                                </p>
                                <div className='flex justify-center lg:-ml-16 ml-0'>
                                    <div className='max-w-[404px] sm:p-[25px_27px_54px_31px] p-[19px_9px_30px_14px] border rounded-[20px] mt-5'>
                                        <div className='flex align-center gap-3.5'>
                                            <div className='flex flex-col gap-3'>
                                                <p className='font-Inter font-normal sm:text-xl text-base sm:leading-[30px] leading-[20px] text-white'>Token Name:</p>
                                                <p className='font-Inter font-normal sm:text-xl text-base sm:leading-[30px] leading-[20px] text-white'>Token Symbol:</p>
                                                <p className='font-Inter font-normal sm:text-xl text-base sm:leading-[30px] leading-[20px] text-white'>Total Supply:</p>
                                                <p className='font-Inter font-normal sm:text-xl text-base sm:leading-[30px] leading-[20px] text-white'>Total Type:</p>
                                            </div>
                                            <div className='flex flex-col gap-3'>
                                                <p className='font-Inter font-bold sm:text-xl text-base sm:leading-[30px] leading-[20px] text-white'>Let’s Hug GG</p>
                                                <p className='font-Inter font-bold sm:text-xl text-base sm:leading-[30px] leading-[20px] text-white'>$LHGG</p>
                                                <p className='font-Inter font-bold sm:text-xl text-base sm:leading-[30px] leading-[20px] text-white'>1 Billion $LHGG</p>
                                                <p className='font-Inter font-bold sm:text-xl text-base sm:leading-[30px] leading-[20px] text-white'>Solana SPL Token</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-black  pt-3 lg:pt-0">
                                <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                                    <div className="sm:max-w-[296px] w-full bg-yellow p-[16px_22px] flex flex-col gap-2 border border-black">
                                        <p className="text-black font-Inter font-semibold text-xl leading-8 text-center">Marketing & Partnerships</p>
                                        <p className="text-black font-Inter font-semibold text-2xl leading-8 text-center">5%</p>
                                    </div>
                                    <div className="sm:max-w-[131px] w-full bg-yellow p-[16px_26px]  flex flex-col gap-2 border border-black">
                                        <p className="text-black font-semibold font-Inter text-xl leading-8 text-center">Reserve</p>
                                        <p className="text-black font-semibold font-Inter text-2xl leading-8 text-center">5%</p>
                                    </div>
                                    <div className="sm:max-w-[152px] w-full bg-yellow p-[16px_22px] flex flex-col gap-2 border border-black">
                                        <p className="text-black font-semibold font-Inter text-xl leading-8 text-center">Public Sale</p>
                                        <p className="text-black font-semibold font-Inter text-2xl leading-8 text-center">45%</p>
                                    </div>
                                    <div className="sm:max-w-[296px] w-full bg-yellow p-[16px_23px] flex flex-col gap-2 border border-black">
                                        <p className="text-black font-semibold font-Inter text-xl leading-8 text-center">Community Development</p>
                                        <p className="text-black font-semibold font-Inter text-2xl leading-8 text-center">15%</p>
                                    </div>
                                    <div className="sm:max-w-[296px] w-full bg-yellow p-[16px_60px] flex flex-col gap-2 border border-black">
                                        <p className="text-black font-semibold text-xl font-Inter leading-8 text-center">Ecosystem Fund</p>
                                        <p className="text-black font-semibold text-2xl font-Inter leading-8 text-center">10%</p>
                                    </div>
                                    <div className="sm:max-w-[296px] w-full bg-yellow p-[16px_65px] flex flex-col gap-2 border border-black">
                                        <p className="text-black font-semibold text-xl font-Inter leading-8 text-center">Team & Advisors</p>
                                        <p className="text-black font-semibold text-2xl font-Inter leading-8 text-center">20%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='w-full -translate-y-1' src={clouds2} alt="black-cloud" />
            </section>
        </div>
    );
};

export default Tokenomics;
import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image';
import { portfolios } from '@/constants';
import PortfolioSection from '@/components/PortfolioSection';

export const metadata: Metadata = {
    title:"Portfolio - Iliass Benmessaoud",
};
const page = () => {
  return (
    <>
      <section className="max-width section-padding ">
        <div className="box text-center flex flex-col items-center gap-3">
          <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5 '>
            <Image src={"/icons/stars.svg"} alt='icon' width={35} height={35}/>
          </div>
          <h2 className='text-gray-700'>My Creative Portfolio</h2>
          <p className='text-grey-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt fuga sit adipisci totam! Architecto quisquam sint tempora commodi sed, eius inventore officiis perferendis voluptatum aperiam saepe ut excepturi cumque vel?</p>

        </div>
      </section>
      <PortfolioSection data={portfolios.slice(3).concat(portfolios.slice(0,3))} title={"Projects Done in 2024"} />
      <PortfolioSection data={portfolios.slice(6).concat(portfolios.slice(0,6))} title={"Projects Done in 2023"} />
      <PortfolioSection data={portfolios} title={"Projects Done in 2022"} />

      







    </>
  )
}

export default page
"use client"
import { portfolios } from '@/constants'
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const PortfolioItem = ({
    portfolio,
    } : {
        portfolio: (typeof portfolios)[0];
    }) => { 
        const [currentImg, setCurrentImg] = useState(portfolio.images[0])
  return (
    <div className='box'>
        <h4 className='mb-5'>{portfolio.title}</h4>
        <div className='relative w-full h-80 rounded-lg overflow-hidden group cursor-pointer mb-5'>
            <Image src={currentImg} alt={portfolio.title} fill className='object-cover ' />
            <div className='bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <div className='w-16 h-16 flex items-center justify-center bg-peach-700 border border-peach-400 p-3 text-grey rounded-lg'>
                    <ArrowUpRight />
                </div>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-3'>
            {portfolio.images.map((image, index) =>(
                <div key={index} className='relative h-20 w-full rounded-lg overflow-hidden group cursor-pointer'
                onClick={()=> setCurrentImg(image) }>
                    <Image src={image} alt={portfolio.title} fill className='object-cover'/>
                    <div className={`bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full opacity-0 
                     transition-opacity duration-300
                    ${currentImg !== image ? "opacity-10" : "opacity-0"}`}>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PortfolioItem
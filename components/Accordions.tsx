"use client"
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

interface AccordionData{
  question: string;
  answer: string;
}
const Accordions = ({data} : {data:AccordionData[] }) => {
  const [currentActive, setCurrentActive] = useState<number | null>(0);
  return (
    <div className='flex flex-col gap-3 '>
      {
        data.map((item, index) => (
            <div 
            key={index}
            className='bg-peach-600 px-5 rounded-lg'
            >
              <div className='flex items-center justify-between cursor-pointer py-5'
              onClick={()=> setCurrentActive(index)}>
                  <h6 className='text-grey-700'>{item.question}</h6>
                  <div className={`transition-transform duration-300 ${currentActive===index ? "rotate-45" : ""}`}>
                    <Plus size={16}/>
                  </div>
              </div>
              <div className={`text-grey-600 transition-all duration-300 ${
                currentActive!== index 
                  ? "max-h-0 opacity-0" 
                  :"max-h-[1000px] opacity-100 pb-5"
                }`}
                >
                <p>{item.answer}</p>
              </div>

            </div>
        ))
      }
    </div>
  )
}

export default Accordions
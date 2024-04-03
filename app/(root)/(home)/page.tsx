/* eslint-disable react/no-unescaped-entities */
import FaqSection from '@/components/FaqSection'
import PortfolioItem from '@/components/PortfolioItem'
import SectionHeading from '@/components/SectionHeading'
import TestimonialSection from '@/components/TestimonialSection'
import { benefits, portfolios, skills } from '@/constants'
import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <section className='flex items-center max-width flex-col-reverse tablet:flex-row mb-10 mt-10'>
            <div className='tablet:w-2/3 mt-10 tablet:mt-0'>
                <div className='flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left'>
                    <p className='px-4 py-2 text-xl bg-peach-500 text-gray-600 w-max rounded'>Hello There 🌐🚀</p>
                    <h1 className='text-grey'>Iliass Ben. welcome's you</h1>
                    <p className='text-grey-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Voluptates nobis assumenda nihil maiores praesentium dolorem
                    enim accusantium, dicta voluptatum iusto a voluptatibus, 
                    repudiandae corporis illum suscipit quaerat quod deserunt explicabo!
                    </p>
                </div>
                <div className='flex gap-5 mt-10 justify-center tablet:justify-start'>
                    <Link href={'/contact'} className='btn btn-primary'>
                        <Phone/>
                        Contact now
                    </Link>
                    <Link href={'/contact'} className='btn '>
                        View Portfolio
                        <ArrowRight size={16}/>
                    </Link>
                </div>
                <div className='bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex '>
                    <div>
                        <h3 className='text-grey-700'>45 <span className='text-purple'>+</span></h3>
                        <p className='text-grey-600'>Projects Completed</p>
                    </div>
                    <div>
                        <h3 className='text-grey-700'>30 <span className='text-purple'>+</span></h3>
                        <p className='text-grey-600'>Happy Customers</p>
                    </div>
                    <div>
                        <h3 className='text-grey-700'>3 <span className='text-purple'>+</span></h3>
                        <p className='text-grey-600'>Years of experience</p>
                    </div>
                </div>
                <div className='mt-16 grid grid-cols-2 gap-3 tablet:hidden '>
                    <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
                        <h3 className='text-grey-700'>45 <span className='text-purple'>+</span></h3>
                        <p className='text-grey-600'>Projects Completed</p>
                    </div>
                    <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
                        <h3 className='text-grey-700'>30 <span className='text-purple'>+</span></h3>
                        <p className='text-grey-600'>Happy Customers</p>
                    </div>
                    <div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
                        <h3 className='text-grey-700'>3 <span className='text-purple'>+</span></h3>
                        <p className='text-grey-600'>Years of experience</p>
                    </div>
                </div>

            </div>
            <div className='relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden'>
                <Image 
                    alt='IliassProfile'  
                    src={"/images/Portfolio-ib.jpg"} 
                    fill 
                    className='object-cover'/>
            </div>
        </section>
        <section className='max-width section-padding'>
            <SectionHeading
                title="Creative Skills"
                subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quos consequuntur provident repellendus consequatur unde 
                at porro quis suscipit deserunt omnis, eaque, iure mollitia 
                cumque aut tempore. Ex perferendis quo dolore?"
            />
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 tablet:gap-6'>
                {skills.map((skill, index) => (
                    <div key={index} className='box flex flex-col items-center gap-5 '>
                        <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2 '>
                            <Image 
                                src={skill.icon} 
                                alt={skill.name} 
                                width={35} 
                                height={35}
                            />
                        </div>
                        <div className='text-center'>
                            <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                            <p className="text-grey-600">{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <section className='max-width section-padding'>
            <SectionHeading title="Benefits" subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quos consequuntur provident repellendus consequatur unde 
                at porro quis suscipit deserunt omnis, eaque, iure mollitia 
                cumque aut tempore. Ex perferendis quo dolore?"/>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6'>
                {benefits.slice(0, 2).map((benefit, index)=>(
                    <div key={index} className='box'>
                        <h5 className='text-grey-700 mb-2'>{benefit.name}</h5>
                        <p className='text-grey-600'>{benefit.description}</p>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 tablet:gap-6'>
                {benefits.slice(2).map((benefit, index)=>(
                    <div key={index} className='box'>
                        <h5 className='text-grey-700 mb-2'>{benefit.name}</h5>
                        <p className='text-grey-600'>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
        <section className="section-padding max-width">
            <SectionHeading 
                title="My Works"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe obcaecati nam, voluptatem voluptates qui dicta laboriosam quo expedita porro unde dolor commodi magnam, maiores provident veritatis iusto id possimus?"
                />
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 tablet:gap-6'>
               {portfolios.slice(0, 3).map((portfolio, index) =>(
                <PortfolioItem key={index} portfolio={portfolio}/>
               ))} 
            </div>
            <Link href={"/portfolio"} className='btn btn-primary mx-auto w-max mt-10'>
            View All projects 
            </Link>
        </section>

        <TestimonialSection />
        <FaqSection/>
        
    </>
  )
}

export default page
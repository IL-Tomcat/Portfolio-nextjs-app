import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const layout = ({children} :{children: React.ReactNode}) => {
  return <>
        <Header/>
        <main className='min-h-screen'>{children}</main>
        <Footer/>
    </>
}

export default layout
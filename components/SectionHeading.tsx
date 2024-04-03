import React from 'react'

const SectionHeading = ({
    title, 
    subtitle
    } : {
    title:string,
    subtitle:string
    }) => {
    return (
        <div className='max-w-xl mx-auto mb-16 text-center'>
            <h2 className='text-grey-700 mb-2'>{title}</h2>
            <p className='text-grey-600'>{subtitle}</p>
        </div>
    )
}

export default SectionHeading
import Annaouncement from '@/components/Annaouncement'
import BigCalendar from '@/components/BigCalander'

import React from 'react'

const ParentPage = () => {
  return ( 
    <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      {/* Left */}
      <div className=' w-full xl:w-2/3'> 
      
      <div className='h-full bg-white p-4 rounded-md'>
    <h1 className='text-xl font-extrabold'>Schedule (abubeker oumer) </h1>
    <BigCalendar/>
      </div>
      </div>
      {/* Right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8' >
   
      <Annaouncement/>
      </div>
    </div>
  )
}

export default ParentPage

"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
// Temporary
const events=[
    {
        id:1,
        time:"12:00 PM - 2:00 PM",
        title:"abubeker ",
        description:"when i finlish this project i will start another one"
    },
    {
        id:2,
          time:"12:00 PM - 2:00 PM",
        title:"abubeker",
        description:"when i finlish this project i will start another one"
    },
{
        id:3,
        time:"12:00 PM - 2:00 PM",
        title:"abubeker ",
        description:"when i finlish this project i will start another one"
    },
]


const EventCalander = () => {
      const [value, onChange] = useState<Value>(new Date());
  return (
    <div className=''>
       <Calendar onChange={onChange} value={value} />
       <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20}/>

       </div>
       <div className='flex flex-col gap-4'>
        {events.map(e=>(
            <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamasky even:border-t-lamapurple' key={e.id}>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-'>{e.title}</h1>
                <span>{e.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{e.description}</p>

        </div>))}
       </div>
    </div>
  )
}

export default EventCalander

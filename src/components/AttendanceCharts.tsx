"use client"
import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 50,
   
  },
  {
    name: 'Tue',
    present: 70,
    absent: 58,
    
  },
  {
    name: 'Wed',
    present: 66,
    absent: 75,
  
  },
  {
    name: 'Thur',
    present: 67,
    absent: 45,
    
  },
  {
    name: 'Fri',
    present: 78,
    absent: 48,
    
  },
 
];

// #endregion

const AttendanceCharts = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
       <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      barSize={20}
     
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
      <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
      <YAxis width="auto" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
      <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
      <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
      <Bar dataKey="absent" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]} />
      <Bar dataKey="present" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]}  />
    </BarChart>
    </div>
  )
}

export default AttendanceCharts

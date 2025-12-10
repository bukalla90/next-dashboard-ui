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
        <div className=''>
        <h1>Attendance</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
       <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      barSize={20}
     
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
    </div>
  )
}

export default AttendanceCharts

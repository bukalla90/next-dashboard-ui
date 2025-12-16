"use client"
import Image from 'next/image';
import React from 'react'
import { Pie, PieChart } from 'recharts';

// #region Sample data
const data = [
  { name: 'Group A', value: 92, fill:'#C3EBFA'},
  { name: 'Group B', value: 8,fill:'#FAE27C' },
  
];

// #endregion


const Performance = () => {
  return (
    <div className='bg-white p-4 rounded-md h-80 relative'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-extrabold'>Performance</h1>
            <Image src="/moreDark.png" alt='' width={16} height={16}/>

        </div>
     <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="70%"
        // innerRadius={70}
        innerRadius="55%"
        fill="#8884d8"
      
        
      />
    </PieChart> 
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
    
    <h1 className='text-3xl font-extrabold'>9.2</h1>
    <p className='text-xs text-gray-300'>of 10 max LTS</p>
    
    </div>
    <div>
        <h2 className='font-medium absolute bottom-16 left-0 right-0 m-auto text-center'>1st Semister -2nd Semister</h2>
    </div>
    </div>
  )
}

export default Performance

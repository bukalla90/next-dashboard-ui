"use client"
import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Jan',
    income: 4000,
    expence: 2400,

  },
  {
    name: 'Feb',
    income: 3000,
    expence: 1398,
   
  },
  {
    name: 'Mar',
    income: 2000,
    expence: 9800,
 
  },
  {
    name: 'Apr',
    income: 2780,
    expence: 3908,
    
  },
  {
    name: 'May',
    income: 1890,
    expence: 4800,
   
  },
  {
    name: 'Jun',
    income: 2390,
    expence: 3800,
  
  },
  {
    name: 'Jul',
    income: 3490,
    expence: 4300,
    
  },
   {
    name: 'Aug',
    income: 3490,
    expence: 4300,
   
  },
   {
    name: 'Sep',
    income: 3490,
    expence: 4300,
 
  },
   {
    name: 'Oct',
    income: 3490,
    expence: 4300,
   
  },
   {
    name: 'Nov',
    income: 3490,
    expence: 4300,
  
  },
   {
    name: 'Dec',
    income: 3490,
    expence: 4300,
  
  },
];
// #endregion
const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full p-4'>
      <div className='flex justify-between items-center'>
              <h1 className='text-lg font-semibold'>Finance</h1>
              <Image src="/moreDark.png" alt='' width={20} height={20}/>
              </div>
               <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
      <XAxis dataKey="name" tickMargin={10} axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
      <YAxis width="auto" tickMargin={20} axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}  />
      <Tooltip />
      <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}} />
      <Line type="monotone" strokeWidth={5} dataKey="expence" stroke="#C3EBFA"  />
      <Line type="monotone" strokeWidth={5} dataKey="income" stroke="#CFCEFF" />
    </LineChart>
    </div>
  )
}

export default FinanceChart

"use client"
import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar } from 'recharts';

const data = [
  {
    name: 'Totals',
    count: 106,
    fill:"white"
  },
  {
    name: 'Girls',
    count: 50,
    fill:"#FAE27C"
  },
  {
    name: 'Boys',
    count: 45,
    fill:"#CFEBFA"
  },
];

function CounterChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* Chart container */}
      <div className="relative w-full h-[280px] flex justify-center items-center">
        <RadialBarChart
          width={260}
          height={260}
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="95%"     // ▶ bigger circle, but fits
          barSize={28}          // ▶ thicker bars
          data={data}
        >
          <RadialBar 
            dataKey="count"
            background
          />
        </RadialBarChart>
        <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>

      {/* Bottom stats */}
      <div className="flex justify-center gap-12 mt-2">
        {/* Boys */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-lamasky rounded-full"></div>
          <div>
            <h1 className="font-bold text-sm">1,234</h1>
            <h2 className="text-xs text-gray-500">Boys (55%)</h2>
          </div>
        </div>

        {/* Girls */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-lamayellow rounded-full"></div>
          <div>
            <h1 className="font-bold text-sm">1,010</h1>
            <h2 className="text-xs text-gray-500">Girls (45%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterChart;

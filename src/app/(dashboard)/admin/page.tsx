import AttendanceCharts from '@/components/AttendanceCharts'
import CounterChart from '@/components/CounterChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* left */}
      <div className=' h-screen w-full lg:w-2/3 flex flex-col gap-8'>
      {/* UserCard*/}
      <div className='flex gap-4 justify-between flex-wrap '>
      <UserCard type='studnet'/>
      <UserCard type='teacher'/>
      <UserCard type='parent'/>
      <UserCard type='staff'/>
      </div>
      {/* middle Charts */}
      <div className='flex gap-4 flex-col lg:flex-row '>
        {/* Counter Chart */}
        <div className='w-full lg:w-1/3 h-[450px]'>  <CounterChart/></div>
        {/* Attendance Charts */}
        <div className='w-full lg:w-2/3 h-[450px]'>
        <AttendanceCharts/>
        </div>
      
      </div>
      {/* Bottom charts */}
      <div></div>
      
      </div>
      {/* right */}
      <div className=' h-screen w-full lg:w-1/3'>r</div>
    </div>
  )
}

export default AdminPage

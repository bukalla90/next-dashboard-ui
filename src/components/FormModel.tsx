"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const FormModel = ({table,type,data,id}:{
    table:"teacher" |"student" | "parent" | "subject" | "class" |"lesson" | "exam" | "assignment" |"result" |"attendance" | "event" | "announcement";
    type:"create" | "delete" | "update";
    data?:any;
    id:number
}) => {
    const size=type==="create"? "w-8 h-8":"w-7 h-7";
    const bgcolor=type==="create"? "bg-lamayellow":type==="update"?"bg-lamasky":"bg-lamapurple";
    const [open,setOpen]=useState(false);
  return (
    <>
      <button onClick={()=>setOpen(true)} className={`${size} flex items-center justify-center rounded-full ${bgcolor}`}>
        <Image src={`/${type}.png`} alt='' width={16} height={16}/>
      </button>
      {open && <div className='w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-between'>
        <div className='bg-white rounded-md relative p-4 text-center'>hello

            <div className='absolute top-4 right-4 cursor-pointer'> 
          <Image src="/close.png" alt='' width={14} height={14}/>
        
        </div>
        </div>
      
        
        </div>}
    </>
  )
}

export default FormModel

"use client"
import Image from 'next/image';
import React from 'react'

const FormModel = ({table,type,data,id}:{
    table:"teacher" |"student" | "parent" | "subject" | "class" |"lesson" | "exam" | "assignment" |"result" |"attendance" | "event" | "announcement";
    type:"create" | "delete" | "update";
    data?:any;
    id:number
}) => {
    const size=type==="create"? "w-8 h-8":"w-7 h-7";
    const bgcolor=type==="create"? "bg-lamayellow":type==="update"?"bg-lamasky":"bg-lamapurple";
  return (
    <>
      <button className={`${size} flex items-center justify-center rounded-full ${bgcolor}`}>
        <Image src={`/${type}.png`} alt='' width={16} height={16}/>
      </button>
    </>
  )
}

export default FormModel

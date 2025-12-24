import React from 'react'
import { FieldError } from 'react-hook-form';
import { useForm } from 'react-hook-form';
type InputfieldProps={
    label:string;
    type?:string;
    register:any;
    name:string;
    defaultValue?:string;
    error?:FieldError;
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>;
   
}
const Inputfields = ({label,type="text",register,name,defaultValue,error,inputProps}:InputfieldProps) => {
  return (
  
<div className="flex flex-col gap-2 w-full md:w-1/4">

  <label htmlFor="" className="text-xs text-gray-500">{label}</label>
<input  {...inputProps} type={type} {...register(name)} className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" defaultValue={defaultValue} />
{error?.message && <p className="text-xs text-red-400">{error?.message.toString()}</p>}

</div>
   
  )
}

export default Inputfields

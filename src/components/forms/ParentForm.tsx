"use client"
import React from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'
import Inputfields from "../Inputfields";
import { error } from "console";
import Image from "next/image";
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be 3 characters" })
    .max(20, { message: "username must be at most 20 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
  firstname: z.string().min(1, { message: "firt name is required" }),
  lastname: z.string().min(1, { message: "lastname is required" }),
  phone: z.number().min(1, { message: "phone is required" }),
  adress: z.string().min(1, { message: "adress is required" }).optional(),
  birthday: z.date().min(1, { message: "birthday  is required" }),
  street: z.string().min(1, { message: "streeent is required" }).optional(),
  bloodtype: z.string().min(1, { message: "bloodtype is required" }),
  sex:z.enum(["male","female"],{message:"sex is required"}),
  img:z.instanceof(File,{message:"image is required"})
});
type Inputs=z.infer<typeof schema>

const ParentForm = ({
  type,
  data,
}: {
  type: "create" | "delete" | "update";
  data?: any;
}) => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit=handleSubmit(data=>{
    console.log(data)
  })
  return <form onSubmit={onSubmit} className="felx flex-col gap-8">
<h1 className="text-xl font-semibold">Create a new Parent</h1>
<span className="text-xs text-gray-400 font-medium">Authentication Information</span>
<div className="flex justify-between flex-wrap gap-4">

  <Inputfields 
label="Username" 
name="username"
 defaultValue={data?.username} 
 register={register} 
 error={errors?.username}/>
 <Inputfields 
label="Email" 
name="email"
type="email"
 defaultValue={data?.email} 
 register={register} 
 error={errors?.email}/>

 <Inputfields 
label="Password" 
name="password"
type="password"
 defaultValue={data?.password} 
 register={register} 
 error={errors?.password}/>
 <Inputfields 
label="Firstname" 
name="firstname"
 defaultValue={data?.firstname} 
 register={register} 
 error={errors?.firstname}/>
 <Inputfields 
label="Lastname" 
name="lastname"
type="text"
 defaultValue={data?.lastname} 
 register={register} 
 error={errors?.lastname}/>

 <Inputfields 
label="Phone" 
name="phone"
type="number"
 defaultValue={data?.phone} 
 register={register} 
 error={errors?.phone}/>
  <Inputfields 
label="Birthday" 
name="birthday"
type="date"
 defaultValue={data?.birthday} 
 register={register} 
 error={errors?.birthday}/>
 <Inputfields 
label="Adress" 
name="adress"
 defaultValue={data?.adress} 
 register={register} 
 error={errors?.adress}/>

 <Inputfields 
label="BloodType" 
name="bloodtype"
type="text"
 defaultValue={data?.bloodtype} 
 register={register} 
 error={errors?.bloodtype}/>


<div className="flex flex-col gap-2 w-full md:w-1/4">
  <label className="text-xs text-gray-500">Sex</label>

  <select
    className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
    {...register("sex")}
    defaultValue={data?.sex || ""}
  >
    <option value="" disabled>
      Select sex
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>

  {errors.sex?.message && (
    <p className="text-xs text-blue-400">
      {errors.sex.message}
    </p>
  )}
</div>
<div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
  <label className="text-xs text-gray-500" htmlFor="img">

  <Image src="/upload.png" alt="" width={28} height={28}/>
  <span>upload a photo</span>
  </label>
  <input id="img" type="file" {...register("img")} className="hidden"/>

  {errors.img?.message && (
    <p className="text-xs text-blue-400">
      {errors.img.message}
    </p>
  )}
</div>
</div>




<button className="bg-blue-400 text-white p-2 rounded-md mt-4 w-full">{type==="create"?"create":"update"}</button>

  </form>;
};

export default ParentForm;

import type { Prisma } from "@/generated/prisma";

import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Class, Subject, Teacher } from "@/generated/prisma";
import { role, teachersData } from "@/lib/data";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Item_per_page } from "@/lib/settings";
type TeacherList=Teacher & {subjects:Subject[]} & {classes:Class[]}

const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherid",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "Subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "Classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "Phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "Address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
 const renderRow = (item: TeacherList) => {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamapurplelight">
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.img || "/avatar.png"}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>

      <td className="hidden md:table-cell">{item.username}</td>
     <td className="hidden md:table-cell">{item.subjects.map(subject=>subject.name).join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.map(classItem=>classItem.name).join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamasky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
{ role==="admin" &&
          // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamapurple">
          //   <Image src="/delete.png" alt="" width={16} height={16} />
          // </button>
           <FormModel table="teacher" type="delete" id={item.id} />
          
          }
        </div>
      </td>
    </tr>
  );
};

const TeacherListPage = async({searchParams}:{searchParams:{[key:string]:string} | undefined}) => {
console.log(searchParams)
const {page,...queryParams}=searchParams ||{};
const p= page ? parseInt(page) : 1

// Url params conditions
 const query:Prisma.TeacherWhereInput={};

 if(queryParams){
  for(const [key,value] of Object.entries(queryParams)){
    if(value !==undefined){
      switch(key){
        case "classId":
          query.lessons={
            some:{
              id:parseInt(value)
            }
          }
          break;
          case "search":
            query.name={
              contains:value,
              mode:"insensitive"}
      }
    }
 }



const [data,count] = await prisma.$transaction([
  prisma.teacher.findMany({
  where:query,
   include:{
    subjects:true,
    classes:true,
  },
  take:Item_per_page,
  skip:Item_per_page*(p-1),
}),
prisma.teacher.count(),

])



  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamayellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamayellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
           {role ==="admin" && 
           
          //  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamayellow">
          //     <Image src="/plus.png" alt="" width={14} height={14} />
          //   </button>
            <FormModel table="teacher" type="create"  />
            }
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={data} />

      {/* Pagination */}
      <Pagination page={p} count={count} />
    </div>
  );
}};

export default TeacherListPage;

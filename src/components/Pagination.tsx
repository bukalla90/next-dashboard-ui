 "use client"
 import { Item_per_page } from '@/lib/settings';
import React from 'react'
import { useRouter } from 'next/navigation';

const Pagination = ({count,page}:{count:number;page:number}) => {
  const router=useRouter();
  const changePage=(newPage:number)=>{
    const params=new URLSearchParams(window.location.search);
    params.set("page",newPage.toString());
    router.push(`${window.location.pathname}?${params.toString()}`)
  }
  const hasPrev=Item_per_page*(page-1)>0;
  const hasNext=Item_per_page*(page-1) + Item_per_page < count;
  return (
    <div className='p-4 flex items-center justify-between text-gray-'>
     
      <button disabled={!hasPrev} className='py-4 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed' onClick={() => changePage(page - 1)}>prev</button>
      <div className='flex items-center gap-2 text-sm'>
        {Array.from({length:Math.ceil(count/Item_per_page)},(_,index)=>{
          const pageIndex=index+1;
          return(
            <button key={pageIndex} className={`px-2 rounded-sm ${page === pageIndex ? "bg-lamasky" : ""}`}onClick={() => changePage(pageIndex)}
>{pageIndex}</button>
          
          )
        }
      
      )}
         

      </div>
    <button disabled={!hasNext} className='py-4 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed' onClick={() => changePage(page + 1)}>next</button>
   
    </div>

  )
}

export default Pagination
    
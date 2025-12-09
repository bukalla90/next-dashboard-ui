 

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
<div className="h-screen flex">
  {/* left */}
<div className="w-[14%] md:w[8%] lg:w-[16%] xl:w-[14%] bg-red-300">l</div>
{/* right */}
<div className="w-[86%] md:w[92%]  md:bg-red-500 lg:w-[84%] xl:w-[82%] bg-slate-700">r</div>
</div>
    
  );
}

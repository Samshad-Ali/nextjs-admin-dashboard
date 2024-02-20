"use client";
import { data } from "@/utils/sidebarData";
import Link from "next/link";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

import React, { useState } from "react";
import { useRouter,usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  const [isIcon, setIsIcon] = useState(false);
  return (
    <div className=" relative sm:border-r p-2 sm:p-4 min-h-screen bg-secondaryClr text-white flex flex-col gap-8 ">
      <span
      onClick={()=>{setIsIcon(!isIcon)}}
       className="p-1 hidden sm:block rounded-full absolute top-5 bg-primaryClr cursor-pointer -right-3 border w-fit ">
        {
          isIcon? <RiArrowLeftSFill size={15} /> : <RiArrowRightSFill size={15} />
        }
      </span>
      {data.map((item) => {
        return (
          <div className="" key={item.title}>
            <li className= {` transition-all hidden sm:block uppercase list-none text-[10px] font-semibold mb-2 `}>{item.title}</li>
            {item.datas.map((item) => {
              return (
                <Link
                  href={item.url}
                  key={item.title}
                  className={`${isIcon?'px-4':'px-2'} ${pathname===item.url && 'bg-black/50'} mb-1 flex gap-2 items-center capitalize rounded-sm hover:bg-black/50 transition-all text-sm sm:text-base p-2 `}
                >
                  {item.icon}
                  <span className={`${isIcon?'block':'hidden'}`}>{item.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

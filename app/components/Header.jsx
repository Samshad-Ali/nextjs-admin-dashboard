"use client";
import { data } from "@/utils/social";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";

const Header = () => {
  const { status } = useSession();
  return (
    <div className="flex justify-between items-center h-16 text-white sticky shadow-md shadow-black/20 z-10 bg-secondaryClr top-0 p-2 sm:p-4">
      <h1 className="text-lg sm:text-xl font-bold flex items-center gap-2">
        <BiSolidDashboard />
        Sam admin.
      </h1>
      <div className="flex gap-4 flex-row-reverse items-center">
        <button
          className="hover:bg-secondaryClr hover:border hover:text-white bg-white duration-200 w-fit text-secondaryClr py-2 px-4 rounded-sm text-sm font-semibold"
          onClick={() => {
            status === "authenticated" ? signOut() : signIn("google");
          }}
        >
          {status === "authenticated" ? "Logout" : "Login"}
        </button>
        <div className="hidden sm:flex  gap-2 justify-center items-center p-4 text-xl">
          {data.map((item) => {
            return (
              <a
                className=" p-1 hover:scale-125 duration-150 hover:text-white rounded-sm"
                key={item.title}
                target="_blank"
                href={item.url}
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;

'use client';
import { useRouter } from "next/navigation";
import HomePage from "./components/HomePage";
import { useSession } from "next-auth/react";
import { routes } from "@/utils/route";
import Loading from "./components/Loading";
import React ,{useEffect} from 'react'
export default function Home() {
  const {status} = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(status!=='authenticated'){
      router.push(routes.unAuth)
    }
  },[])
  if(status==='loading') return <Loading/>
  return (
   <div className=" p-2 sm:p-4">
    <HomePage/>
   </div>
  );
}

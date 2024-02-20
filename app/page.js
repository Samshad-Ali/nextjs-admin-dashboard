'use client';
import { selecter } from "@/lib/utils/reduxUtils";
import HomePage from "./components/HomePage";
import { useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/route";
import Loading from "./components/Loading";
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

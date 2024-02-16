'use client';
import { selecter } from "@/lib/utils/reduxUtils";
import Image from "next/image";
import {} from 'react-redux'
export default function Home() {
  const message = selecter(state=>state.dashboardReducer.message)
  return (
   <main>
    hello
    {
      message
    }
   </main>
  );
}

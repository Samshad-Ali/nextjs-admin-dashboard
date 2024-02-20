'use client'
import React, { useEffect } from 'react'
import VisitorPage from '../components/VisitorPage'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { routes } from '@/utils/route';

const Page = () => {
  const {status} = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(status!=='authenticated'){
      router.push(routes.unAuth)
    }
  },[])
  return (
    <div className='p-2 sm:p-4'>
      <VisitorPage/>
    </div>
  )
}

export default Page
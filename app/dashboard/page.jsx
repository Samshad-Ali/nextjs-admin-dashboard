'use client'
import React, { useEffect } from 'react'
import HomePage from '../components/HomePage'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { routes } from '@/utils/route';
import Loading from '../components/Loading';

const Page = () => {
  const {status} = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(status!=='authenticated'){
      router.push(routes.unAuth)
    }
  },[])
  if(status==='loading') return <Loading/>
  return (
    <div className='p-2 sm:p-4'>
        <HomePage/>
    </div>
  )
}

export default Page
'use client'
import Loading from '@/app/components/Loading';
import useWrapper from '@/hooks/useWrapper'
import React from 'react'

const Wrapper = ({children}) => {
   const {status} =  useWrapper();
    if(status==='loading') return <Loading/>
  return(
    <>
    {children}
    </>
  )
}

export default Wrapper
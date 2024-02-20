'use client'
import React, { useEffect } from 'react'
import ProductPage from '../components/ProductPage'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { routes } from '@/utils/route';
import { dispatchAction, selecter } from '@/lib/utils/reduxUtils';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { setProducts, setRefresh } from '@/lib/slices/slice';
const Page = () => {
  const {status} = useSession();
  const router = useRouter();
  const dispatch = dispatchAction();
  const refresh = selecter(state=>state.dashboardReducer.refresh);
  const isAddCartOpen = selecter(state=>state.dashboardReducer.isAddCartOpen);
  useEffect(()=>{
    if(status!=='authenticated'){
      router.push(routes.unAuth)
    }
  },[]);
  useEffect(()=>{
    axios.get('/api/products').then((res)=>{
      dispatch(setProducts(res?.data?.data))
    }).catch((err)=>{
      return toast.error(err)
    })
  },[refresh,isAddCartOpen])
  return (
    <div className='p-2 sm:p-4'>
      <ProductPage/>
    </div>
  )
}

export default Page
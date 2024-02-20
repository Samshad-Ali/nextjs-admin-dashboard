'use client'
import React from 'react'
import AddItemLayout from './AddItemLayout';
import { dispatchAction, selecter } from '@/lib/utils/reduxUtils';
import { setIsAddCart } from '@/lib/slices/slice';

const VisitorPage = () => {
    const dispatch = dispatchAction();
    const isAddCartOpen = selecter(state=>state.dashboardReducer.isAddCartOpen);
  return (
    <div className="text-white flex flex-col relative">
    {
     isAddCartOpen  && <AddItemLayout
      />
    }
    <div className="flex gap-4  justify-between items-center">
      <h1 className="text-lg sm:text-2xl font-semibold">Visitors</h1>
      <button className="px-3 p-2 text-xs sm:text-sm font-semibold bg-white text-secondaryClr rounded-sm"
      onClick={()=>{dispatch(setIsAddCart(true))}}
      >
        Add User
      </button>
    </div>
  </div>
  )
}

export default VisitorPage
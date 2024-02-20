import React from 'react'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { dispatchAction } from '@/lib/utils/reduxUtils';
import { setRefresh } from '@/lib/slices/slice';
const CellComponent = ({row}) => {
    const dispatch = dispatchAction();
    const deleteHandler=async(row)=>{
       try {
        const productId= row?.original?._id;
        const response = await axios.delete(`/api/deleteproduct/${productId}`)
            dispatch(setRefresh(true));
            return toast.success(response?.data?.message);
       } catch (error) {
        return toast.error(error)
       }finally{
        setTimeout(() => {
            
            dispatch(setRefresh(false))
        }, 2000);
       }
}
  return (
    <div className='text-red-600 text-lg cursor-pointer'
    onClick={()=>{deleteHandler(row)}}
    >
        <MdDelete/>
    </div>
  )
}

export default CellComponent
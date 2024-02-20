'use client'
import React from "react";
import { IoClose } from "react-icons/io5";
import InputField from "./InputField";
import Form from "./Form";
import { dispatchAction } from "@/lib/utils/reduxUtils";
import { setIsAddCart } from "@/lib/slices/slice";

const AddItemLayout = () => {
  const dispatch = dispatchAction();
  return (
    <div className=" rounded-sm flex flex-col gap-6 bg-secondaryClr text-white absolute top-14 left-3 sm:top-20 sm:left-[35%] p-2 sm:p-4">
      <span
      onClick={()=>{dispatch(setIsAddCart(false))}}
      className="self-end border border-white rounded-full p-1 cursor-pointer">
        <IoClose size={10} />
      </span>
      <div className="">
        <Form />
      </div>
    </div>
  );
};

export default AddItemLayout;

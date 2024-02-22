"use client";
import React from "react";
import InputField from "./InputField";
import { deviceMapper, productOptionData } from "@/utils/data";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

import { useForm } from "react-hook-form";
import axios from "axios";
import { dispatchAction } from "@/lib/utils/reduxUtils";
import { setIsAddCart } from "@/lib/slices/slice";
import { productSchema, visitorSchema } from "@/utils/yupSchema";
import { usePathname } from "next/navigation";
const Form = () => {
  const dispatch = dispatchAction();
  const pathname = usePathname();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      pathname === "/visitors" ? visitorSchema : productSchema
    ),
  });
  const onSubmit = async (data) => {
    try {
      if (pathname === "/visitors") {
        let extractData = data;
        const response = await axios.post("/api/addvisitor", { extractData });
        toast.success(response?.data?.message);
        dispatch(setIsAddCart(false));
      } else {
        const extractData = data;
        const response = await axios.post("/api/addproduct", { extractData });
        toast.success(response?.data?.message);
        dispatch(setIsAddCart(false));
      }
    } catch (error) {
      return toast.error(response?.data?.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 sm:gap-4"
    >
      {pathname === "/visitors" ? (
        <>
          <InputField
            type="nubmer"
            placeholder="Enter no. of Visitors"
            name="visitors"
            register={register}
            errors={errors}
          />
          <InputField
            type="number"
            placeholder="Enter no. of premium user"
            name="premiumUsers"
            register={register}
            errors={errors}
          />
          <InputField
            type="text"
            placeholder="Enter location of visitor"
            name="location"
            register={register}
            errors={errors}
          />
          <div className=" rounded-sm bg-primaryClr p-1 relative border mt-2">
            <label className="absolute -top-2 text-xs bg-primaryClr px-2 rounded-lg">
              Device
            </label>
            <select
              name="device"
              {...register("device")}
              className="outline-none p-1 bg-primaryClr w-full"
            >
              <option value="">Select</option>
              {deviceMapper.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            {errors["device"] && (
              <span className="text-xs text-red-500">
                {errors["device"].message}
              </span>
            )}
          </div>
          <div className=" rounded-sm bg-primaryClr p-1 relative border mt-2">
            <label className="absolute -top-2 text-xs bg-primaryClr px-2 rounded-lg">
              Month
            </label>
            <select
              name="month"
              {...register("month")}
              className="outline-none p-1 bg-primaryClr w-full"
            >
              <option value="">Select</option>
              {productOptionData.map((item) => {
                return (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            {errors["month"] && (
              <span className="text-xs text-red-500">
                {errors["month"].message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="px-4 p-2 bg-white text-secondaryClr font-bold text-sm hover:bg-white/90"
          >
            Add
          </button>
        </>
      ) : (
        <>
          <InputField
            type="text"
            placeholder="Enter product name"
            name="name"
            register={register}
            errors={errors}
          />
          <InputField
            type="number"
            placeholder="Enter no. of visitors"
            name="visitors"
            register={register}
            errors={errors}
          />
          <InputField
            type="number"
            placeholder="Enter product price"
            name="price"
            register={register}
            errors={errors}
          />
          <InputField
            type="number"
            placeholder="Enter no. of sale"
            name="sales"
            register={register}
            errors={errors}
          />
          <div className=" rounded-sm bg-primaryClr p-1 relative border mt-2">
            <label className="absolute -top-2 text-xs bg-primaryClr px-2 rounded-lg">
              Month
            </label>
            <select
              name="month"
              {...register("month")}
              className="outline-none p-1 bg-primaryClr w-full"
            >
              <option value="">Select</option>
              {productOptionData.map((item) => {
                return (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            {errors["month"] && (
              <span className="text-xs text-red-500">
                {errors["month"].message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="px-4 p-2 bg-white text-secondaryClr font-bold text-sm hover:bg-white/90"
          >
            Add
          </button>
        </>
      )}
    </form>
  );
};

export default Form;

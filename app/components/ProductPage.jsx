"use client";
import React from "react";
import AddItemLayout from "./AddItemLayout";
import { dispatchAction, selecter } from "@/lib/utils/reduxUtils";
import { setIsAddCart } from "@/lib/slices/slice";
import Table from "./Table";
import CellComponent from "./CellComponent";
import { ProductColumns } from "./ProductColumns";


const ProductPage = () => {
  const dispatch = dispatchAction();
  const isAddCartOpen = selecter(
    (state) => state.dashboardReducer.isAddCartOpen
  );
  const products = selecter((state) => state?.dashboardReducer?.products);
  return (
    <div className="text-white flex flex-col relative">
      {isAddCartOpen && <AddItemLayout />}
      <div className="flex gap-4  justify-between items-center">
        <h1 className="text-lg sm:text-2xl font-semibold">Products</h1>
        <button
          className="px-3 p-2 text-xs sm:text-sm font-semibold bg-white text-secondaryClr rounded-sm"
          onClick={() => {
            dispatch(setIsAddCart(true));
          }}
        >
          Add Product
        </button>
      </div>
      <div className=" rounded-sm mt-4">
        <Table columnData={ProductColumns()} data={products} />
      </div>
    </div>
  );
};

export default ProductPage;

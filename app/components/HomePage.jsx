'use client';
import React, { useState } from "react";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { selecter } from "@/lib/utils/reduxUtils";

const HomePage = () => {
  const products = selecter(state=>state?.dashboardReducer?.products);
  const visitors = selecter(state=>state?.dashboardReducer?.visitors);
  const totalPremiumUser = visitors && visitors?.reduce((accu,item)=>accu+item?.premiumUsers,0)
  const totalRevenue = products && products?.reduce((accu,item)=>accu + item?.revenue,0)
  return (
    <div className=" flex flex-col justify-center items-center mt-2">
      <div className="flex text-secondaryClr justify-center items-center flex-wrap gap-8">
        
      <Card 
      title='Totol Premium Users'
      data={totalPremiumUser?totalPremiumUser:0}
      icon={<FaUsers size={35} />}
      />
      <Card 
            title='Total Products'
            data={products ? products?.length : 0}
      icon={<IoCart size={35} />}
      />
      <Card
            title='Total Revenue'
            data={totalRevenue?`₹ ${totalRevenue}`:0}
      icon={<GiTakeMyMoney size={35} />}
      />
      
      </div>
    </div>
  );
};

export default HomePage;

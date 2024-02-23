"use client";
import React, { useState } from "react";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { selecter } from "@/lib/utils/reduxUtils";
import { productOptionData } from "@/utils/data";
import TotalUserChart from "./TotalUserChart";

const HomePage = () => {
  const products = selecter((state) => state?.dashboardReducer?.products);
  const visitors = selecter((state) => state?.dashboardReducer?.visitors);
  const totalPremiumUser =
    visitors && visitors?.reduce((accu, item) => accu + item?.premiumUsers, 0);

  const totalRevenue =
    products && products?.reduce((accu, item) => accu + item?.revenue, 0);

  const getUsersInMonth = (visitor, month) => {
    if (visitor?.filter((item) => item?.month === month).length === 0) return 0;
    return visitor
      ?.filter((item) => item?.month === month)
      .reduce(
        (acc, visitorData) =>
          acc + visitorData?.visitors + visitorData?.premiumUsers,
        0
      );
  };
  const getTotalRevenueInMonth = (product, month) => {
    if (product?.filter((item) => item.month === month).length === 0) return 0;
    return product
      ?.filter((item) => item.month === month)
      .reduce((acc, item) => item?.revenue + acc, 0);
  };
  const totalRevenueperMonth = productOptionData.map((item) =>
    getTotalRevenueInMonth(products, item.label)
  );
  const usersInMonth = productOptionData.map((item) =>
    getUsersInMonth(visitors, item.label)
  );
  const newDataUser = usersInMonth?.map((item, index) => {
    return {
      data: item,
      name: productOptionData[index].id,
    };
  });
  const newDataRevenue = totalRevenueperMonth?.map((item, index) => {
    return { data: item, name: productOptionData[index].id };
  });
  return (
    <div className=" flex flex-col justify-center items-center mt-2">
      <div className="flex text-secondaryClr justify-center items-center flex-wrap gap-8">
        <Card
          title="Totol Premium Users"
          data={totalPremiumUser ? totalPremiumUser : 0}
          icon={<FaUsers size={35} />}
        />
        <Card
          title="Total Products"
          data={products ? products?.length : 0}
          icon={<IoCart size={35} />}
        />
        <Card
          title="Total Revenue"
          data={totalRevenue ? `₹ ${totalRevenue}` : 0}
          icon={<GiTakeMyMoney size={35} />}
        />
      </div>
      <div className="w-full flex md:flex-row flex-col mt-10">
        <TotalUserChart title="Total Visitors per Month" data={newDataUser} />
        <TotalUserChart title="Total Revenue per Month" data={newDataRevenue} />
      </div>
    </div>
  );
};

export default HomePage;

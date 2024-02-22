'use client'
import React, { useMemo } from "react";
import CellComponent from "./CellComponent";

export const VisitorColumn = () => {
  const columnData = useMemo(
    () => [
      {
        Header: "Visitors",
        accessor: "visitors",
      },
      {
        Header: "Premium Users",
        accessor: "premiumUsers",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Device",
        accessor: "device",
      },
      {
        Header: "Action",
        Cell: ({ row }) => {
          return <CellComponent row={row} />;
        },
      },
      {
        Header: "Month",
        accessor: "month",
      },
    ],
    []
  );
  return columnData;
};

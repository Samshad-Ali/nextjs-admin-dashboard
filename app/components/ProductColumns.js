import React, { useMemo } from "react";
import CellComponent from "./CellComponent";

export const ProductColumns = () => {
  const columnData = useMemo(
    () => [
      {
        Header: "Product Name",
        accessor: "name",
      },
      {
        Header: "Month",
        accessor: "month",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Sale",
        accessor: "sales",
      },
      {
        Header: "Action",
        Cell: ({row}) => {
          return <CellComponent row={row} />;
        },
      },
      {
        Header: "Revenue",
        accessor: "revenue",
      },
    ],
    []
  );
  return columnData;
};


"use client";
import React from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import { GoSortDesc, GoSortAsC } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Table = ({ columnData, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter, pageIndex },
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns: columnData,
      data: data,
      initialState: {
        pageSize: 10,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <div className="overflow-hidden">
      <div className="text-white relative w-fit">
        <input
          className="outline-none bg-transparent border rounded-sm pl-3 p-1 my-2"
          type="text"
          placeholder="Search.."
          value={globalFilter || ""}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
        />
        <IoSearchOutline className="absolute right-3 top-4 text-lg" />
      </div>
      <div className="overflow-x-auto max-w-full">

      <table className="min-w-[100%] border rounded-sm" {...getTableProps()}>
        <thead className="bg-white text-secondaryClr flex-nowrap text-start">
          {headerGroups.map((headerGroup) => (
            <tr
              className=""
              key={headerGroup.id}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="p-2 min-w-28  text-start"
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted && (
                      <span>
                      {column.isSortedDesc ? <GoSortDesc /> : <GoSortAsC />}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
                <tr
                className="hover:bg-secondaryClr"
                key={row.id}
                {...row.getRowProps()}
                >
                {row.cells.map((cell) => {
                    return (
                        <td
                        className="p-3 min-w-28 text-start"
                        key={cell.id}
                        {...cell.getCellProps()}
                        >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
        })}
        </tbody>
      </table>
        </div>
      <div className="text-start sm:text-end flex items-center gap-1 justify-start sm:justify-end mt-2">
        <button
        onClick={()=>{gotoPage(0)}}
          disabled={!canPreviousPage}
          className={` ${
            !canPreviousPage && "cursor-not-allowed"
          } bg-white text-secondaryClr p-2 rounded-full`}
        >
          <MdFirstPage />
        </button>
        <button

          disabled={!canPreviousPage}
          className={` ${
            !canPreviousPage && "cursor-not-allowed"
          } bg-white text-secondaryClr p-2 rounded-full`}
          onClick={() => {
            previousPage();
          }}
        >
          <MdKeyboardArrowLeft />
        </button>
        <span className="text-sm font-semibold mx-3">
          {pageIndex + 1} of {pageCount}
        </span>
        <button
          disabled={!canNextPage}
          className={`${!canNextPage && 'cursor-not-allowed '} bg-white text-secondaryClr p-2 rounded-full`}
          onClick={() => {
            nextPage();
          }}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          disabled={!canNextPage}
          className={`${!canNextPage && 'cursor-not-allowed '} bg-white text-secondaryClr p-2 rounded-full`}
          onClick={()=>{gotoPage(pageCount-1)}}
        >
          <MdLastPage />
        </button>
      </div>
    </div>
  );
};

export default Table;

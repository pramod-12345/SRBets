import React from "react";
import btc from "../../assets/svg/btc.svg";
import usd from "../../assets/svg/usd.svg";

const SkeletonRow = ({ columns }) => {
  return (
    <tr className="odd:bg-blackRussian even:bg-darkByzantineBlue py-[15px] h-12 rounded-xl">
      {columns.map((col, index) => (
        <td
          key={index}
          className="text-center text-sm font-medium text-table-row first:rounded-l-xl last:rounded-r-xl"
        >
          <div className="bg-gray-700 animate-pulse h-4 max-w-[75%] w-full mx-auto rounded-md"></div>
        </td>
      ))}
    </tr>
  );
};

const TableCell = ({ isHeader, content, currency }) => {
  const cellClass = `text-start pl-6 ${
    isHeader ? "font-bold text-xs" : "font-medium text-sm"
  } text-table-row first:rounded-l-xl last:rounded-r-xl`;

  return isHeader ? (
    <th className={cellClass}>{content}</th>
  ) : (
    <td className={cellClass}>
      <span className="flex items-center justify-start gap-[6px]">
        {content}{" "}
        {currency && (
          <img
            src={currency === "USD" ? usd : btc}
            alt=""
            className="w-5 h-5"
          />
        )}
      </span>
    </td>
  );
};

const TableRow = ({ isHeader, columns, rowData }) => {
  return (
    <tr
      className={`${
        isHeader
          ? "py-5 h-[54px]"
          : "odd:bg-blackRussian even:bg-darkByzantineBlue py-[15px] h-12 rounded-xl font-medium"
      }`}
    >
      {columns?.map((col, colIndex) => (
        <TableCell
          key={colIndex}
          content={isHeader ? col.header : rowData[col.key]}
          isHeader={isHeader}
        />
      ))}
    </tr>
  );
};

const Table = ({ columns, data, loading }) => {
  const skeletonRows = new Array(5).fill(null);
  return (
    <div className="bg-darkByzantineBlue px-5 py-1 pb-5 rounded-xl mt-[18px] overflow-auto">
      <table className="w-full text-vintageRibbon">
        <thead>
          <TableRow columns={columns} isHeader={true} />
        </thead>
        <tbody>
          {loading
            ? skeletonRows.map((_, index) => (
                <SkeletonRow key={index} columns={columns} />
              ))
            : data?.map((row, rowIndex) => (
                <TableRow key={rowIndex} rowData={row} columns={columns} />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React from "react";
import btc from "../../assets/svg/btc.svg";
import usd from "../../assets/svg/usd.svg";

const TableCell = ({ isHeader, content, currency }) => {
  const cellClass = `text-center ${
    isHeader ? "font-bold text-xs" : "font-medium text-sm"
  } text-table-row first:rounded-l-xl last:rounded-r-xl`;

  return isHeader ? (
    <th className={cellClass}>{content}</th>
  ) : (
    <td className={cellClass}>
      <span className="flex items-center justify-center gap-[6px]">
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
          : "odd:bg-accent even:bg-arrowDisabled py-[15px] h-[48px] rounded-xl font-medium"
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

const Table = ({ columns, data }) => {
  return (
    <div className="bg-arrowDisabled px-5 py-1 pb-5 rounded-xl mt-[18px]">
      <table className="w-full">
        <thead>
          <TableRow columns={columns} isHeader={true} />
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <TableRow key={rowIndex} rowData={row} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

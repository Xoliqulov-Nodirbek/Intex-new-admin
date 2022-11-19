import React, { useRef } from "react";
import TableData from "../TableData/TableData";
import MLabel from "../../BaseComponents/MLabel/MLabel";
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";

export default function TableRow({
  children,
  styles,
  data,
  handleChange,
  isChecked,
}) {
  return (
    <tr className={`flex  items-center py-3 border-b `}>
      {children ? (
        children
      ) : (
        <>
          <TableData styles="w-11 pr-3 justify-center">
            <input
              className=""
              type="checkbox"
              onChange={handleChange}
              
            />
          </TableData>
          <TableData styles="w-[66px]">{data.id}</TableData>
          <TableData styles="w-[300px] truncate" image={true}>
            {data.name_uz}
          </TableData>
          <TableData styles="w-[153px]">{data.price}</TableData>
          <TableData styles="w-[153px]">1 300 000 сум</TableData>
          <TableData styles="w-[99px]">4</TableData>
          <TableData styles="w-[147px]">220х150х60см</TableData>
          <TableData styles="w-[118px]">1 622 л</TableData>
          <TableData styles="w-[140px]">
            <MLabel type={`label_${data.status_en}`}>Новинки</MLabel>
          </TableData>
          <TableData styles="w-[95px] pr-3 justify-center">
            <button>
              <img src={ThreeDotsSvg} alt="three dots icon" />
            </button>
          </TableData>
        </>
      )}
    </tr>
  );
}

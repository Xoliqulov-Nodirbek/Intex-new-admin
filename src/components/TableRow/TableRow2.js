import React,{useState} from "react";
import TableData from "../TableData/TableData";
import MLabel from "../../BaseComponents/MLabel/MLabel";
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";
import ProductModal from "../ProductModal/ProductModal";

export default function TableRow2({
  children,
  styles,
  data,
  handleChange,
  isChecked,
}) 
{
  const [isClick, setIsClick] = useState(false);
  return (
    <tr className={`flex  items-center border-b ${styles}`}>
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
          <TableData styles="w-[132px]">{data.order_number}</TableData>
          <TableData styles="w-[132px] truncate">
            {data.name}
          </TableData>
          <TableData styles="w-[162px]">{data.phone}</TableData>
          <TableData styles="w-[254px] text-blue-500">{data.address}</TableData>
          <TableData styles="w-[178px]">{data.count}</TableData>
          <TableData styles="w-[147px]">{data.summa} cум</TableData>
          <TableData styles="w-[153px]">{data.discount_summa ? data.discount_summa + " cум" : "-"}</TableData>
          <TableData styles="w-[145px]">{data.cteated_at}</TableData>
          <TableData styles="w-[140px]">
            <MLabel type={`label_${data.name_ru}`}>Новинки</MLabel>
          </TableData>
          
          <TableData styles="w-[95px] pr-3 justify-center relative">
            <button
              onClick={() => {
                setIsClick(!isClick);
              }}
            >
              <img src={ThreeDotsSvg} alt="three dots icon" />
            </button>
            {isClick ? <ProductModal /> : ""}
          </TableData>
        </>
      )}
    </tr>
  );
}

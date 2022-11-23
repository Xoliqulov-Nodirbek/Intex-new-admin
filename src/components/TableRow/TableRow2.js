import React,{useState} from "react";
import TableData from "../TableData/TableData";
import MLabel from "../../BaseComponents/MLabel/MLabel";
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";
import ProductModal from "../ProductModal/ProductModal";

export default function TableRow2({
  children,
  styles,
  data,
  handleChanges,
  isChecked,
}) 
{
  const [isClick, setIsClick] = useState(false);
  const [cheker, setCheker] = useState(false);
  
  const handleChecked = (e) => {
    if (e.target.checked) {
      setCheker(true);
      e.target.checked = true;
    } else {
      setCheker(false);
      e.target.checked = false;
    }
  };
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
              cheked={
                cheker === true && isChecked === false
                  ? true
                  : cheker === false && isChecked === false
                  ? false
                  : cheker === false && isChecked === true
                  ? true
                  : cheker === true && isChecked === true
                  ? true
                  : true
              }
              onChange={(e) => handleChecked(e)}
              
            />
          </TableData>
          <TableData styles="w-[66px] ">{data.id}</TableData>
          <TableData styles="w-[132px] ">{data.order_number}</TableData>
          <TableData styles="w-[132px] truncate ">
            {data.name}
          </TableData>
          <TableData styles="w-[162px] text-sm">{data.phone}</TableData>
          <TableData styles="w-[254px] text-blue-500 underline underline-offset-2 text-sm">{data.address}</TableData>
          <TableData styles="w-[178px] text-sm">{data.count}</TableData>
          <TableData styles="w-[153px] text-sm">{data.summa} cум</TableData>
          <TableData styles="w-[153px] text-sm">{data.discount_summa ? data.discount_summa + " cум" : "-"}</TableData>
          <TableData styles="w-[145px] text-sm flex flex-col">
             <h4>{data.created_at.slice(0,10)}</h4> 
             <h5 className="text-xs">{data.created_at.slice(11,16)}</h5></TableData>
          <TableData styles="w-[145px]">
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
            {isClick ? <ProductModal dataInfo = {data} /> : ""}
          </TableData>
        </>
      )}
    </tr>
  );
}

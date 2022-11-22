import React, { useEffect, useState } from "react";
import TableData from "../TableData/TableData";
import MLabel from "../../BaseComponents/MLabel/MLabel";
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";
import ProductModal from "../ProductModal/ProductModal";

export default function TableRow({
  children,
  styles,
  data,
  handleChange,
  isChecked,
}) {
  const [checker, setChecker] = useState(false);
  const [isClicked, setIsClicked] = useState(false)
 
  const handleCheck = (e) =>{
    
        if(e.target.checked){
          setChecker(true)
            e.target.checked = true
        }else{
          setChecker(false)
          e.target.checked = false
        }
  }
  
  return (
    <tr className={`flex  items-center border-b ${styles}`}>
      {children ? (
        children
      ) : (
        <>
          <TableData styles="w-11 pr-3 justify-center">
            <input
              className="inputs"
              type="checkbox"
              checked={(checker == true && isChecked  == false)  ? true  : (checker == false && isChecked == false) ? false : (checker==false && isChecked == true) ? true : (checker == true && isChecked == true) ? true : true}
              onChange={(e)=>handleCheck(e)}
            />
          </TableData>
          <TableData styles="w-[66px]">{data.id}</TableData>
          <TableData styles="w-[300px] truncate" image={true}>
            {data.name_uz}
          </TableData>
          <TableData styles="w-[153px]">{data.price}</TableData>
          <TableData styles="w-[153px]">{data.discount_price} сум</TableData>
          <TableData styles="w-[99px]">4</TableData>
          <TableData styles="w-[147px]">220x150x60см</TableData>
          <TableData styles="w-[118px]">1 622 л</TableData>
          <TableData styles="w-[140px]">
            <MLabel type={`label_${data.status_en}`}>Новинки</MLabel>
          </TableData>
          <TableData styles="w-[95px] pr-3 justify-center relative">
            <button onClick={() => {setIsClicked(!isClicked)}}>
              <img src={ThreeDotsSvg} alt="three dots icon" />
            </button>
            {isClicked ? <ProductModal/> : ''}
          </TableData>
        </>
      )}
    </tr>
  );
}

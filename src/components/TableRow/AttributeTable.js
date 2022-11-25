  import React, { useState } from 'react'
import TableData from '../TableData/TableData'
import MLabel from '../../BaseComponents/MLabel/MLabel'
import ThreeDotsSvg from '../../Assets/Images/ProductsImgs/threedots.svg'
import ProductModal from '../ProductModal/ProductModal'
import MFilter from '../../BaseComponents/MFilter/MFilter'

export default function AttributeTable({ children, styles, data, isChecked }) {
  const [checker, setChecker] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const attribute = data.ru
  const handleCheck = (e) => {
    if (e.target.checked) {
      setChecker(true)
      e.target.checked = true
    } else {
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
              className="inputs w-4 h-4"
              type="checkbox"
              checked={
                checker === true && isChecked === false
                  ? true
                  : checker === false && isChecked === false
                  ? false
                  : checker === false && isChecked === true
                  ? true
                  : checker === true && isChecked === true
                  ? true
                  : true
              }
              onChange={(e) => handleCheck(e)}
            />
          </TableData>
          <TableData styles="w-[80px]">{data.id}</TableData>
          <TableData styles="w-[300px] truncate">{data.attribute_ru}</TableData>
          <TableData styles="w-[190px]">{data.view}</TableData>
          <TableData styles="min-w-[400px]">
            {attribute.map((item, index) => (
              <MFilter className="mx-1" key={index}>{item}</MFilter>
            ))}
          </TableData>
          <TableData styles="w-[95px] pr-3 justify-center relative">
            <button
              onClick={() => {
                setIsClicked(!isClicked)
              }}
            >
              <img src={ThreeDotsSvg} alt="three dots icon" />
            </button>
            {isClicked ? <ProductModal delEdit={"hidden"}  /> : ''}
          </TableData>
        </>
      )}
    </tr>
  )
}

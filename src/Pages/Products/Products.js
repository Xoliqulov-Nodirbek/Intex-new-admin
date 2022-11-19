import React from "react";
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableRow from "../../components/TableRow/TableRow";
import Trash from "../../Assets/Images/ProductsImgs/trash.svg";
import axios from "axios";

export default function Products() {
  const [data, setData] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [checkedCount, setCheckedCount] = React.useState(0);
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [totalPage, setTotalpage] = React.useState(0)

  const handleChange = (evt) => {
    if (evt.target.checked) {
      setCheckedCount(checkedCount + 1);
    } else {
      setCheckedCount(checkedCount - 1);
    }
  };

  React.useEffect(() => {
    axios
      .get(
        `https://intex-shop-production.up.railway.app/api/products/getAll?page=${page}&limit=${limit}`
      )
      .then((res) => {
        setData(res?.data);
        setTotalpage(res.data?.total_count.count);
      });
  }, [limit, page]);

  console.log(page);

  let options = [];

  for (let i = 0; data.total_pages + 1 > i; i++) {
    options.push(i);
  }


  return (
    <div className=" bg-white border-b rounded-xl mb-[100px]">
      <div className="flex py-3 px-4 items-center">
        <input
          className="mr-3"
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="text-[#b9b9b9] mr-3">{checkedCount}, Выбрано</span>
        <img src={Trash} alt="Trash icon" />
      </div>
      <div className="table-scroll overflow-x-scroll pb-2.5 bg-white">
        <table className="w-full">
          <thead className="bg-[#f2f2f2]">
            <TableRow styles="py-[13px]">
              <TableHeader styles="w-11 pr-3 justify-center">
                <input className="" type="checkbox" />
              </TableHeader>
              <TableHeader styles="w-[66px]" sortIcon={true}>
                ID
              </TableHeader>
              <TableHeader styles="w-[300px]" sortIcon={true}>
                Название товара
              </TableHeader>
              <TableHeader styles="w-[153px]">Цена</TableHeader>
              <TableHeader styles="w-[153px]">Цена со скидкой</TableHeader>
              <TableHeader styles="w-[99px]" sortIcon={true}>
                Кол-во
              </TableHeader>
              <TableHeader styles="w-[147px]">Размер</TableHeader>
              <TableHeader styles="w-[118px]">Объем</TableHeader>
              <TableHeader styles="w-[140px]">Статус</TableHeader>
              <TableHeader styles="w-[95px] pr-3 justify-center">
                <button>
                  <img src={ThreeDotsSvg} alt="three dots icon" />
                </button>
              </TableHeader>
            </TableRow>
          </thead>
          <tbody className="bg-white">
            {data.result?.length ? (
              data.result?.map((item) => {
                return (
                  <TableRow
                    styles="py-1.5"
                    data={item}
                    key={item.id}
                    isChecked={isChecked}
                    handleChange={handleChange}
                  ></TableRow>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex border-t mt-2.5 p-3 justify-between items-center pr-5">
        <div className="flex">
          <select
            className="rounded-md bg-[#f2f2f2] outline-none w-12 px-1 mr-3"
            onChange={(evt) => setLimit(evt.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <span className="m-0 mr-3 text-paginationColor text-sm">
            Элементы на каждой странице
          </span>
          <span className="text-sm text-paginationButtonColor">
            1-5 из {totalPage} предметов
          </span>
        </div>
        <div className="flex items-center">
          <input
            className="w-12 text-center outline-none text-sm text-paginationButtonColor rounded-md bg-[#f2f2f2]  "
            type="nubmer"
            value={page}
            onChange={(evt) => setPage(evt.target.value)}
            maxLength={1}

          />
          <span className="mr-3.5 text-sm text-paginationButtonColor">
            из {totalPage / limit} страниц
          </span>
          <span className="flex">
            <button className="mr-4 text-paginationButtonColor">&#60;</button>
            <button className=" text-paginationButtonColor">&#62;</button>
          </span>
        </div>
      </div>
    </div>
  );
}

import Edit from "../../Assets/Images/ProductsImgs/edit.svg";
import Dublicate from "../../Assets/Images/ProductsImgs/duplicate.svg";
import Trash from "../../Assets/Images/ProductsImgs/trash_1.svg";

export default function ProductModal() {
  return (
    <>
      <ul className="flex flex-col gap-y-2.5 absolute bg-white p-3 w-[160px] top-0 right-16 z-50 border rounded-lg shadow-lg">
        <button type="button" className="flex">
          <img className="mr-2" src={Edit} alt="just a icon to edit" />
          <span>Изменить</span>
        </button>
        <button type="button" className="flex">
          <img
            className="mr-2"
            src={Dublicate}
            alt="just a icon to dublicate"
          />
          <span>Дублировать</span>
        </button>
        <button type="button" className="flex">
          <img className="mr-2" src={Trash} alt="just a icon to edit" />
          <span>Удалить</span>
        </button>
      </ul>
    </>
  );
}

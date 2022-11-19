import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import CloseSvg from "../../Assets/Images/NavbarImgs/close.svg";


let token = "5783030372:AAHFLmlGunmbxmIDCpA3ra67L9tnVV1paJg";
let chatId = "63647653";

const initialValues = {
  orders: "",
  size:"",
  numberproduct: "",
  countproduct: "",
  sumproduct: "",
  discount: "",
  status: "",

};

const onSubmit = (values, { resetForm }) => {
  toast.success("Successfully sent!");
  let fullText = `\u{2705} Name: ${values.name}%0A\u{2705} Phone Number: \u{FF0B}998${values.number} %0A\u{2705} Address: ${values.address}`;

  axios
    .post(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
    )
    .then(function (response) {
      console.log("Submitted");
    })
    .catch(function (error) {
      toast.error("Internal error");
    });
  values.name = "";
  resetForm({ values: "" });
  
};



const validationSchema = Yup.object({
  orders: Yup.string()
    .required("Zakas Numbers is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),
  size: Yup.string()
    .required("Size is required")
    .min(1, "mininam 1 characters")
    .max(3, "Maximal 3 characters"),

  name: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),
  numberproduct: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(1, "Minimal 3 characters")
    .max(10, "Maximum 20 characters"),
  sumproduct: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),
  status: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),

});

function ProductModal({ isShown, onClosed }) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  if (!isShown) return null;

  const handleClose = (e) => {
    e.preventDefault();
    onClosed();
  };

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClosed();
  };

 
    

  return (
    <div
      onClick={handleClick}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-20 
           flex justify-center items-center "
    >
      <div className=" bg-white rounded-2xl w-orderModal z-50">
        <Toaster position="bottom-right" reverseOrder={false} />
        <form
          onSubmit={(e) => {
            formik.handleSubmit(e);
            formik.values = initialValues;
          }}
          className=" flex flex-col"
        >
          <div className="flex flex-row pt-7 pb-6 px-6 items-center justify-between">
            <h1 className="font-bold text-2xl	text-addProductColor">Изменить</h1>
            <img onClick={handleClose} src={CloseSvg} alt="x" />
          </div>

          <div className=" flex flex-wrap  px-6 justify-between">
            <div className="relative w-full">
              <p className="text-base font-medium mb-3">Название продукта</p>
              <input
                type="string"
                name="orders"
                id="orders"
                className={
                  formik.touched.orders && formik.errors.orders
                    ? "bg-white w-full outline-0 h-12 rounded-lg border border-solid  border-red-600 text-addProductColor p-4"
                    : "bg-white w-full outline-0 h-12 rounded-lg border border-solid  border-borderColor text-addProductColor p-4"
                }
                minLength="3"
                maxLength="25"
                {...formik.getFieldProps("orders")}
                placeholder="Каркасный прямоугольный бас.."
              />
              {formik.touched.orders && formik.errors.orders ? (
                <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                  {formik.errors.orders}
                </span>
              ) : null}
            </div>
            <div className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Цена</p>
              <div
                className={
                  formik.touched.sumproduct && formik.errors.sumproduct
                    ? "bg-white w-submitBtnsWidth flex items-center justify-between h-12  rounded-lg border border-solid  border-red-600 text-addProductColor  p-4"
                    : "bg-white w-submitBtnsWidth flex items-center justify-between h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                }
              >
                <input
                  type="text"
                  name="sumproduct"
                  id="sumproduct"
                  className="outline-0"
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps("sumproduct")}
                  placeholder="1 500 000"
                />
                <p className="text-base font-normal">Сум</p>
                {formik.touched.sumproduct && formik.errors.sumproduct ? (
                  <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                    {formik.errors.sumproduct}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <p className="text-base font-medium text-addProductColor mb-3 mt-8">
                Цена со скидкой
              </p>
              <div className="bg-white w-submitBtnsWidth flex items-center justify-between h-12 rounded-lg border border-solid  border-borderColor text-addProductColor  p-4">
                <input
                  type="text"
                  id="discount"
                  className="outline-0"
                  minLength="3"
                  maxLength="25"
                  
                  placeholder="1 500 000"
                />
                <p className="text-base font-normal">Сум</p>
              </div>
            </div>
            <div className="relative">
              <p className="text-base font-medium  mb-3 mt-8">
                Кол-во продуктов
              </p>
              <input
                type="text"
                name="numberproduct"
                id="numberproduct"
                className={
                  formik.touched.numberproduct && formik.errors.numberproduct
                    ? "bg-white w-submitBtnsWidth outline-0 h-12 rounded-lg border border-solid  border-red-600 text-addProductColor  p-4"
                    : "bg-white w-submitBtnsWidth outline-0 h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                }
                minLength="1"
                maxLength="10"
                {...formik.getFieldProps("numberproduct")}
                placeholder="2"
              />
              {formik.touched.numberproduct && formik.errors.numberproduct ? (
                <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                  {formik.errors.numberproduct}
                </span>
              ) : null}
            </div>
            <div className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Обшая цена</p>
              <div
                className={
                  formik.touched.sumproduct && formik.errors.sumproduct
                    ? "bg-white w-submitBtnsWidth flex items-center justify-between h-12  rounded-lg border border-solid  border-red-600 text-addProductColor  p-4"
                    : "bg-white w-submitBtnsWidth flex items-center justify-between h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                }
              >
                <input
                  type="text"
                  name="sumproduct"
                  id="sumproduct"
                  className="outline-0"
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps("sumproduct")}
                  placeholder="1 500 000"
                />
                <p className="text-base font-normal">Сум</p>
                {formik.touched.sumproduct && formik.errors.sumproduct ? (
                  <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                    {formik.errors.sumproduct}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex flex-row justify-between">
                    <div className="relative ">
                    <p className="text-base font-medium  mb-3 mt-8">Длина</p>
                    <div
                        className={
                        formik.touched.sumproduct && formik.errors.sumproduct
                            ? "bg-white  flex items-center justify-between w-orderModalSize h-12 rounded-lg border border-solid  border-red-600 text-addProductColor p-4"
                            : "bg-white  flex items-center justify-between w-orderModalSize h-12 rounded-lg border border-solid  border-borderColor text-addProductColor p-4"
                        }
                    >
                        <input
                        type="text"
                        name="size"
                        id="size"
                        className="outline-0 w-[77px]"
                        minLength="1"
                        maxLength="3"
                        {...formik.getFieldProps("size")}
                        placeholder="50"
                        />
                        <p className="text-base font-normal">См</p>
                        {formik.touched.size && formik.errors.size ? (
                        <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                            {formik.errors.size}
                        </span>
                        ) : null}
                    </div>
                    </div>
                    <div className="relative ml-[10px]">
                    <p className="text-base font-medium  mb-3 mt-8">Ширина</p>
                    <div
                        className={
                        formik.touched.sumproduct && formik.errors.sumproduct
                            ? "bg-white  flex items-center justify-between w-orderModalSize h-12 rounded-lg border border-solid  border-red-600 text-addProductColor p-4"
                            : "bg-white  flex items-center justify-between w-orderModalSize h-12 rounded-lg border border-solid  border-borderColor text-addProductColor p-4"
                        }
                    >
                        <input
                        type="text"
                        name="size"
                        id="size"
                        className="outline-0 w-[77px]"
                        minLength="1"
                        maxLength="3"
                        {...formik.getFieldProps("size")}
                        placeholder="50"
                        />
                        <p className="text-base font-normal">См</p>
                        {formik.touched.size && formik.errors.size ? (
                        <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                            {formik.errors.size}
                        </span>
                        ) : null}
                    </div>
                    </div>
            </div>
            <div className="flex flex-row justify-between">
                    <div className="relative ">
                    <p className="text-base font-medium  mb-3 mt-8">Высота</p>
                    <div
                        className={
                        formik.touched.sumproduct && formik.errors.sumproduct
                            ? "bg-white  flex items-center justify-between w-orderModalSize h-12 rounded-lg border border-solid  border-red-600 text-addProductColor p-4"
                            : "bg-white  flex items-center justify-between w-orderModalSize h-12 rounded-lg border border-solid  border-borderColor text-addProductColor p-4"
                        }
                    >
                        <input
                        type="text"
                        name="size"
                        id="size"
                        className="outline-0 w-[77px]"
                        minLength="1"
                        maxLength="3"
                        {...formik.getFieldProps("size")}
                        placeholder="50"
                        />
                        <p className="text-base font-normal">См</p>
                        {formik.touched.size && formik.errors.size ? (
                        <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                            {formik.errors.size}
                        </span>
                        ) : null}
                    </div>
                    </div>
                    <div className="relative ml-[10px]">
                    <p className="text-base font-medium  mb-3 mt-8">Обьем</p>
                    <div
                        className={
                        formik.touched.sumproduct && formik.errors.sumproduct
                            ? "bg-white  flex items-center justify-between w-orderModalSize h-12 rounded-lg border border-solid  border-red-600 text-addProductColor p-4"
                            : "bg-white  flex items-center justify-between w-orderModalSize h-12 rounded-lg border border-solid  border-borderColor text-addProductColor p-4"
                        }
                    >
                        <input
                        type="text"
                        name="size"
                        id="size"
                        className="outline-0 w-[77px]"
                        minLength="1"
                        maxLength="3"
                        {...formik.getFieldProps("size")}
                        placeholder="50"
                        />
                        <p className="text-base font-normal">Л</p>
                        {formik.touched.size && formik.errors.size ? (
                        <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                            {formik.errors.size}
                        </span>
                        ) : null}
                    </div>
                    </div>
            </div>
            <div className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Статус</p>
              <select
                defaultValue={"check"}
                id="status"
                className="bg-white w-submitBtnsWidth outline-0 items-center  h-12  rounded-lg border border-solid  border-borderColor text-addProductColor px-4"
              >
                <option
                  className="text-addProductLinks items-center top-0"
                  value="chance"
                >
                  В ожидании
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-row px-6 pt-8 pb-7 justify-between">
            <button
              onClick={handleClose}
              className="py-buttonModalY px-buttonModalX text-[#2B3D91] font-medium border border-solid bg-languageBg rounded-lg "
            >
              Отменить
            </button>
            <button type="submit" className="py-buttonModalY px-buttonModalX text-white font-medium border border-solid bg-loginBtn rounded-lg ">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;

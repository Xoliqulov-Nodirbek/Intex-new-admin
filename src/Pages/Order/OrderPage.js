import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import CloseSvg from "../../Assets/Images/NavbarImgs/close.svg";
import uzbFlag from "../../Assets/Images/HeaderImgs/uzb-flag.svg";
import addressLogo from "../../Assets/Images/NavbarImgs/addresLogo.svg";

let token = "5783030372:AAHFLmlGunmbxmIDCpA3ra67L9tnVV1paJg";
let chatId = "63647653";

const initialValues = {
  orders: "",
  name: "",
  number: "",
  address: "",
  numberproduct: "",
  sumproduct: "",
  discount: "",
  status: "",
  date: "",
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

const phoneRegExp = /^[0-9]{9}$/;

const validationSchema = Yup.object({
  orders: Yup.string()
    .required("Zakas Numbers is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),

  name: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),
  number: Yup.string("Must be only number")
    .matches(phoneRegExp, {
      message: "Phone number is not valid.",
      excludeEmptyString: true,
    })
    .required("Required phone number"),
  address: Yup.string()
    .required("Address is required")
    .min(3, "Minimal 3 characters"),
  numberproduct: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(1, "Minimal 3 characters")
    .max(10, "Maximum 20 characters"),
  sumproduct: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),
  discount: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),
  status: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),
  date: Yup.string()
    .required("Username is required, at least 3 characters")
    .min(3, "Minimal 3 characters")
    .max(20, "Maximum 20 characters"),
});

function OrderPage({ isVisible, onClose }) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  if (!isVisible) return null;

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      onClick={handleClick}
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-20 
           flex justify-center items-center "
    >
      <div className=" bg-white rounded-xl w-orderModal z-50">
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
            <div className="relative">
              <p className="text-base font-medium mb-3">Номер заказа</p>
              <input
                type="number"
                name="orders"
                id="orders"
                className={
                  formik.touched.orders && formik.errors.orders
                    ? "bg-white w-submitBtnsWidth outline-0 h-12 rounded-lg border border-solid  border-red-600 text-addProductColor p-4"
                    : "bg-white w-submitBtnsWidth outline-0 h-12 rounded-lg border border-solid  border-borderColor text-addProductColor p-4"
                }
                minLength="3"
                maxLength="25"
                {...formik.getFieldProps("orders")}
                placeholder="#12345"
              />
              {formik.touched.orders && formik.errors.orders ? (
                <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                  {formik.errors.orders}
                </span>
              ) : null}
            </div>
            <div className="relative">
              <p className="text-base font-medium  mb-3">Имя</p>
              <input
                type="text"
                name="name"
                id="name"
                className={
                  formik.touched.name && formik.errors.name
                    ? "bg-white w-submitBtnsWidth outline-0 h-12  rounded-lg border border-solid  border-red-600 text-addProductColor  p-4"
                    : "bg-white w-submitBtnsWidth outline-0 h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                }
                minLength="3"
                maxLength="25"
                {...formik.getFieldProps("name")}
                placeholder="Абдулла"
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                  {formik.errors.name}
                </span>
              ) : null}
            </div>
            <div className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Номер телефона</p>
              <div
                className={
                  formik.touched.number && formik.errors.number
                    ? "bg-white w-submitBtnsWidth flex items-center h-12  rounded-lg border border-solid  border-red-600 text-addProductColor  p-4"
                    : "bg-white w-submitBtnsWidth flex items-center h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                }
              >
                <img
                  src={uzbFlag}
                  className="w-6 h-4"
                  width={22}
                  height={15}
                  alt="site_logo"
                />
                <span className="text-base inline text-black ml-1">+998</span>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="(90) 123 45 67"
                  className=" outline-none w-full sm:ml-4 h-full p-2 "
                  {...formik.getFieldProps("number")}
                />
                {formik.touched.number && formik.errors.number ? (
                  <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                    {formik.errors.number}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Адрес</p>
              <div
                className={
                  formik.touched.address && formik.errors.address
                    ? "bg-white w-submitBtnsWidth flex items-center justify-between h-12  rounded-lg border border-solid  border-red-600 text-addProductColor  p-4"
                    : "bg-white w-submitBtnsWidth flex items-center justify-between h-12  rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                }
              >
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="outline-0"
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps("address")}
                  placeholder="Г Ташкент, Чиланзарский р-н.."
                />

                <img
                  src={addressLogo}
                  className="w-4 h-5"
                  width={16}
                  height={18}
                  alt="site_logo"
                />

                {formik.touched.address && formik.errors.address ? (
                  <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                    {formik.errors.address}
                  </span>
                ) : null}
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
            <div className="relative">
              <p className="text-base font-medium text-addProductColor mb-3 mt-8">
                Цена со скидкой
              </p>
              <div
                className={
                  formik.touched.discount && formik.errors.discount
                    ? "bg-white w-submitBtnsWidth flex items-center justify-between h-12 rounded-lg border border-solid  border-red-600 text-addProductColor  p-4"
                    : "bg-white w-submitBtnsWidth flex items-center justify-between h-12 rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                }
              >
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  className="outline-0"
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps("discount")}
                  placeholder="1 500 000"
                />
                <p className="text-base font-normal">Сум</p>

                {formik.touched.discount && formik.errors.discount ? (
                  <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                    {formik.errors.discount}
                  </span>
                ) : null}
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
            <div className="relative">
              <p className="text-base font-medium  mb-3 mt-8">Время заказа</p>
              <input
                type="date"
                name="date"
                id="date"
                className={
                  formik.touched.date && formik.errors.date
                    ? "bg-white w-submitBtnsWidth  h-12 outline-0 rounded-lg border border-solid  border-red-600 text-addProductColor p-4"
                    : "bg-white w-submitBtnsWidth  h-12 outline-0 rounded-lg border border-solid  border-borderColor text-addProductColor  p-4"
                }
                minLength="3"
                maxLength="25"
                {...formik.getFieldProps("date")}
                
              />
              {formik.touched.date && formik.errors.date ? (
                <span className="text-red-600 text-xs absolute -bottom-4  left-2">
                  {formik.errors.date}
                </span>
              ) : null}
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

export default OrderPage;

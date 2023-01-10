import { useState } from "react";
import { useFormik } from "formik";
import Dounload from "../../../../Assets/Images/HomeContentImg/dounload.svg";
import delterImgAdded from "../../../../Assets/Images/HomeContentImg/addedImgDel.svg";
import delterImgUnAdded from "../../../../Assets/Images/HomeContentImg/addUnUpload.svg";
import * as Yup from "yup";
// Images
import MButton from "../../../../BaseComponents/MButton/MButton";
// const env = process.env.REACT_APP_ALL_API;
// const token = JSON.parse(window.localStorage.getItem("token"));
export default function AtributPage({ infoPage, imgPage, atrPage }) {
  const [imgUrl, setImgUrl] = useState([]);
  const [getImg, setGetImg] = useState([]);
  const initialValues = {
    uz_name: "",
    uz_price: "",
    uz_salePrice: "",
    uz_UserInfo: "",
  };
  const onSubmit = (values, { resetForm }) => {
    infoPage(false);
    imgPage(false);
    atrPage(true);
    resetForm();

    const informationResult = {
      name_uz: values.uzName,
    };
    window.localStorage.setItem("information", JSON.stringify(informationResult));
  };
  function handldelete(id) {
    let newTodo = getImg.filter((e) => e.id !== id);
    let newDelImg = imgUrl.filter((e) => e.id !== id);
    setGetImg(newTodo);
    setImgUrl(newDelImg);
  }
  const validationSchema = Yup.object({
    uz_name: Yup.string().required("Required"),
    uz_price: Yup.number().required("Required"),
    uz_salePrice: Yup.number().required("Required"),
    uz_UserInfo: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const findNewImg = (evt) => {
    setGetImg([
      ...getImg,
      {
        img: window.URL.createObjectURL(evt.target.files[0]),
        id: getImg.length ? getImg[getImg.length - 1].id + 1 : 0,
      },
    ]);
    if (evt.target && evt.target.files[0]) {
      setImgUrl([
        ...imgUrl,
        {
          id: imgUrl.length ? imgUrl[imgUrl.length - 1].id + 1 : 0,
          url: evt.target.files[0],
        },
      ]);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formik.handleSubmit(e);
          formik.values = initialValues;
        }}
        className="mt-[23px] mb-[40px]"
      >
        <div className="flex justify-between border-b-2 pb-6 mb-6">
          <div className="w-[30%]">
            <h2 className="font-bold text-lg mb-6 text-[#2B3D90]">Ma'lumot va rasm</h2>
            <label className="text-base relative flex flex-col w-[346px]">
              Mahsulot nomi
              <input
                type="text"
                name="uz_name"
                id="name"
                placeholder="Ramka hovuzi Intex to'rtburchak.."
                className={
                  formik.touched.uz_name && formik.errors.uz_name
                    ? " mt-3 p-4 text-base rounded-lg outline-none border border-red-600"
                    : " mt-3 p-4 text-base rounded-lg outline-none border border-gray-input_radius"
                }
                minLength="3"
                maxLength="25"
                {...formik.getFieldProps("uz_name")}
              />
              {formik.touched.uz_name && formik.errors.uz_name ? (
                <span className="text-red-600 text-xs absolute -bottom-4  left-2">
                  {formik.errors.uz_name}
                </span>
              ) : null}
            </label>
            <div className="space-y-6 mt-6">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg text-[#2B3D90]">Атрибуты</h2>
                <button type="button" className="text-sm text-[#109EF4]">
                  + Atribut qo'shish
                </button>
              </div>
              <label className="text-base flex flex-col">
                Narx
                <input
                  type="number"
                  name="uz_price"
                  id="price"
                  placeholder="1 290 000"
                  className={
                    formik.touched.uz_price && formik.errors.uz_price
                      ? "  h-12 w-[340px] mt-3 text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600"
                      : "  h-12 w-[340px] mt-3 text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius"
                  }
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps("uz_price")}
                />
                {formik.touched.uz_price && formik.errors.uz_price ? (
                  <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
                    {formik.errors.uz_price}
                  </span>
                ) : null}
              </label>
              <label className="text-base flex flex-col">
                Chegirma narx
                <input
                  type="number"
                  name="uz_salePrice"
                  id="salePrice"
                  placeholder="1 290 000"
                  className={
                    formik.touched.uz_salePrice && formik.errors.uz_salePrice
                      ? "  h-12 w-[340px] mt-3 text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-3 sm:mb-6"
                      : "  h-12 w-[340px] mt-3 text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-3 sm:mb-6"
                  }
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps("uz_salePrice")}
                />
                {formik.touched.uz_salePrice && formik.errors.uz_salePrice ? (
                  <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
                    {formik.errors.uz_salePrice}
                  </span>
                ) : null}
              </label>
            </div>
          </div>
          <div className="w-[68%]">
            <label className="text-base relative flex flex-col">
              Mahsulot tavsifi
              <textarea
                rows={8}
                name="uz_UserInfo"
                id="name"
                placeholder="Mahsulot tavsifini kiriting"
                className={
                  formik.touched.uz_UserInfo && formik.errors.uz_UserInfo
                    ? " mt-3 p-4 text-base rounded-lg outline-none border border-red-600"
                    : " mt-3 p-4 text-base rounded-lg outline-none border border-gray-input_radius"
                }
                minLength="3"
                maxLength="25"
                {...formik.getFieldProps("uz_UserInfo")}
              />
              {formik.touched.uz_UserInfo && formik.errors.uz_UserInfo ? (
                <span className="text-red-600 text-xs absolute -bottom-4 left-2">
                  {formik.errors.uz_UserInfo}
                </span>
              ) : null}
            </label>
            <div>
              <h2 className="font-medium text-bold mt-6 mb-2">Rasm</h2>
              <label className="inline-block mb-4   ">
                <input onChange={findNewImg} className="visually-hidden" type="file"></input>
                <div className="cursor-pointer w-productImgUploadWidth py-8 bg-bgUpload rounded-xl text-center">
                  <img
                    className="mx-auto mb-1"
                    src={Dounload}
                    alt="dounload"
                    width="60"
                    height="60"
                  />
                  <p>Mahsulot rasmlarini yuklang</p>
                </div>
              </label>
              <div className="flex space-x-2.5">
                {getImg.map((item) => (
                  <div key={Math.random()} className="relative">
                    <img
                      className="rounded-xl object-cover w-[163px] h-[116px] shadow-lg"
                      src={item.img}
                      alt="Upload img"
                      width="163"
                      height="116"
                    />
                    <div className="flex cursor-pointer items-center space-x-2 absolute top-2.5 right-2">
                      <img src={delterImgUnAdded} alt="delete img" width="32" height="32" />
                      <img
                        onClick={() => handldelete(item.id)}
                        src={delterImgAdded}
                        alt="delete img"
                        width="32"
                        height="32"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-5 mt-6 pb-6">
          <MButton BType="reject" type="reset">
            Отменить
          </MButton>
          <MButton BType="next" type="submit">
            Submit
          </MButton>
        </div>
      </form>
    </div>
  );
}

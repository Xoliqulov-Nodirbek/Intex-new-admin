import React, { useEffect, useRef, useState } from "react";
import Plas from "../../../../Assets/Images/HomeContentImg/plas-icon.svg";
import { Modal } from "../../../../components/Modal/Modal";
import DelteModal from "../../../../Assets/Images/HomeContentImg/deleteModal.svg";
import FormikControl from "../../../../BaseComponents/FormInput/FormikControl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import DropDown from "../../../../BaseComponents/DropDown/DropDown";
import DropImg from "../../../../Assets/Images/HomeContentImg/Drop.svg";
import axios from "axios";
const env = process.env.REACT_APP_ALL_API;
export default function AtributPage({
  atributInfo,
  setAtributInfo,
  productBasic,
  imaPage,
  atributPage,
  resultSubmit,
}) {
  const [showModal, setShowModal] = useState(false);
  const [openAtributes, setOpenAtributes] = useState(true);
  const [enOpenAtributes, setEnOpenAtributes] = useState(false);
  const [uzOpenAtributes, setUzOpenAtributes] = useState(false);
  const [ruType, setRuType] = useState([]);
  const [enType, setEnType] = useState([]);
  const [uzType, setUzType] = useState([]);
  const [ruStatus, setRuStatus] = useState([]);
  const [enStatus, setEnStatus] = useState([]);
  const [uzStatus, setUzStatus] = useState([]);
  const [addAtribut, setAddAtribut] = useState([]);
  const token = JSON.parse(window.localStorage.getItem("token"));
  const atributClicked = () => {
    setOpenAtributes(!openAtributes);
    setEnOpenAtributes(false);
    setUzOpenAtributes(false);
  };
  const usAtributClicked = () => {
    setEnOpenAtributes(!enOpenAtributes);
    setOpenAtributes(false);
    setUzOpenAtributes(false);
  };
  const uzAtributClicked = () => {
    setUzOpenAtributes(!uzOpenAtributes);
    setOpenAtributes(false);
    setEnOpenAtributes(false);
  };
  const initialValues = {
    ruPriceAtribut: "",
    ruPriceSale: "",
    ruTypeAtribut: "",
    ruColor: "",
    ruStatus: "",
    usPriceAtribut: "",
    usPriceSale: "",
    usTypeAtribut: "",
    usColor: "",
    usStatus: "",
    uzPriceAtribut: "",
    uzPriceSale: "",
    uzTypeAtribut: "",
    uzColor: "",
    uzStatus: "",
    ruNewAddedSize: "",
    ruNewAddedColor: "",
    ruNewAddedMaterial: "",
  };
  const validationSchema = Yup.object({
    ruPriceAtribut: Yup.number().required("Required"),
    ruPriceSale: Yup.number().required("Required"),
    ruTypeAtribut: Yup.string().required("Required"),
    ruColor: Yup.string().required("Required"),
    ruStatus: Yup.string().required("Required"),
    usPriceAtribut: Yup.number().required("Required"),
    usPriceSale: Yup.number().required("Required"),
    usTypeAtribut: Yup.string().required("Required"),
    usColor: Yup.string().required("Required"),
    usStatus: Yup.string().required("Required"),
    uzPriceAtribut: Yup.number().required("Required"),
    uzPriceSale: Yup.number().required("Required"),
    uzTypeAtribut: Yup.string().required("Required"),
    uzColor: Yup.string().required("Required"),
    uzStatus: Yup.string().required("Required"),
    ruNewAddedSize: Yup.string().required("Required"),
    ruNewAddedColor: Yup.string().required("Required"),
    ruNewAddedMaterial: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    resultSubmit(true);
    atributPage(true);
    imaPage(false);
    productBasic(false);
    setAtributInfo([
      ...atributInfo,
      {
        atributInfos: {
          ru: {
            ruAtrPrice: values.ruPriceAtribut,
            ruAtrPriceSale: values.ruPriceSale,
            ruAtrType: values.ruTypeAtribut,
            ruColor: values.ruColor,
            ruStatus: values.ruStatus,
          },
          us: {
            usAtrPrice: values.usPriceAtribut,
            usAtrPriceSale: values.usPriceSale,
            usAtrType: values.usTypeAtribut,
            usColor: values.usColor,
            usStatus: values.usStatus,
          },
          uz: {
            uzAtrPrice: values.uzPriceAtribut,
            uzAtrPriceSale: values.uzPriceSale,
            uzAtrType: values.uzTypeAtribut,
            uzColor: values.uzColor,
            uzStatus: values.uzStatus,
          },
        },
      },
    ]);
    resetForm();
  };
  // ruCategory start
  useEffect(() => {
    axios
      .get(`${env}categories/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setRuType(data.data));
  }, [token]);

  const dropdownOptions = [{ key: "В ожидании", value: "" }];
  ruType.map((item) =>
    dropdownOptions.push({ key: item.category_ru, value: item.category_ru })
  );
  // ruCategory end

  // enCategory start
  useEffect(() => {
    axios
      .get(`${env}categories/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setEnType(data.data));
  }, [token]);

  const enCategoryOptions = [{ key: "В ожидании", value: "" }];
  enType.map((item) =>
    enCategoryOptions.push({ key: item.category_en, value: item.category_en })
  );
  // enCategory end

  // uzCategory start
  useEffect(() => {
    axios
      .get(`${env}categories/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setUzType(data.data));
  }, [token]);

  const uzCategoryOptions = [{ key: "В ожидании", value: "" }];
  uzType.map((item) =>
    uzCategoryOptions.push({ key: item.category_uz, value: item.category_uz })
  );
  // uzCategory end

  // ruStatus start
  useEffect(() => {
    axios
      .get(`${env}status-products/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setRuStatus(data.data));
  }, [token]);

  const ruStatusOptions = [{ key: "В ожидании", value: "" }];
  ruStatus.map((item) =>
    ruStatusOptions.push({ key: item.status_ru, value: item.status_ru })
  );
  // ruStatus end

  // enStatus start
  useEffect(() => {
    axios
      .get(`${env}status-products/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setEnStatus(data.data));
  }, [token]);

  const enStatusOptions = [{ key: "В ожидании", value: "" }];
  enStatus.map((item) =>
    enStatusOptions.push({ key: item.status_en, value: item.status_en })
  );
  // enStatus end

  // uzStatus start
  useEffect(() => {
    axios
      .get(`${env}status-products/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setUzStatus(data.data));
  }, [token]);

  const uzStatusOptions = [{ key: "В ожидании", value: "" }];
  uzStatus.map((item) =>
    uzStatusOptions.push({ key: item.status_uz, value: item.status_uz })
  );
  // uzStatus end
  // Add atibut start
  useEffect(() => {
    axios
      .get(`${env}attributes/attributes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setAddAtribut(data.data));
  }, [token]);
  // Add atibut start
  const ruColorOptions = [
    { key: "В ожидании", value: "" },
    { key: "intex", value: "intex" },
  ];
  const ruAddMatrialOptions = [
    { key: "В ожидании", value: "" },
    { key: "intex", value: "intex" },
  ];

  const selectVal = useRef();
  const [modalInformations, setModalInformations] = useState([]);

  function modalGetValues(evt) {
    evt.preventDefault();
    console.log("salom");
    setShowModal(false);
    if (selectVal.current.value === "Размер") {
      setModalInformations([
        {
          control: "input",
          type: "number",
          label: "Размер",
          name: "ruNewAddedSize",
          placeholder: "0",
        },
      ]);
    } else if (selectVal.current.value === "Цвет") {
      setModalInformations([
        ...modalInformations,
        {
          control: "input",
          type: "text",
          label: "Цвет",
          name: "ruNewAddedColor",
          placeholder: "В ожидании",
        },
      ]);
    } else if (selectVal.current.value === "Материал") {
      setModalInformations([
        ...modalInformations,
        {
          control: "select",
          type: "",
          label: "Материал",
          name: "ruNewAddedMaterial",
          options: ruAddMatrialOptions,
        },
      ]);
    }
  }
  return (
    <div className="relative">
      <span
        onClick={() => setShowModal(true)}
        className="flex items-center absolute -top-6 cursor-pointer right-0 font-medium text-sm text-supportColor"
      >
        <img
          className="mr-2"
          src={Plas}
          alt="IMg plas"
          width="12"
          height="12"
        />
        Добавить атрибуть
      </span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <DropDown
              downClick={atributClicked}
              dropName={"Русский"}
              wDrop={12}
              hdrop={9}
              imgURL={DropImg}
              imgAlt={"Drop img"}
              rotateDelete={
                openAtributes
                  ? "-rotate-180 duration-300"
                  : "-rotate-0 duration-300"
              }
            >
              <div
                className={`${
                  openAtributes ? "h-auto overflow-auto" : "h-0 overflow-hidden"
                } duration-300`}
              >
                <div className="flex mb-6 justify-between">
                  <FormikControl
                    className={"w-[346px]"}
                    control="input"
                    type="number"
                    id="ruAtributprice"
                    label="Цена"
                    name="ruPriceAtribut"
                    placeholder="0"
                  />
                  <FormikControl
                    className={"w-[346px]"}
                    control="input"
                    type="number"
                    id="ruAtributSale"
                    label="Цена со скидкой"
                    name="ruPriceSale"
                    placeholder="0"
                  />
                  <FormikControl
                    control="select"
                    label="Тип продукта"
                    name="ruTypeAtribut"
                    options={dropdownOptions}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <FormikControl
                    className={"w-[346px]"}
                    control="select"
                    label="Статус"
                    name="ruStatus"
                    options={ruStatusOptions}
                  />
                  {modalInformations.map((item) => (
                    <FormikControl
                      className={"w-[346px]"}
                      control={item.control}
                      type={item.type}
                      id="addedAtribut"
                      label={item.label}
                      name={item.name}
                      placeholder={item.placeholder}
                      options={item.options}
                    />
                  ))}
                </div>
              </div>
            </DropDown>
            <DropDown
              downClick={usAtributClicked}
              dropName={"Англиский"}
              wDrop={12}
              hdrop={9}
              imgURL={DropImg}
              imgAlt={"Drop img"}
              rotateDelete={
                enOpenAtributes
                  ? "-rotate-180 duration-300"
                  : "-rotate-0 duration-300"
              }
            >
              <div
                className={`${
                  enOpenAtributes
                    ? "h-auto overflow-auto"
                    : "h-0 overflow-hidden"
                } duration-300`}
              >
                <div className="flex mb-6 justify-between">
                  <FormikControl
                    className={"w-[346px]"}
                    control="input"
                    type="number"
                    id="usAtributprice"
                    label="Цена"
                    name="usPriceAtribut"
                    placeholder="0"
                  />
                  <FormikControl
                    className={"w-[346px]"}
                    control="input"
                    type="number"
                    id="usAtributSale"
                    label="Цена со скидкой"
                    name="usPriceSale"
                    placeholder="0"
                  />
                  <FormikControl
                    control="select"
                    label="Тип продукта"
                    name="usTypeAtribut"
                    options={enCategoryOptions}
                  />
                </div>
                <div className="space-y-6">
                  <FormikControl
                    className={"w-[346px]"}
                    control="select"
                    label="Цвет"
                    name="usColor"
                    options={ruColorOptions}
                  />
                  <FormikControl
                    className={"w-[346px]"}
                    control="select"
                    label="Статус"
                    name="usStatus"
                    options={enStatusOptions}
                  />
                </div>
              </div>
            </DropDown>
            <DropDown
              downClick={uzAtributClicked}
              dropName={"Узбекский"}
              wDrop={12}
              hdrop={9}
              imgURL={DropImg}
              imgAlt={"Drop img"}
              rotateDelete={
                uzOpenAtributes
                  ? "-rotate-180 duration-300"
                  : "-rotate-0 duration-300"
              }
            >
              <div
                className={`${
                  uzOpenAtributes
                    ? "h-auto overflow-auto"
                    : "h-0 overflow-hidden"
                } duration-300`}
              >
                <div className="flex mb-6 justify-between">
                  <FormikControl
                    className={"w-[346px]"}
                    control="input"
                    type="number"
                    id="uzAtributprice"
                    label="Цена"
                    name="uzPriceAtribut"
                    placeholder="0"
                  />
                  <FormikControl
                    className={"w-[346px]"}
                    control="input"
                    type="number"
                    id="uzAtributSale"
                    label="Цена со скидкой"
                    name="uzPriceSale"
                    placeholder="0"
                  />
                  <FormikControl
                    control="select"
                    label="Тип продукта"
                    name="uzTypeAtribut"
                    options={uzCategoryOptions}
                  />
                </div>
                <div className="space-y-6">
                  <FormikControl
                    className={"w-[346px]"}
                    control="select"
                    label="Цвет"
                    name="uzColor"
                    options={ruColorOptions}
                  />
                  <FormikControl
                    className={"w-[346px]"}
                    control="select"
                    label="Статус"
                    name="uzStatus"
                    options={uzStatusOptions}
                  />
                </div>
              </div>
            </DropDown>

            <div className="flex mt-6 pb-8 items-center justify-center space-x-5">
              <button
                className="py-3 bg-resetBtn rounded-2xl w-submitBtnsWidth text-russuanColor font-bold text-lg"
                type="reset"
              >
                Отменить
              </button>
              <button
                className="py-3 text-white rounded-2xl w-submitBtnsWidth bg-submitBtnBg font-bold text-lg"
                type="submit"
              >
                Cледующий
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="w-modalWidth ">
          <div className="flex items-center justify-between mb-6">
            <h2>Добавить атрибуть</h2>
            <img
              className="cursor-pointer"
              onClick={() => setShowModal(false)}
              src={DelteModal}
              alt="Delete Modal"
              width={32}
              height={32}
            />
          </div>
          <form onSubmit={modalGetValues}>
            <label className="flex flex-col w-[48%]">
              Тип атрибуты
              <select ref={selectVal} className="p-4 border-2 rounded-lg mt-3">
                {addAtribut.map((item) => (
                  <option key={item.id}>{item.attribute_ru}</option>
                ))}
              </select>
            </label>
            <div className="flex mt-6 items-center justify-center space-x-5">
              <button
                className="py-3 bg-resetBtn rounded-2xl w-submitBtnsWidth text-russuanColor font-bold text-lg"
                type="reset"
              >
                Отменить
              </button>
              <button
                className="py-3 text-white rounded-2xl w-submitBtnsWidth bg-submitBtnBg font-bold text-lg"
                type="submit"
              >
                Cледующий
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

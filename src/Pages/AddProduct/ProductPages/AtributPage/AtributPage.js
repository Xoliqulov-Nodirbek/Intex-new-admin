import React, { useState } from "react";
import Plas from "../../../../Assets/Images/HomeContentImg/plas-icon.svg";
import { Modal } from "../../../../components/Modal/Modal";
import DelteModal from "../../../../Assets/Images/HomeContentImg/deleteModal.svg";
import FormikControl from "../../../../BaseComponents/FormInput/FormikControl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import DropDown from "../../../../BaseComponents/DropDown/DropDown";
import DropImg from "../../../../Assets/Images/HomeContentImg/Drop.svg";
export default function AtributPage({
  atributInfo,
  setAtributInfo,
  productBasic,
  imaPage,
  atributPage,
}) {
  const [openInformation, setOpenInformation] = useState(true);
  const [usDrop, setUsDrop] = useState(false);
  const [uzDrop, setUzDrop] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openAtributes, setOpenAtributes] = useState(false);
  const atributClicked = () => {
    setOpenAtributes(!openAtributes);
  };
  const initialValues = {};
  const validationSchema = Yup.object({
    ruName: Yup.string().required("Required"),
  });
  const dropdownOptions = [
    { key: "В ожидании", value: "" },
    { key: "Option1", value: "option 1" },
    { key: "Option2", value: "option 2" },
    { key: "Option3", value: "option 3" },
  ];
  const onSubmit = (values, { resetForm }) => {
    atributPage(false);
    imaPage(false);
    productBasic(true);
    // console.log(values);
    setAtributInfo([
      ...atributInfo,
      {
        atributInfos: {
          ru: {
            ruNamePro: values.ruName,
            ruWork: values.ruProiz,
            ruTexrArea: values.ruText,
            ruConutry: values.usCountry,
            ruCategory: values.ruProduct,
            ruPrice: values.ruPriceNum,
          },
          us: {
            usNamePro: values.usName,
            usWork: values.usProiz,
            usTexrArea: values.usText,
            usConutry: values.usCountry,
            usCategory: values.usProduct,
            usPrice: values.usPriceNum,
          },
          uz: {
            uzNamePro: values.uzName,
            uzWork: values.uzProiz,
            uzTexrArea: values.uzText,
            uzConutry: values.uzCountry,
            uzCategory: values.uzProduct,
            uzPrice: values.uzPriceNum,
          },
        },
      },
    ]);
    resetForm();
  };
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
                } flex justify-between duration-300`}
              >
                <div className="flex flex-col justify-between w-[50%]">
                  <div className="flex flex-col mb-6 justify-between">
                    <FormikControl
                      control="input"
                      type="name"
                      id="name"
                      label="Название продукта"
                      name="ruName"
                      placeholder="Каркасный басейн Intex прямоуголь.."
                    />
                    <FormikControl
                      control="select"
                      label="Призводства"
                      name="ruProiz"
                      options={dropdownOptions}
                    />
                    <FormikControl
                      control="select"
                      label="Призводства"
                      name="ruProiz"
                      options={dropdownOptions}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <FormikControl
                    control="select"
                    label="Страна призводства"
                    name="ruCountry"
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control="input"
                    type="number"
                    id="name"
                    label="Категория"
                    name="ruPriceNum"
                    placeholder="Введите количество продукта"
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
        <div className="w-modalWidth py-7 px-6">
          <div className="flex items-center justify-between mb-6">
            <h2>Добавить атрибуть</h2>
            <img src={DelteModal} alt="Delete Modal" width={32} height={32} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

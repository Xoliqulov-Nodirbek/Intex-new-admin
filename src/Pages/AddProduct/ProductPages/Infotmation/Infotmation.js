import { useState } from "react";
import FormikControl from "../../../../BaseComponents/FormInput/FormikControl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import DropDown from "../../../../BaseComponents/DropDown/DropDown";
import DropImg from "../../../../Assets/Images/HomeContentImg/Drop.svg";

function Infotmation({ submitProduct, imagesPage, atributPage, setInfoForm }) {
  const [openDown, setOpenDown] = useState(false);
  const [engDrop, setEngDrop] = useState(false);
  const [uzDrop, setUzDrop] = useState(false);
  const initialValues = {
    ruName: "",
    ruProiz: "",
    ruText: "",
    ruCountry: "",
    ruProduct: "",
    ruPriceNum: "",
    usName: "",
    usProiz: "",
    ustext: "",
    usCountry: "",
    usProduct: "",
    usPriceNum: "",
    uzName: "",
    uzProiz: "",
    uztext: "",
    uzCountry: "",
    uzProduct: "",
    uzPriceNum: "",
  };
  const validationSchema = Yup.object({
    ruName: Yup.string().required("Required"),
    ruProiz: Yup.string().required("Required"),
    ruText: Yup.string().required("Required"),
    ruCountry: Yup.string().required("Required"),
    ruProduct: Yup.string().required("Required"),
    ruPriceNum: Yup.number().required("Required"),
    usName: Yup.string().required("Required"),
    usProiz: Yup.string().required("Required"),
    usText: Yup.string().required("Required"),
    usCountry: Yup.string().required("Required"),
    usProduct: Yup.string().required("Required"),
    usPriceNum: Yup.number().required("Required"),
    uzName: Yup.string().required("Required"),
    uzProiz: Yup.string().required("Required"),
    uzText: Yup.string().required("Required"),
    uzCountry: Yup.string().required("Required"),
    uzProduct: Yup.string().required("Required"),
    uzPriceNum: Yup.number().required("Required"),
  });
  const dropdownOptions = [
    { key: "В ожидании", value: "" },
    { key: "Option1", value: "option 1" },
    { key: "Option2", value: "option 2" },
    { key: "Option3", value: "option 3" },
  ];
  const dawnElClick = () => {
    setOpenDown(!openDown);
    setUzDrop(false);
    setEngDrop(false);
  };
  const engDropDown = () => {
    setOpenDown(false);
    setEngDrop(!engDrop);
    setUzDrop(false);
  };
  const uzbdropDown = () => {
    setOpenDown(false);
    setEngDrop(false);
    setUzDrop(!uzDrop);
  };
  const onSubmit = (values, { resetForm }) => {
    // console.log(values);
    imagesPage(true);
    submitProduct(false);
    atributPage(false);
    setInfoForm([
      {
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
    ]);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <DropDown
              downClick={dawnElClick}
              dropName={"Русский"}
              wDrop={12}
              hdrop={9}
              imgURL={DropImg}
              imgAlt={"Drop img"}
              rotateDelete={
                openDown ? "-rotate-180 duration-300" : "-rotate-0 duration-300"
              }
            >
              <div
                className={`${
                  openDown ? "h-auto overflow-auto" : "h-0 overflow-hidden"
                } flex justify-between duration-300`}
              >
                <div className="flex flex-col justify-between w-[65%]">
                  <div className="flex mb-6 justify-between">
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
                  </div>
                  <FormikControl
                    control="textarea"
                    label="Description"
                    name="ruText"
                    placeholder="Введите Описание продукта"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <FormikControl
                    control="select"
                    label="Страна призводства"
                    name="ruCountry"
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Категория"
                    name="ruProduct"
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
            <DropDown
              downClick={engDropDown}
              dropName={"English"}
              wDrop={12}
              hdrop={9}
              imgURL={DropImg}
              imgAlt={"Drop img"}
              rotateDelete={
                engDrop ? "-rotate-180 duration-300" : "-rotate-0 duration-300"
              }
            >
              <div
                className={`${
                  engDrop ? "h-auto overflow-auto" : "h-0 overflow-hidden"
                } flex justify-between duration-300`}
              >
                <div className="flex flex-col justify-between w-[65%]">
                  <div className="flex mb-6 justify-between">
                    <FormikControl
                      control="input"
                      type="name"
                      id="name"
                      label="Название продукта"
                      name="usName"
                      placeholder="Каркасный басейн Intex прямоуголь.."
                    />
                    <FormikControl
                      control="select"
                      label="Призводства"
                      name="usProiz"
                      options={dropdownOptions}
                    />
                  </div>
                  <FormikControl
                    control="textarea"
                    label="Description"
                    name="usText"
                    placeholder="Введите Описание продукта"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <FormikControl
                    control="select"
                    label="Страна призводства"
                    name="usCountry"
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Категория"
                    name="usProduct"
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control="input"
                    type="number"
                    id="name"
                    label="Категория"
                    name="usPriceNum"
                    placeholder="Введите количество продукта"
                  />
                </div>
              </div>
            </DropDown>
            <DropDown
              downClick={uzbdropDown}
              dropName={"O’zbekcha"}
              wDrop={12}
              hdrop={9}
              imgURL={DropImg}
              imgAlt={"Drop img"}
              rotateDelete={
                uzDrop ? "-rotate-180 duration-300" : "-rotate-0 duration-300"
              }
            >
              <div
                className={`${
                  uzDrop ? "h-auto overflow-auto" : "h-0 overflow-hidden"
                } flex justify-between duration-300`}
              >
                <div className="flex flex-col justify-between w-[65%]">
                  <div className="flex mb-6 justify-between">
                    <FormikControl
                      control="input"
                      type="name"
                      id="uzName"
                      label="Название продукта"
                      name="uzName"
                      placeholder="Каркасный басейн Intex прямоуголь.."
                    />
                    <FormikControl
                      control="select"
                      label="Призводства"
                      name="uzProiz"
                      options={dropdownOptions}
                    />
                  </div>
                  <FormikControl
                    control="textarea"
                    label="Description"
                    name="uzText"
                    placeholder="Введите Описание продукта"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <FormikControl
                    control="select"
                    label="Страна призводства"
                    name="uzCountry"
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Категория"
                    name="uzProduct"
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control="input"
                    type="number"
                    id="name"
                    label="Категория"
                    name="uzPriceNum"
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
    </>
  );
}

export default Infotmation;

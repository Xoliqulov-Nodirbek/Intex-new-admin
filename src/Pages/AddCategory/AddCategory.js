import React, { useState } from "react";
import DropDown from "../../BaseComponents/DropDown/DropDown";
import DropImg from "../../Assets/Images/HomeContentImg/Drop.svg";
import FormikControl from "../../BaseComponents/FormInput/FormikControl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
export default function AddCategory() {
  const [showContent, setShowContent] = useState(true);
  const [enShowContent, setEnShowContent] = useState(false);
  const [uzShowContent, setUzShowContent] = useState(false);
  const initialValues = {
    ruPoolName: "",
    ruPooltype: "",
  };
  const validationSchema = Yup.object({
    ruPoolName: Yup.string().required("Required"),
    ruPooltype: Yup.string().required("Required"),
  });
  const dawnElClick = () => {
    setShowContent(!showContent);
    setEnShowContent(false);
    setUzShowContent(false);
  };
  const engClickedcategory = () => {
    setEnShowContent(!enShowContent);
    setShowContent(false);
    setUzShowContent(false);
  };
  const uzClickedcategory = () => {
    setUzShowContent(!uzShowContent);
    setEnShowContent(false);
    setShowContent(false);
  };
  // const dropdownOptions = [
  //   { key: "В ожидании", value: "" },
  //   { key: "Option1", value: "option 1" },
  //   { key: "Option2", value: "option 2" },
  //   { key: "Option3", value: "option 3" },
  // ];
  const onSubmit = (values, { resetForm }) => {
    // console.log(values);
    resetForm();
  };
  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl mb-6">Добавить категорию</h2>
      <div className="bg-white p-6 rounded-xl">
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
                  showContent
                    ? "-rotate-180 duration-300"
                    : "-rotate-0 duration-300"
                }
              >
                <div
                  className={`${
                    showContent ? "h-auto overflow-auto" : "h-0 overflow-hidden"
                  } duration-300`}
                >
                  <div className="flex justify-between">
                    <FormikControl
                      className={"w-[35%]"}
                      control="input"
                      type="name"
                      id="name"
                      label="Название категорию"
                      name="ruPoolName"
                      placeholder="Каркасный бассейны."
                    />
                    <FormikControl
                      className={"w-[62%]"}
                      control="input"
                      type="name"
                      id="name"
                      label="Под категория"
                      name="ruPooltype"
                      placeholder="Введите количество продукта"
                    />
                  </div>
                </div>
              </DropDown>
              <DropDown
                downClick={engClickedcategory}
                dropName={"English"}
                wDrop={12}
                hdrop={9}
                imgURL={DropImg}
                imgAlt={"Drop img"}
                rotateDelete={
                  enShowContent
                    ? "-rotate-180 duration-300"
                    : "-rotate-0 duration-300"
                }
              >
                <div
                  className={`${
                    enShowContent
                      ? "h-auto overflow-auto"
                      : "h-0 overflow-hidden"
                  } duration-300`}
                >
                  <div className="flex justify-between">
                    <FormikControl
                      className={"w-[35%]"}
                      control="input"
                      type="name"
                      id="name"
                      label="Название категорию"
                      name="ruPoolName"
                      placeholder="Каркасный бассейны."
                    />
                    <FormikControl
                      className={"w-[62%]"}
                      control="input"
                      type="name"
                      id="name"
                      label="Под категория"
                      name="ruPooltype"
                      placeholder="Введите количество продукта"
                    />
                  </div>
                </div>
              </DropDown>
              <DropDown
                downClick={uzClickedcategory}
                dropName={"O’zbekcha"}
                wDrop={12}
                hdrop={9}
                imgURL={DropImg}
                imgAlt={"Drop img"}
                rotateDelete={
                  uzShowContent
                    ? "-rotate-180 duration-300"
                    : "-rotate-0 duration-300"
                }
              >
                <div
                  className={`${
                    uzShowContent
                      ? "h-auto overflow-auto"
                      : "h-0 overflow-hidden"
                  } duration-300`}
                >
                  <div className="flex justify-between">
                    <FormikControl
                      className={"w-[35%]"}
                      control="input"
                      type="name"
                      id="name"
                      label="Название категорию"
                      name="ruPoolName"
                      placeholder="Каркасный бассейны."
                    />
                    <FormikControl
                      className={"w-[62%]"}
                      control="input"
                      type="name"
                      id="name"
                      label="Под категория"
                      name="ruPooltype"
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
      </div>
    </div>
  );
}

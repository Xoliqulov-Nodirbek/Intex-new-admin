import { useEffect, useState } from "react";
import FormikControl from "../../../../BaseComponents/FormInput/FormikControl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import DropDown from "../../../../BaseComponents/DropDown/DropDown";
import DropImg from "../../../../Assets/Images/HomeContentImg/Drop.svg";
import axios from "axios";

const env = process.env.REACT_APP_ALL_API;

function Infotmation({ submitProduct, imagesPage, atributPage, setInfoForm }) {
  const [openDown, setOpenDown] = useState(true);
  const [engDrop, setEngDrop] = useState(false);
  const [uzDrop, setUzDrop] = useState(false);
  const [infoDate, setInfoDate] = useState([]);
  const [manufact, setManufact] = useState([]);
  const [enManufact, setEnManufact] = useState([]);
  const [uzManufact, setUzManufact] = useState([]);
  const [ruCategory, setRuCategory] = useState([]);
  const [enCategory, setEnCategory] = useState([]);
  const [uzCategory, setUzCategory] = useState([]);
  const [enCountry, setEnCountry] = useState([]);
  const [uzCountry, setUzCountry] = useState([]);

  const token = JSON.parse(window.localStorage.getItem("token"));

  // country options starts
  useEffect(() => {
    axios.get(`${env}countries/getAll`).then((data) => setInfoDate(data.data));
  }, []);

  const dropdownOptions = [{ key: "В ожидании", value: "" }];
  infoDate.map((item) =>
    dropdownOptions.push({ key: item.country_ru, value: item.country_ru })
  );
  // country options end

  // enCountry options starts
  useEffect(() => {
    axios.get(`${env}countries/getAll`).then((data) => setEnCountry(data.data));
  }, []);

  const enDropdownOptions = [{ key: "В ожидании", value: "" }];
  enCountry.map((item) =>
    enDropdownOptions.push({ key: item.country_en, value: item.country_en })
  );
  // enCountry options end

  // uzCountry options starts
  useEffect(() => {
    axios.get(`${env}countries/getAll`).then((data) => setUzCountry(data.data));
  }, []);

  const uzDropdownOptions = [{ key: "В ожидании", value: "" }];
  uzCountry.map((item) =>
    uzDropdownOptions.push({ key: item.country_uz, value: item.country_uz })
  );
  // uzCountry options end

  // Призводства options start
  useEffect(() => {
    axios
      .get(`${env}manufacturers/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setManufact(data.data));
  }, [token]);
  const factoryNames = [{ key: "В ожидании", value: "" }];
  manufact.map((item) =>
    factoryNames.push({
      key: item.manufacturer_ru,
      value: item.manufacturer_ru,
    })
  );
  // Призводства options end

  // enПризводства options start
  useEffect(() => {
    axios
      .get(`${env}manufacturers/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setEnManufact(data.data));
  }, [token]);
  const enfactoryNames = [{ key: "В ожидании", value: "" }];
  enManufact.map((item) =>
    enfactoryNames.push({
      key: item.manufacturer_en,
      value: item.manufacturer_en,
    })
  );
  // enПризводства options end

  // enПризводства options start
  useEffect(() => {
    axios
      .get(`${env}manufacturers/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setUzManufact(data.data));
  }, [token]);
  const uzfactoryNames = [{ key: "В ожидании", value: "" }];
  uzManufact.map((item) =>
    uzfactoryNames.push({
      key: item.manufacturer_uz,
      value: item.manufacturer_uz,
    })
  );
  // enПризводства options end

  //Category options start
  useEffect(() => {
    axios
      .get(`${env}categories/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setRuCategory(data.data));
  }, [token]);
  const ruCategoryOptions = [{ key: "В ожидании", value: "" }];
  ruCategory.map((item) =>
    ruCategoryOptions.push({ key: item.category_ru, value: item.category_ru })
  );
  //Category options End

  //enCategory options start
  useEffect(() => {
    axios
      .get(`${env}categories/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setEnCategory(data.data));
  }, [token]);
  const enCategoryOptions = [{ key: "В ожидании", value: "" }];
  enCategory.map((item) =>
    enCategoryOptions.push({ key: item.category_en, value: item.category_en })
  );
  //enCategory options End

  //enCategory options start
  useEffect(() => {
    axios
      .get(`${env}categories/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setUzCategory(data.data));
  }, [token]);
  const uzCategoryOptions = [{ key: "В ожидании", value: "" }];
  uzCategory.map((item) =>
    uzCategoryOptions.push({ key: item.category_uz, value: item.category_uz })
  );
  //enCategory options End

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
                      className={"w-[346px]"}
                      control="input"
                      type="name"
                      id="name"
                      label="Название продукта"
                      name="ruName"
                      placeholder="Каркасный басейн Intex прямоуголь.."
                    />
                    <FormikControl
                      className={"w-[346px]"}
                      control="select"
                      label="Призводства"
                      name="ruProiz"
                      options={factoryNames}
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
                    className={"w-[346px]"}
                    control="select"
                    label="Страна призводства"
                    name="ruCountry"
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Категория"
                    name="ruProduct"
                    options={ruCategoryOptions}
                  />
                  <FormikControl
                    className={"w-[346px]"}
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
                      className={"w-[346px]"}
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
                      options={enfactoryNames}
                    />
                  </div>
                  <FormikControl
                    control="textarea"
                    label="Описание продукта "
                    name="usText"
                    placeholder="Введите Описание продукта"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <FormikControl
                    control="select"
                    label="Страна призводства"
                    name="usCountry"
                    options={enDropdownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Категория"
                    name="usProduct"
                    options={enCategoryOptions}
                  />
                  <FormikControl
                    control="input"
                    className={"w-[346px]"}
                    type="number"
                    id="name"
                    label="Количество"
                    name="usPriceNum"
                    placeholder="
                    Введите количество продукта
                    Enter the product quantity"
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
                      className={"w-[346px]"}
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
                      options={uzfactoryNames}
                    />
                  </div>
                  <FormikControl
                    control="textarea"
                    label="Страна призводства"
                    name="uzText"
                    placeholder="Введите Описание продукта"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <FormikControl
                    control="select"
                    label="Страна призводства"
                    name="uzCountry"
                    options={uzDropdownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Категория"
                    name="uzProduct"
                    options={uzCategoryOptions}
                  />
                  <FormikControl
                    control="input"
                    type="number"
                    className={"w-[346px]"}
                    id="name"
                    label="Количество"
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

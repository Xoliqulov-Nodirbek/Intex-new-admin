import { useState } from 'react'
import DropDown from '../../../../BaseComponents/DropDown/DropDown'
import DropImg from '../../../../Assets/Images/HomeContentImg/Drop.svg'
import * as Yup from 'yup'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import { FormikConsumer, useFormik } from 'formik'
import MButton from '../../../../BaseComponents/MButton/MButton'
import { AtributeRu } from '../../../../BaseComponents/TagsInput/AddAtribut'

const initialValues = {
  price: '',
  salePrice: '',
  type: '',
  status: '',
}

const onSubmit = (values, { resetForm }) => {
  console.log(values)
  resetForm()
}

const validationSchema = Yup.object({
  price: Yup.number().required('Price value is required'),
  salePrice: Yup.number().required(
    'Saleprice value is required',
  ),
  type: Yup.string().required('Type option is required'),
  status: Yup.string().required('Status option is required'),
})

export default function AtributPage() {
  const [navBarDrop, setNavBarDrop] = useState(false)
  const [navBarDrop1, setNavBarDrop1] = useState(false)
  const [navBarDrop2, setNavBarDrop2] = useState(false)
  const [Atribute_ru, setAtribute_ru] = useState([])

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })
  return (
    <div>
      <form
        onSubmit={(e) => {
          formik.handleSubmit(e)
          formik.values = initialValues
        }}
        className=" flex flex-col"
      >
        <DropDown
          dropName="Русский"
          imgAlt="dropimg"
          wDrop="12"
          hdrop="9"
          downClick={() => setNavBarDrop(!navBarDrop)}
          imgURL={DropImg}
          rotateDelete={navBarDrop ? '-rotate-180' : '-rotate-0'}
        >
          <div
            className={
              navBarDrop ? 'h-auto overflow-auto pr-5' : 'h-0 overflow-hidden'
            }
          >
            <div className="flex justify-between ">
              <div className="relative">
                <label className="text-base flex flex-col">Цена</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="1 290 000"
                  className={
                    formik.touched.price && formik.errors.price
                      ? '  h-12 w-[340px] text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-3 sm:mb-6'
                      : '  h-12 w-[340px] text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-3 sm:mb-6'
                  }
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps('price')}
                />
                {formik.touched.price && formik.errors.price ? (
                  <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
                    {formik.errors.price}
                  </span>
                ) : null}
                <span className="absolute top-9 left-[295px]">Сум</span>
              </div>
              <div className="relative">
                <label className="text-base flex flex-col">
                  Цена со скидкой
                </label>
                <input
                  type="number"
                  name="salePrice"
                  id="salePrice"
                  placeholder="1 290 000"
                  className={
                    formik.touched.salePrice && formik.errors.salePrice
                      ? '  h-12 w-[340px] text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-3 sm:mb-6'
                      : '  h-12 w-[340px] text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-3 sm:mb-6'
                  }
                  minLength="3"
                  maxLength="25"
                  {...formik.getFieldProps('salePrice')}
                />
                {formik.touched.salePrice && formik.errors.salePrice ? (
                  <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
                    {formik.errors.salePrice}
                  </span>
                ) : null}
                <span className="absolute top-9 left-[295px]">Сум</span>
              </div>

              <div className="relative">
                <label className="text-base flex flex-col">Тип продукта</label>
                <select
                  name="type"
                  id="type"
                  className={
                    formik.touched.type && formik.errors.type
                      ? ' h-12 w-[340px] px-3 text-base rounded-lg outline-none border border-red-600 mb-3 sm:mb-6'
                      : ' h-12 w-[340px] px-3  text-base rounded-lg outline-none border border-gray-input_radius mb-3 sm:mb-6'
                  }
                  {...formik.getFieldProps('type')}
                >
                  <option>salom</option>
                  <option>bor</option>
                </select>
                {formik.touched.type && formik.errors.type ? (
                  <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
                    {formik.errors.type}
                  </span>
                ) : null}
              </div>
            </div>
            <AtributeRu Atribute_ru={Atribute_ru} setAtribute_ru={setAtribute_ru} /> 
            <div className="relative">
                <label className="text-base flex flex-col">Статус</label>
                <select
                  name="status"
                  id="status"
                  className={
                    formik.touched.status && formik.errors.status
                      ? ' h-12 w-[340px] px-3 text-base rounded-lg outline-none border border-red-600 mb-3 sm:mb-6'
                      : ' h-12 w-[340px] px-3  text-base rounded-lg outline-none border border-gray-input_radius mb-3 sm:mb-6'
                  }
                  {...formik.getFieldProps('status')}
                >
                  <option>Рекомендуем</option>
                  <option>В ожидании</option>
                  <option>В проссесе</option>
                </select>
                {formik.touched.status && formik.errors.status ? (
                  <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
                    {formik.errors.status}
                  </span>
                ) : null}
              </div>
          </div>
        </DropDown>
        <DropDown
          dropName="Англиский"
          imgAlt="dropimg"
          wDrop="12"
          hdrop="9"
          downClick={() => setNavBarDrop1(!navBarDrop1)}
          imgURL={DropImg}
          rotateDelete={navBarDrop1 ? '-rotate-180' : '-rotate-0'}
        >
          <div
            className={
              navBarDrop1 ? 'h-auto overflow-auto' : 'h-0 overflow-hidden'
            }
          >
            <h1>asdf</h1>
          </div>
        </DropDown>
        <DropDown
          dropName="Узбекский"
          imgAlt="dropimg"
          wDrop="12"
          hdrop="9"
          downClick={() => setNavBarDrop2(!navBarDrop2)}
          imgURL={DropImg}
          rotateDelete={navBarDrop2 ? '-rotate-180' : '-rotate-0'}
        >
          <div
            className={
              navBarDrop2 ? 'h-auto overflow-auto' : 'h-0 overflow-hidden'
            }
          >
            <h1>asdf</h1>
          </div>
        </DropDown>

        <MButton BType="next" type="submit">
          submit
        </MButton>
      </form>
    </div>
  )
}

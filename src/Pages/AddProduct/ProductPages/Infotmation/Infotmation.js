 import {BImg, UImg, IImg, FullEaquals, LeftEaquals, RightEquals,Fix } from "./InfoImgs"
 function Infotmation() {
  return (
    <div>
      <div className='flex items-center justify-between py-6 cursor-pointer'>
        <h2>Русский</h2>
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7.29053L7 1.29053L1 7.29053" stroke="#2B3D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <form className=''>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col w-[32%]'>
            <label className='mb-3'>Название продукта</label>
            <input className='p-4 rounded-lg border border-solid border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4' type="text" placeholder='Каркасный басейн Intex прямоуголь..' autoComplete='off' />
          </div>
          <div className='flex flex-col w-[32%]'>
            <label className='mb-3'>Призводства</label>
            <select id='proSelect' className='p-selectInp rounded-lg appearance-none border border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4'>
              <option selected className='text-addProductLinks' value="">Выберите призводству продукта</option>
            </select>
          </div>
          <div className='flex flex-col w-[32%]'>
            <label className='mb-3'>Страна призводства</label>
            <select id='proSelect' className='p-selectInp rounded-lg appearance-none border border-solid text-addProductLinks border-addProductLinks outline-none placeholder:text-base placeholder:font-normal leading-4'>
              <option selected className='text-addProductLinks' value="">Выберите страна призводства</option>
            </select>
          </div>
        </div>
        <div className='mt-6'>
          <h3 className='font-medium text-base leading-4 mb-3'>Описание продукта</h3>
          <div>
            <div className="flex items-center space-x-2.5"> 
                <BImg boldClass={() => console.log("B")} />
                <UImg underClass={() => console.log("U")}/>
                <IImg italicClass={() => console.log("I")}/>
                <FullEaquals fullClass={() => console.log("Full")}/>
                <LeftEaquals leftClass={() => console.log("Left")}/>
                <RightEquals rightClass={() => console.log("Right")}/>
                <Fix fixClass={() => console.log("Fix")}/>
            </div>
            <textarea placeholder='Введите Описание продукта' cols={87} rows={5}>
            </textarea>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Infotmation
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import HomeImg from "../../Assets/Images/HeaderImgs/HomeImg.svg"
import MButton from '../../BaseComponents/MButton/MButton'
import OrderPage from './OrderPage'

export default function Home() {
  const [showModal, setShowMoadal] = useState(false);
  return (
    <>
      <div className="bg-white flex items-center w-full pt-1.5 pb-1.5 px-8">
        <Link className="flex items-center" to={'/'}>
          <img src={HomeImg} alt="Home Img" width="16" height="16" />
        </Link>
        <span className='ml-2.5 text-navSubColor '>/</span>
        <Link to="/order">
          <h2 className='font-normal text-navSubColor text-xs ml-2.5'>Заказы</h2>
        </Link>
      </div>
      <div className='pt-6 pb-8 px-homeContentPadding '>
        <div>
          <h2 className='text-navBarColor font-bold leading-8 text-2xl mb-4'>Заказы</h2>
          <div className='bg-white py-3 px-4 rounded-xl flex items-center justify-between'>
            <div className='flex items-center'>
              <MButton BType='filter bg-filterBg' type='button' >Фильтр</MButton>
              <input id='homeSearch' className='py-3 ml-4 w-homeInpWidth outline-none pl-9 pr-3 rounded-xl bg-headerInpBg' type="text" placeholder='Поиск товара' autoComplete='off' />
            </div>
            <div className='flex items-center'>
              <strong className='font-semibold text-base text-homeColor mr-2.5'>Сортировка</strong>
              <div className='w-homeSortWidth cursor-pointer mr-6 flex items-center justify-between bg-headerInpBg p-3 rounded-xl'>
                <span className='font-medium text-sm text-homeSortWrap'>По А-Я</span>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L15 11" stroke="#04009A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <button  onClick={()=> setShowMoadal(true)} BType='add bg-filterBg'  className='add bg-filterBg' type='button'>Добавить</button>
            </div>
          </div>
        </div>
      </div>
      <button BType='add bg-filterBg'  className='add bg-filterBg' type='button'>Добавить</button>

      <OrderPage isVisible={showModal} onClose={()=>{ setShowMoadal(false)}}/>
    </>
  )
}

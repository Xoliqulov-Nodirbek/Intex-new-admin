import React, { useRef, useState } from "react";
import DounloadImg from "../../../../Assets/Images/HomeContentImg/dounload.svg";
import uploadImg from "../../../../Assets/Images/HomeContentImg/upload.svg";
import delterImg from "../../../../Assets/Images/HomeContentImg/delete.svg";

export default function Images({
  productPage,
  imagePage,
  atrPage,
  imgInfo,
  setImgInfo,
}) {
  const [img, setImg] = useState([]);
  const handlChange = (evt) => {
    const newImg = {
      img: window.URL.createObjectURL(evt.target.files[0]),
      id: img.length ? img[img.length - 1].id + 1 : 0,
    };
    setImg([...img, newImg]);
  };
  const handlImgSubmit = (evt) => {
    evt.preventDefault();
    atrPage(true);
    productPage(false);
    imagePage(false);
    setImgInfo([
      ...imgInfo,
      {
        imgUrl: {
          basicImg: img,
        },
      },
    ]);
  };
  return (
    <form onSubmit={handlImgSubmit} className="">
      <h2 className="my-6 mb-4 font-medium  text-base">Изображение</h2>
      <label className="inline-block cursor-pointer">
        <input onChange={handlChange} className="visually-hidden" type="file" />
        <div className="bg-headerInpBg w-douloadWrap py-8 text-center rounded-xl">
          <img
            className="mx-auto mb-2"
            src={DounloadImg}
            alt="dounload img"
            width={60}
            height={60}
          />
          <p className="font-normal text-sm leading-lead">
            Загрузите изображения продукта
          </p>
        </div>
      </label>
      <div className="flex ">
        {img.map((item) => (
          <div key={item.id} className="relative inline-block w-40 h-28">
            <div className="absolute flex items-center space-x-1 top-1 right-1 cursor-pointer">
              <img src={uploadImg} alt="Upload" width={32} height={32} />
              <img
                id={item.id}
                src={delterImg}
                alt="Delete img"
                width={32}
                height={32}
              />
            </div>
            <img
              className="h-full"
              src={item.img}
              alt="Choose img"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
      <div className="mt-submitBtn flex items-center justify-center space-x-5">
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
  );
}

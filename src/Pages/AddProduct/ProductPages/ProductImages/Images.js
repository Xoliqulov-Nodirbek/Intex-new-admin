import { useState } from "react";
import Dounload from "../../../../Assets/Images/HomeContentImg/dounload.svg";
import delterImgAdded from "../../../../Assets/Images/HomeContentImg/addedImgDel.svg";
import delterImgUnAdded from "../../../../Assets/Images/HomeContentImg/addUnUpload.svg";
import MButton from "../../../../BaseComponents/MButton/MButton";
import axios from "axios";
export default function Images({ img, atrbut }) {
  const [imgUrl, setImgUrl] = useState([]);
  const [getImg, setGetImg] = useState([]);
  const arr = [imgUrl[0]?.url];
  const token = window.localStorage.getItem("token");
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
  // let aren = [];
  // imgUrl.map((item) => aren.push(item.url));

  function handldelete(id) {
    let newTodo = getImg.filter((e) => e.id !== id);
    let newDelImg = imgUrl.filter((e) => e.id !== id);
    setGetImg(newTodo);
    setImgUrl(newDelImg);
  }
  let formdata = new FormData();
  const getResultInfo = (e) => {
    e.preventDefault();
    formdata.append("image", arr[0]);
    img(false);
    atrbut(true);
    axios
      .post(
        `https://web-production-5638.up.railway.app/api/media/create`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          window.localStorage.setItem(
            "image",
            JSON.stringify(res.data.image[0])
          );
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={getResultInfo}>
      <h2 className="font-medium text-base mt-6">Изображение</h2>
      <label className="inline-block mb-4   ">
        <input
          onChange={findNewImg}
          className="visually-hidden"
          type="file"
        ></input>
        <div className="cursor-pointer w-productImgUploadWidth py-8 bg-bgUpload rounded-xl text-center">
          <img
            className="mx-auto mb-1"
            src={Dounload}
            alt="dounload"
            width="60"
            height="60"
          />
          <p>Загрузите изображения продукта</p>
        </div>
      </label>
      <div className="">
        <h2 className="font-semibold text-lg text-paginationButtonColor mb-4">
          Изображение
        </h2>
        <div className="flex items-center space-x-3">
          {getImg.map((item) => (
            <div key={Math.random()} className="relative">
              <img
                className="rounded-xl shadow-shadowAddImgs"
                src={item.img}
                alt="Upload img"
                width="163"
                height="116"
              />
              <div className="flex cursor-pointer items-center space-x-2 absolute top-2.5 right-2">
                <img
                  src={delterImgUnAdded}
                  alt="delete img"
                  width="32"
                  height="32"
                />
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
      <div className="flex items-center justify-center space-x-5 mt-6 pb-6">
        <MButton BType="reject" type="reset">
          Отменить
        </MButton>
        <MButton BType="next" type="submit">
          Submit
        </MButton>
      </div>
    </form>
  );
}

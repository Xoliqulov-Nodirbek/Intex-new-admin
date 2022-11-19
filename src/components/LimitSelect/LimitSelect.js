import React from "react";

export default function LimitSelect() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <select className="rounded-md bg-[#f2f2f2] outline-none w-12 px-1 mr-3">
      {data.length && data.map((e) => <option key={e} value={e}>{e}</option>)}
    </select>
  );
}

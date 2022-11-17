import React from "react";
function BImg({ boldClass, activeText }) {
  return (
    <svg
      className={`cursor-pointer ${activeText}`}
      onClick={boldClass}
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6.29053H7.5C8.03043 6.29053 8.53914 6.50124 8.91421 6.87631C9.28929 7.25139 9.5 7.76009 9.5 8.29053C9.5 8.82096 9.28929 9.32967 8.91421 9.70474C8.53914 10.0798 8.03043 10.2905 7.5 10.2905H3V6.29053Z"
        stroke="#666666"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 2.29053H7C7.53043 2.29053 8.03914 2.50124 8.41421 2.87631C8.78929 3.25139 9 3.76009 9 4.29053C9 4.82096 8.78929 5.32967 8.41421 5.70474C8.03914 6.07981 7.53043 6.29053 7 6.29053H3V2.29053Z"
        stroke="#666666"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UImg({ underClass, activeText }) {
    return (
        <svg className={`cursor-pointer ${activeText}`}  onClick={underClass} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10.7905H10" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 1.79053V5.29053C3 6.08618 3.31607 6.84924 3.87868 7.41185C4.44129 7.97446 5.20435 8.29053 6 8.29053C6.79565 8.29053 7.55871 7.97446 8.12132 7.41185C8.68393 6.84924 9 6.08618 9 5.29053V1.79053" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function FullEaquals({ fullClass, activeText }) {
    return (
        <svg  className={`${activeText} cursor-pointer`} onClick={fullClass} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 12.2905H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 9.62378H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 6.95728H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 4.29053H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
function LeftEaquals({ leftClass, activeText }) {
    return (
        <svg  className={`${activeText} cursor-pointer`} onClick={leftClass} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8333 12.2905H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 9.62378H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.8333 6.95728H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 4.29053H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function RightEquals({ rightClass, activeText }) {
    return (
        <svg  className={`cursor-pointer ${activeText}`} onClick={rightClass} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5001 12.2905H5.16675" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 9.62378H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5001 6.95728H5.16675" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 4.29053H2.5" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function Fix({ fixClass, activeText }) {
    return (
        <svg  className={`${activeText} cursor-pointer`} onClick={fixClass} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 4.95728H12.0001C12.4378 4.95728 12.8713 5.04349 13.2757 5.21101C13.6801 5.37853 14.0476 5.62406 14.3571 5.93359C14.6666 6.24311 14.9122 6.61058 15.0797 7.015C15.2472 7.41942 15.3334 7.85287 15.3334 8.29061C15.3334 8.72835 15.2472 9.1618 15.0797 9.56622C14.9122 9.97064 14.6666 10.3381 14.3571 10.6476C14.0476 10.9572 13.6801 11.2027 13.2757 11.3702C12.8713 11.5377 12.4378 11.6239 12.0001 11.6239H10.0001M6.00008 11.6239H4.00008C3.56234 11.6239 3.12889 11.5377 2.72447 11.3702C2.32005 11.2027 1.95259 10.9572 1.64306 10.6476C1.01794 10.0225 0.666748 9.17466 0.666748 8.29061C0.666748 7.40655 1.01794 6.55871 1.64306 5.93359C2.26818 5.30846 3.11603 4.95728 4.00008 4.95728H6.00008" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.33325 8.29053H10.6666" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
function IImg({ italicClass }) {
  return (
    <svg
      className="cursor-pointer"
      onClick={italicClass}
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10.2905H2.5"
        stroke="#666666"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 2.29053H5"
        stroke="#666666"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 2.29053L4.5 10.2905"
        stroke="#666666"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export { BImg, UImg, IImg, FullEaquals, LeftEaquals, RightEquals, Fix };

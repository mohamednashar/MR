import Link from "next/link";
import React from "react";

function Rechnungen() {
  return (
    <div className="w-[80%] m-4 bg-white mx-auto ">
      <div className="flex items-center gap-5 justify-between bg-[#F8F9FA] p-4 my-5">
        <div className="flex items-center gap-16">
          <Link href="#" className="text-[#3AB3B3] font-semibold">Rechnungsdatum</Link>
          <Link href="#" className="text-[#3AB3B3] font-semibold">Rechnungsnummer</Link>
          <Link href="#" className="text-[#3AB3B3] font-semibold">Leistung</Link>
        </div>
        <div className="flex items-center gap-16 mx-5">
          <Link href="#" className="text-[#3AB3B3] font-semibold">Rechnungsbetrag</Link>
          <Link href="#" className="text-[#3AB3B3] font-semibold">Download</Link>
        </div>
      </div>

      <label for="icon-input">
  <input type="file" accept=".svg" id="icon-input" className="hidden"/>
  <div className="flex flex-row-reverse p-10">
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_9151)">
        <path
          d="M22.5001 10.5H18.0001V1.5H12.0001V10.5H7.50009L15.0001 18L22.5001 10.5ZM29.0071 20.298C28.6921 19.962 26.5906 17.7135 25.9906 17.127C25.5701 16.724 25.01 16.4993 24.4276 16.5H21.7921L26.3881 20.991H21.0721C20.9998 20.9897 20.9285 21.0074 20.8653 21.0424C20.8021 21.0775 20.7493 21.1285 20.7121 21.1905L19.4881 24H10.5121L9.28809 21.1905C9.25069 21.1287 9.19779 21.0778 9.13464 21.0428C9.07149 21.0078 9.00029 20.99 8.92809 20.991H3.61209L8.20659 16.5H5.57259C4.97709 16.5 4.40859 16.7385 4.00959 17.127C3.40959 17.715 1.30809 19.9635 0.993093 20.298C0.259593 21.0795 -0.143907 21.702 0.0480935 22.4715L0.889593 27.0825C1.08159 27.8535 1.92609 28.4865 2.76759 28.4865H27.2356C28.0771 28.4865 28.9216 27.8535 29.1136 27.0825L29.9551 22.4715C30.1441 21.702 29.7421 21.0795 29.0071 20.298Z"
          fill="#3AB3B3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_9151">
         <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
  
</div>
</label>

    </div>
  );
}

export default Rechnungen;

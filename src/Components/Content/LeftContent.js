import React from "react";
import "./Content.css";
import img1 from "../../Assets/Vector.png";
import img2 from "../../Assets/image 1782 (Traced).png";
import Charts from "../Chart/Charts";
import { AiOutlineArrowUp } from "react-icons/ai";
const LeftContent = () => {
  return (
    <div>
      <div class="grid grid-cols-6  gap-6">
        
        <div className="bg-white  flex flex-col justify-between rounded-2xl col-span-6 md:col-span-2">
          <div className="card mb-0 ">
            <h3 className="mb-8 ">Send Money To Bank</h3>
            <img src={img1} className="" style={{ margin: "0 auto" }} alt="" />
          </div>
          <div
            style={{ background: "rgba(125, 35, 224, 0.3)" }}
            className=" rounded-b-2xl"
          >
            <h3 style={{fontSize:'14px', color:'#7D23E0', fontWeight:'500'}} className="py-2.5 text-center">
              Request Money Transfer
            </h3>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-between rounded-2xl  col-span-3 md:col-span-2">
          <div className="card mb-0 ">
            <h3 className="mb-8">Total Orders</h3>
            <img src={img2} className="" style={{ margin: "0 auto" }} alt="" />
          </div>
          <div className="py-3 flex items-center justify-center gap-2.5">
            <h1 style={{}} className="text-center text-4xl font-bold">
              1,500{" "}
            </h1>

            <div className="flex items-center  gap-1 mb-3">
              <AiOutlineArrowUp className="text-xs font-bold text-green-500" />
              <p className="text-xs font-bold text-green-500">21%</p>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-between rounded-2xl  col-span-3 md:col-span-2">
          <div className="card mb-0 ">
            <h3 className="mb-8">Average Orders</h3>
            <svg
              style={{ margin: "0 auto" }}
              width="88"
              height="89"
              viewBox="0 0 88 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.2 14H20.8C12.0739 14 5 21.064 5 29.7778V69.2222C5 77.936 12.0739 85 20.8 85H68.2C76.9261 85 84 77.936 84 69.2222V29.7778C84 21.064 76.9261 14 68.2 14Z"
                stroke="#7D23E0"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.91663 40.5827H84M28.6416 4.91602V22.7493V4.91602ZM60.275 4.91602V22.7493V4.91602Z"
                stroke="#7D23E0"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="py-3 flex items-center justify-center gap-2.5">
            <h1 style={{}} className="text-center text-4xl font-bold">
              1,500{" "}
            </h1>
            <div className="flex items-center  gap-1 mb-3">
              <AiOutlineArrowUp className="text-xs font-bold text-green-500" />
              <p className="text-xs font-bold text-green-500">21%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        <Charts></Charts>
      </div>
    </div>
  );
};

export default LeftContent;

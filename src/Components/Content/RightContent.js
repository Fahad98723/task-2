import React from "react";
import img1 from "../../Assets/Kazi Mohammad Fahad Kibria.png";
const RightContent = () => {
  return (
    <div className="grid grid-cols-6 md:gap-4">
      <div className=" bg-white p-4 rounded-2xl col-span-6 lg:col-span-6 md:col-span-3">
        <div className="flex mb-3 justify-between">
          <h1 style={{ fontWeight: "700", fontSize: "20px" }}>Ostello Share</h1>

          <div class="select-dropdown">
          <select>
            <option className="option" value="Option 1">Last Month</option>
            <option className="option" value="Option 2">Current Month</option>
          </select>
        </div>

        </div>
        <div className="shares">
        <div className="share flex justify-between items-center mt-5 px-2">
            <div className="flex">
            <img src={img1} className="share-image" alt="" />
            <div className="texts ml-4">
              <h2 className="text-sm">Digital Marketing</h2>
              <h3 className="text-xs" style={{ color: "#8E8E8E", }}>
                Purchase By Deepika
              </h3>
              <h4 className="text-xs font-bold">March 27 2022 at 6.46 PM</h4>
            </div>
            </div>
            <div className="texts">
              <h2 className="text-2xl text-right sm:text-3xl font-bold">₹ 25</h2>
              <h3 className="price-rs text-sm ">2% of RS.599</h3>
            </div>
          </div>
          <div className="share flex justify-between items-center mt-5 px-2">
            <div className="flex">
            <img src={img1} className="share-image" alt="" />
            <div className="texts ml-4">
              <h2 className="text-sm">Digital Marketing</h2>
              <h3 className="text-xs" style={{ color: "#8E8E8E", }}>
                Purchase By Deepika
              </h3>
              <h4 className="text-xs font-bold">March 27 2022 at 6.46 PM</h4>
            </div>
            </div>
            <div className="texts">
              <h2 className="text-2xl text-right sm:text-3xl font-bold">₹ 25</h2>
              <h3 className="price-rs text-sm ">2% of RS.599</h3>
            </div>
          </div>
          <div className="share flex justify-between items-center mt-5 px-2">
            <div className="flex">
            <img src={img1} className="share-image" alt="" />
            <div className="texts ml-4">
              <h2 className="text-sm">Digital Marketing</h2>
              <h3 className="text-xs" style={{ color: "#8E8E8E", }}>
                Purchase By Deepika
              </h3>
              <h4 className="text-xs font-bold">March 27 2022 at 6.46 PM</h4>
            </div>
            </div>
            <div className="texts">
              <h2 className="text-2xl text-right sm:text-3xl font-bold">₹ 25</h2>
              <h3 className="price-rs text-sm ">2% of RS.599</h3>
            </div>
          </div>
        </div>
        <div className="see-all text-right">
        <a href="" className="text-xs  text-cyan-500 btn">See All</a>
        </div>
         
      </div>
      <div className=" bg-white p-4 rounded-2xl mt-4 md:mt-0 col-span-6 lg:col-span-6 md:col-span-3 ">
        <div className="flex mb-3 justify-between">
          <h1 style={{ fontWeight: "700", fontSize: "20px" }}>Taxes</h1>

          <div class="select-dropdown">
          <select>
            <option className="option" value="Option 1">Last Month</option>
            <option className="option" value="Option 2">Current Month</option>
          </select>
        </div>

        </div>
        <div className="shares">
        <div className="share flex justify-between items-center mt-5 px-2">
            <div className="flex">
            <img src={img1} className="share-image" alt="" />
            <div className="texts ml-4">
              <h2 className="text-sm">Digital Marketing</h2>
              <h3 className="text-xs" style={{ color: "#8E8E8E", }}>
                Purchase By Deepika
              </h3>
              <h4 className="text-xs font-bold">March 27 2022 at 6.46 PM</h4>
            </div>
            </div>
            <div className="texts">
              <h2 className="text-2xl text-right sm:text-3xl font-bold">₹ 25</h2>
              <h3 className="price-rs text-sm ">2% of RS.599</h3>
            </div>
          </div>
          <div className="share flex justify-between items-center mt-5 px-2">
            <div className="flex">
            <img src={img1} className="share-image" alt="" />
            <div className="texts ml-4">
              <h2 className="text-sm">Digital Marketing</h2>
              <h3 className="text-xs" style={{ color: "#8E8E8E", }}>
                Purchase By Deepika
              </h3>
              <h4 className="text-xs font-bold">March 27 2022 at 6.46 PM</h4>
            </div>
            </div>
            <div className="texts">
              <h2 className="text-2xl text-right sm:text-3xl font-bold">₹ 25</h2>
              <h3 className="price-rs text-sm ">2% of RS.599</h3>
            </div>
          </div>
          <div className="share flex justify-between items-center mt-5 px-2">
            <div className="flex">
            <img src={img1} className="share-image" alt="" />
            <div className="texts ml-4">
              <h2 className="text-sm">Digital Marketing</h2>
              <h3 className="text-xs" style={{ color: "#8E8E8E", }}>
                Purchase By Deepika
              </h3>
              <h4 className="text-xs font-bold">March 27 2022 at 6.46 PM</h4>
            </div>
            </div>
            <div className="texts">
              <h2 className="text-2xl text-right sm:text-3xl font-bold">₹ 25</h2>
              <h3 className="price-rs text-sm ">2% of RS.599</h3>
            </div>
          </div>
        </div>
        <div className="see-all text-right">
        <a href="" className="text-xs  text-cyan-500 btn">See All</a>
        </div>
         
      </div>
    </div>
  );
};

export default RightContent;

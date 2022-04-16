import React, { useState } from "react";
import Content from "../../Components/Content/Content";
import SideBar from "../../Components/SideBar/SideBar";
import ToggleSideBar from "../../Components/SideBar/ToggleSideBar";

const Home = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div > 
      {/* <ToggleSideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}></ToggleSideBar>
      <div className=" grid grid-cols-6 gap-5">
        <div className=" hidden  lg:block">
          <SideBar></SideBar>
        </div>
        <div
          
          className="  col-span-6 lg:col-span-5 "
          onClick={() => setShowSidebar(false)}
        >
          <Content></Content>
        </div>
      </div> */}
    </div>
  );
};

export default Home;

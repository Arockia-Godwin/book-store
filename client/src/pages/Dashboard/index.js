import React from "react";
import NavBar from "../../components/navBar";

// import { InputText } from "primereact/inputtext";

const Dashboard = () => {
  return (
    <div className="bg-black  h-[100vh] w-full">
      <div className="w-full flex  items-center justify-center">
        <div className="w-[80%]">
          {/* <div className="border-b-[#979797] border-b-2"> */}
          <NavBar />
          {/* </div> */}
          <div className="w-full flex">
            <div className="h-[90vh] w-1/2 items-start justify-center p-8 flex flex-col">
              <p className="text-white my-2 text-md">Unlimited Books</p>

              <p className="text-white my-2 text-7xl font-bold">
                New arrivals with 20% off!!
              </p>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#979797] border border-white h-[40vh] w-[60px] text-white"></div> */}
      </div>
    </div>
  );
};

export default Dashboard;
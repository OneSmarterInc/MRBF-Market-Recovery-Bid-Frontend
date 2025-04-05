import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { FaArrowLeft, FaExternalLinkAlt, FaRegCheckCircle } from "react-icons/fa";
import backbtn from "../../assets/backbutton.png";
import arrow from "../../assets/arrow.png";
import img1 from "../../assets/img1.png";

const Screen3 = () => {
  return (
    <div className="flex h-screen bg-[#F8FCFF]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Content */}
        <div className="p-6 px-10 pr-20">
          <div className="bg-white p-6  rounded-lg">
            <div className="grid grid-cols-2 gap-2">
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <h2 className="font-semibold text-gray-700">
                    Company Overview
                  </h2>{" "}
                  <div className="mt-1">
                    <img src={arrow} alt="Logo" className="w-16 h-3" />
                  </div>
                  <a href="#" className="text-[#008CD0] font-medium ">
                    Hutton Construction, LLC
                  </a>
                  <p className="text-gray-600 text-sm">example@mrbm.com</p>
                  <p className="text-gray-600 text-sm">+1-555-987-6543</p>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-700">
                    Bid Contact Info
                  </h2>{" "}
                  <div className="mt-1">
                    <img src={arrow} alt="Logo" className="w-16 h-3" />
                  </div>
                  <a href="#" className="text-[#008CD0] font-medium ">
                    Reccia
                  </a>
                  <p className="text-gray-600 text-sm">reccia@mrbm.com</p>
                  <p className="text-gray-600 text-sm">+1-973-857-2501</p>
                </div>
              </div>

              <div className=" pt-4">
                <p className="font-semibold text-gray-700">
                  BID NUMBER: <span className="text-[#008CD0]">0000011</span>
                </p>
                <div className="grid grid-cols-4 gap-4 text-gray-600 mt-2">
                  <p>
                    Employer <p className="text-[#008CD0] font-medium">8137</p>
                  </p>
                  <p>
                    Group <p className="text-[#008CD0] font-medium">65</p>
                  </p>
                  <p>
                    Local <p className="text-[#008CD0] font-medium">0472</p>
                  </p>
                  <p>
                    Business Agent{" "}
                    <p className="text-[#008CD0] font-medium">LG</p>
                  </p>
                </div>
              </div>
            </div>

            {/* <button className="mt-6 flex items-center bg-[#008CD0] text-white py-2 px-4 rounded-lg text-sm font-medium">
              <FaArrowLeft className="mr-2" /> BACK
            </button> */}

            <div className="mt-10">
              <img src={backbtn} alt="Logo" className="w-28 h-7" />
            </div>

            <div className="mt-6 flex gap-10 text-gray-600 text-sm">
              <p className=" font-semibold">
                Date: 07/13/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
              <p className=" font-semibold">
                Bid Date: 08/04/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
              <p className=" font-semibold">
                Response Date: 08/04/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
              <p className=" font-semibold">
                Exp Date: 10/13/20233{" "}
                <p className="text-[#008CD0] text-xs text-end pl-10 font-light">
                  MM/DD/YY
                </p>
              </p>
            </div>

            <div className="flex">
              <div className="w-96">
                <div className="mt-6 flex items-center text-green-600 font-medium text-lg">
                  <FaRegCheckCircle className="text-2xl" />
                  <span className="ml-2 text-base">Approved</span>
                </div>

                <div className="mt-4 text-gray-600 font-medium text-sm">
                  <p>Estimated Hours: 10,500</p>
                  <p>Approved Amount: 105,000.00</p>
                  <p>Reduction Amount: 0.00</p>
                  <p>Amount Used: 0.00</p>
                  <p>Remaining Amount: 0.00</p>
                </div>
              </div>
              <div className="mt-6 pt-4 w-full">
                <h2 className="text-[#008CD0] font-medium text-sm">
                  Remark / Comments (If Any)
                </h2>
                <div className="flex items-start mt-2 text-gray-600 text-sm">
                  <div className="mt-1">
                    <img src={img1} alt="Logo" className="w-16 h-10" />
                  </div>
                  <p className="mx-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Velit, enim dolore quasi eum cum ex numquam rem suscipit
                    harum laudantium eos distinctio voluptatem quod rerum vel
                    illum tenetur quo libero?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="text-start p-3 fixed bottom-0 w-full border-t-2 border-blue-300 text-gray-500 text-sm ">
            &copy; 2025{" "}
            <span className="font-medium">
              Market Recovery Bid Maintenance.
            </span>{" "}
            All Rights Reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Screen3;

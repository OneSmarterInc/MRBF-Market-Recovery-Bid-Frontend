import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

import { FiChevronDown } from "react-icons/fi";
import backbtn from "../../assets/backbutton.png";
import arrow from "../../assets/arrow.png";
import img1 from "../../assets/img1.png";
import { useNavigate } from "react-router-dom";

const reductionOptions = [0, 10, 20, 30];

const Screen3 = () => {
  const navigate = useNavigate();
  const [remarks, setremarks] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit  Velit, enim dolore quasi eum cum ex numquam rem suscipit arum laudantium eos distinctio voluptatem quod rerum vel illum tenetur quo libero?"
  );

  const saveToLocalStorage = () => {
    // localStorage.setItem("bidFormData", JSON.stringify(bidData));
    alert("Data saved successfully!");
  };

  const resetForm = () => {
    // setBidData(initialBidData);
    // localStorage.removeItem("bidFormData");
    alert("Form reset to initial values!");
  };
  return (
    <div className="flex h-screen bg-[#F8FCFF]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Content */}
        <div className="p-3 md:p-6 md:px-10 md:pr-20">
          <div className="bg-white md:p-6  rounded-lg mb-20">
            <div className="grid md:grid-cols-2 gap-2">
              <div className="grid md:grid-cols-2 gap-6 ">
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
                  {/* <p className="text-gray-600 text-sm">example@mrbm.com</p> */}
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
                  {/* <p className="text-gray-600 text-sm">reccia@mrbm.com</p> */}
                  <p className="text-gray-600 text-sm">+1-973-857-2501</p>
                </div>
              </div>

              <div className=" my-10 md:my-0 w-full ">
                <p className="font-semibold text-gray-700">
                  BID NUMBER: <span className="text-[#008CD0]">0000011</span>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 mt-2">
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

            <div className="my-8 mt-10 grid w-full sm:grid-cols-3 lg:grid-cols-5 gap-10 text-gray-600 text-sm">
              <p className=" font-semibold flex gap-2">
                <p className=" ">App Date:</p>
                <p>
                  <p className="text-end">08/04/2023</p>
                  <p className="text-[#008CD0] text-xs text-end  font-light">
                    MM/DD/YYYY
                  </p>
                </p>
              </p>
              <p className=" font-semibold flex gap-2">
                <p className=" text-red-500">Bid Date:</p>
                <p>
                  <p className="text-end">08/04/2023</p>
                  <p className="text-[#008CD0] text-xs text-end  font-light">
                    MM/DD/YYYY
                  </p>
                </p>
              </p>
              <p className=" font-semibold flex gap-2">
                <p className=" ">Agreement Date:</p>
                <p>
                  <p className="text-end">08/04/2023</p>
                  <p className="text-[#008CD0] text-xs text-end  font-light">
                    MM/DD/YYYY
                  </p>
                </p>
              </p>
              <p className=" font-semibold flex gap-2">
                <p className=" ">Response Date:</p>
                <p>
                  <p className="text-end">08/04/2023</p>
                  <p className="text-[#008CD0] text-xs text-end  font-light">
                    MM/DD/YYYY
                  </p>
                </p>
              </p>
              <p className=" font-semibold flex gap-2">
                <p className=" ">Exp Date:</p>
                <p>
                  <p className="text-end">08/04/2023</p>
                  <p className="text-[#008CD0] text-xs text-end  font-light">
                    MM/DD/YYYY
                  </p>
                </p>
              </p>
            </div>

            <div className="md:flex w-full">
              <div className="w-96">
                <div className="mt-4 flex items-center text-green-600 font-medium text-lg">
                  <FaRegCheckCircle className="text-2xl" />
                  <span className="ml-2 text-base">Approved</span>
                </div>

                <div className=" bg-white  p-4 px-8 max-w-sm mx-auto">
                  <p className="text-gray-700 text-sm mb-2 flex justify-between">
                    <span className="font-medium">Estimated Hours:</span>
                    <span className="text-gray-600">10,500</span>
                  </p>
                  <p className="text-gray-700 text-sm mb-2 flex justify-between">
                    <span className="font-medium">Awarded Amount:</span>
                    <span className="text-gray-600">105,000.00</span>
                  </p>

                  {/* Dropdown for Reduction Amount */}
                  <div className="flex items-center justify-between space-x-2 mb-2">
                    <label
                      htmlFor="reductionAmount"
                      className="text-sm font-medium  text-gray-700"
                    >
                      Reduction Amount:
                    </label>
                    <div className="relative ">
                      <select
                        id="reductionAmount"
                        name="reductionAmount"
                        className="appearance-none w-16 border border-gray-300 rounded-lg py-1 pl-3 pr-8 text-xs focus:ring-2 focus:ring-blue-400"
                        defaultValue="0"
                      >
                        {reductionOptions.map((value) => (
                          <option key={value} value={value}>
                            {value === 0 ? ".00" : value}
                          </option>
                        ))}
                      </select>
                      {/* Custom Arrow Icon */}
                      <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600">
                        <FiChevronDown />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-2 flex justify-between">
                    <span className="font-medium">Amount Used:</span>
                    <span className="text-gray-600">0.00</span>
                  </p>
                  <p className="text-gray-700 text-sm mb-2 flex justify-between">
                    <span className="font-medium">Remaining Amount:</span>
                    <span className="text-gray-600">0.00</span>
                  </p>
                </div>
              </div>
              <div className="mt-5 w-full">
                <h2 className="text-[#008CD0] font-medium text-sm">
                  Remark / Comments (If Any)
                </h2>
                <div className="flex items-start  mt-2 text-gray-600 text-sm">
                  <div className="mt-1 ">
                    <img src={img1} alt="Logo" className="w-12 h-10" />
                  </div>
                  <p className="mx-2 w-full">
                    <textarea
                      name=""
                      rows={3}
                      value={remarks}
                      onChange={(e) => setremarks(e.target.value)}
                      id=""
                      className="w-full border border-gray-200 p-1"
                    ></textarea>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-between items-end mt-5 md:my-10">
              <div className="">
                {" "}
                <img
                  onClick={() => navigate("/screen2")}
                  src={backbtn}
                  alt="Logo"
                  className="w-28 h-7 cursor-pointer"
                />
              </div>
              <div className=" w-full flex gap-2 md:gap-5 justify-end items-end cursor-pointer">
                <button
                  onClick={saveToLocalStorage}
                  className="p-2 py-0.5 hover:bg-[#008CBA] hover:text-gray-50 cursor-pointer w-24  text-[#008CBA]  border text-gray rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-red-600 text-white py-1 h-7 px-3 rounded text-sm cursor-pointer"
                >
                  Reset Form
                </button>
              </div>
            </div>
          </div>

          <footer className="text-start bg-white p-3 fixed bottom-0 w-full border-t-2 border-blue-300 text-gray-500 text-sm ">
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

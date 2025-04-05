import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaRegCheckCircle,
} from "react-icons/fa";
import selectbtn from "../../assets/select.png";
import arrow from "../../assets/arrow.png";
import img1 from "../../assets/img1.png";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-[#F8FCFF]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Content */}
        <div className="p-6 px-10 pr-20">
          <div className="bg-white p-6  rounded-lg">
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
            <div className="grid grid-cols-2 place-content-between gap-2 mt-20">
              <div>
                <h2 className="font-semibold text-gray-700">Company Info</h2>{" "}
                <div className="mt-1">
                  <img src={arrow} alt="Logo" className="w-16 h-3" />
                </div>
                <p className="text-[#008CD0] font-medium  p-1 ">
                  <span className=" text-gray-600">Company Name:</span> Hutton
                  Construction, LLC
                </p>
                {/* <p className="text-gray-600 text-sm"> example@mrbm.com</p> */}
                <p className="text-gray-600 text-sm p-1">
                  {" "}
                  <span className=" text-gray-600 font-medium">
                    Phone No.:
                  </span>{" "}
                  +1-555-987-6543
                </p>
                <p className="text-gray-600 text-sm  p-1">
                  {" "}
                  <span className=" text-gray-600 font-medium">
                    Address
                  </span>{" "}
                  New Street, NY
                </p>
                <div className="flex gap-4  p-1">
                  <p className="text-gray-600 text-sm">
                    <span className=" text-gray-600 font-medium">City:</span>{" "}
                    New York
                  </p>
                  <p className="text-gray-600 text-sm">
                    {" "}
                    <span className=" text-gray-600 font-medium">
                      State:
                    </span>{" "}
                    NY
                  </p>
                  <p className="text-gray-600 text-sm">
                    {" "}
                    <span className=" text-gray-600 font-medium">
                      Zip:
                    </span>{" "}
                    4444
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-gray-700">
                  Bid Contact Info
                </h2>{" "}
                <div className="mt-1">
                  <img src={arrow} alt="Logo" className="w-16 h-3" />
                </div>
                <p className="text-[#008CD0] font-medium  p-1 ">
                  <span className=" text-gray-600">Contact Name:</span> Rececia
                </p>
                <p className="text-gray-600 text-sm p-1">
                  {" "}
                  <span className=" text-gray-600 font-medium">
                    Email:
                  </span>{" "}
                  example@mrbm.com
                </p>
                <p className="text-gray-600 text-sm p-1">
                  {" "}
                  <span className=" text-gray-600 font-medium">
                    Phone No.:
                  </span>{" "}
                  +1-555-987-6543
                </p>
                <p className="text-gray-600 text-sm p-1">
                  {" "}
                  <span className=" text-gray-600 font-medium">
                    Project Name.:
                  </span>{" "}
                  XYZ P
                </p>
                <p className="text-gray-600 text-sm  p-1">
                  {" "}
                  <span className=" text-gray-600 font-medium">
                    Project Address
                  </span>{" "}
                  New Street, NY
                </p>
                <div className="flex gap-4  p-1">
                  <p className="text-gray-600 text-sm">
                    <span className=" text-gray-600 font-medium">City:</span>{" "}
                    New York
                  </p>
                  <p className="text-gray-600 text-sm">
                    {" "}
                    <span className=" text-gray-600 font-medium">
                      State:
                    </span>{" "}
                    NY
                  </p>
                  <p className="text-gray-600 text-sm">
                    {" "}
                    <span className=" text-gray-600 font-medium">
                      Zip:
                    </span>{" "}
                    4444
                  </p>
                </div>
              </div>
            </div>

            {/* <button className="mt-6 flex items-center bg-[#008CD0] text-white py-2 px-4 rounded-lg text-sm font-medium">
              <FaArrowLeft className="mr-2" /> BACK
            </button> */}

            <div className="mt-10 w-full flex justify-end">
              <img
                onClick={() => navigate("/screen3")}
                src={selectbtn}
                alt="Logo"
                className="w-28 h-8 cursor-pointer"
              />
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

export default Screen2;

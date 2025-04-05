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

const Screen1 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-[#F8FCFF]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="p-6 px-10 pr-20">
          <main className="flex-1 p-6 bg-white ">
            <div className="mt-4 flex space-x-8">
              <div className="text-gray-700">
                <p className="font-semibold">Employer</p>
                <p className="text-lg font-bold text-[#008CBA]">08137</p>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold">Group</p>
                <p className="text-lg font-bold text-[#008CBA]">00065</p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="text-[#008CBA] text-start">
                    <th className="border border-gray-200 px-4 py-2 text-start">
                      Bid No.
                    </th>
                    <th className="border border-gray-200 px-4 py-2  text-start">
                      Employer
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-start">
                      Project Name
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-start">
                      Approved Amount
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-start">
                      Estimated Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, index) => (
                    <tr
                      key={index}
                      onClick={() => navigate("/screen2")}
                      className="text-start border border-gray-200 cursor-pointer hover:bg-gray-100"
                    >
                      <td className="border border-gray-200  px-4 py-2">11</td>
                      <td className="border border-gray-200  px-4 py-2">
                        1137
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        Hutton Construction, LLC
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        105,000.00
                      </td>
                      <td className="border border-gray-200 px-4 py-2">
                        10,500
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full flex justify-end mt-10">
              <button className=" bg-[#008CBA] p-2 rounded-full text-white py-1 px-4 cursor-pointer ">
                Create BID
              </button>
            </div>
          </main>

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

export default Screen1;

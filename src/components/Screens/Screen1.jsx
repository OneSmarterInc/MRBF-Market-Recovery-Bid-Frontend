import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaSync,
  FaRegCheckCircle,
  FaPlus,
} from "react-icons/fa";
import selectbtn from "../../assets/select.png";
import arrow from "../../assets/arrow.png";
import img1 from "../../assets/img1.png";
import { useNavigate } from "react-router-dom";

const Screen1 = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([
    {
      bidNo: "11",
      employer: "1137",
      projectName: "Hutton Construction, LLC",
      approvedAmount: "105,000.00",
      estimatedHours: "10,500",
    },
    {
      bidNo: "12",
      employer: "1137",
      projectName: "ABC Construction Co.",
      approvedAmount: "85,000.00",
      estimatedHours: "8,500",
    },
  ]);
  const [newRecord, setNewRecord] = useState({
    bidNo: "",
    employer: "",
    projectName: "",
    approvedAmount: "",
    estimatedHours: "",
  });

  const flag = () => {
    setShow(true);
  };

  const handleAddRecord = () => {
    if (newRecord.bidNo && newRecord.projectName) {
      setTableData([...tableData, newRecord]);
      setNewRecord({
        bidNo: "",
        employer: "",
        projectName: "",
        approvedAmount: "",
        estimatedHours: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex h-screen bg-[#F8FCFF]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="p-6 md:px-10 md:pr-20">
          <main className="flex-1 py-6 md:p-6 pt-0 bg-white ">
            <div className="mt-4 flex flex-col md:flex-row items-center md:items-end  gap-3 md:gap-10 ">
              <div className="text-gray-700  gap-4">
                <p className="font-semibold my-0.5 text-sm">Employer</p>
                <input
                  type="text"
                  placeholder="08137"
                  className="text-sx w-46 text-gray-400 border rounded-sm border-gray-500 focus:border-[#008CBA] focus:outline-none transition duration-200 px-2"
                ></input>
              </div>
              <div className="text-gray-700  gap-4 ">
                <p className="font-semibold my-0.5 text-sm">Group</p>
                <input
                  type="text"
                  placeholder="00065"
                  className="text-sx w-46  text-gray-400 border rounded-sm border-gray-500 focus:border-[#008CBA] focus:outline-none transition duration-200 px-2"
                ></input>
              </div>
              <div className="flex gap-4 ">
                <button
                  className="p-2 py-0.5 hover:bg-[#008CBA] hover:text-gray-50 cursor-pointer w-24  text-[#008CBA]  border text-gray rounded-lg"
                  onClick={flag}
                >
                  Submit
                </button>
              </div>
            </div>

            {show ? (
              <div className="mt-4">
                {/* add new recoord */}
                <div className="mb-4 p-2 border border-gray-200 rounded-lg">
                  <h3 className="text-[#008CBA] mb-2 text-sm">
                    Add New Record
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    <input
                      type="text"
                      name="bidNo"
                      placeholder="Bid No."
                      value={newRecord.bidNo}
                      onChange={handleInputChange}
                      className="border text-sm rounded-sm py-1 px-2 h-7"
                    />
                    <input
                      type="text"
                      name="employer"
                      placeholder="Employer"
                      value={newRecord.employer}
                      onChange={handleInputChange}
                      className="border text-sm rounded-sm py-1 px-2 h-7"
                    />
                    <input
                      type="text"
                      name="projectName"
                      placeholder="Project Name"
                      value={newRecord.projectName}
                      onChange={handleInputChange}
                      className="border text-sm rounded-sm py-1 px-2 h-7"
                    />
                    <input
                      type="text"
                      name="approvedAmount"
                      placeholder="Approved Amount"
                      value={newRecord.approvedAmount}
                      onChange={handleInputChange}
                      className="border text-sm rounded-sm py-1 px-2 h-7"
                    />
                    <input
                      type="text"
                      name="estimatedHours"
                      placeholder="Estimated Hours"
                      value={newRecord.estimatedHours}
                      onChange={handleInputChange}
                      className="border text-sm rounded-sm py-1 px-2 h-7"
                    />
                    <button
                      onClick={handleAddRecord}
                      className="bg-[#008CBA] text-white p-0.5 cursor-pointer justify-center px-3 rounded flex items-center gap-1"
                    >
                      <FaPlus size={12} /> Add Record
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-scroll w-full">
                  <table className="w-full  table-auto border-collapse border border-gray-200">
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
                      {tableData.map((row, index) => (
                        <tr
                          key={index}
                          onClick={() => navigate("/screen2")}
                          className="text-start border border-gray-200 cursor-pointer hover:bg-gray-100"
                        >
                          <td className="border border-gray-200 px-4 py-2">
                            {row.bidNo}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {row.employer}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {row.projectName}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {row.approvedAmount}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {row.estimatedHours}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p className="flex justify-center mt-4 text-gray-500"></p>
            )}

            {/* <div className="w-full flex justify-end mt-10">
              <button className=" bg-[#008CBA] p-2 rounded-full text-white py-1 px-4 cursor-pointer ">
                Create BID
              </button>
            </div> */}
          </main>

          <footer className="text-start bg-amber-50 p-3 fixed bottom-0 w-full border-t-2 border-blue-300 text-gray-500 text-sm ">
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

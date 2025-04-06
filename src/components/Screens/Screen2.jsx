import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import selectbtn from "../../assets/next.png";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const navigate = useNavigate();

  const initialBidData = {
    bidNumber: "0000011",
    employer: "8137",
    group: "65",
    local: "0472",
    businessAgent: "LG",
    companyInfo: {
      contactName: "John Doe",
      phone: "555-123-4567",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    bidContactInfo: {
      contactName: "Rececia",
      email: "rececia@example.com",
      phone: "555-987-6543",
      projectName: "Office Building",
      projectAddress: "456 Business Ave",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    workTypes: {
      type1: "Electrical",
      type2: "Plumbing",
      type3: "HVAC",
      type4: "Structural",
    },
  };

  const [bidData, setBidData] = useState(initialBidData);

  useEffect(() => {
    const savedData = localStorage.getItem("bidFormData");
    if (savedData) {
      setBidData(JSON.parse(savedData));
    }
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem("bidFormData", JSON.stringify(bidData));
    alert("Data saved successfully!");
  };

  const resetForm = () => {
    setBidData(initialBidData);
    localStorage.removeItem("bidFormData");
    alert("Form reset to initial values!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBidData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompanyInfoChange = (e) => {
    const { name, value } = e.target;
    setBidData((prev) => ({
      ...prev,
      companyInfo: {
        ...prev.companyInfo,
        [name]: value,
      },
    }));
  };

  const handleWorkTypeChange = (e) => {
    const { name, value } = e.target;
    setBidData((prev) => ({
      ...prev,
      workTypes: {
        ...prev.workTypes,
        [name]: value,
      },
    }));
  };

  const handleBidContactInfoChange = (e) => {
    const { name, value } = e.target;
    setBidData((prev) => ({
      ...prev,
      bidContactInfo: {
        ...prev.bidContactInfo,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", bidData);
    navigate("/screen3");
  };

  return (
    <div className="flex h-screen bg-[#F8FCFF]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Content */}
        <div className="p-6 px-10 pr-20">
          <div className="bg-white p-6 pt-0 rounded-lg">
            <div className="pt-4">
              <p className="font-semibold text-gray-700 text-center">
                BID NUMBER:{" "}
                <span className="text-[#008CD0]">{bidData.bidNumber}</span>
              </p>
              <div className="grid md:grid-cols-6 gap-4 text-gray-600 mt-2">
                <div>
                  Employer{" "}
                  <p className="text-[#008CD0] font-medium">
                    {bidData.employer}
                  </p>
                </div>
                <div>
                  Group{" "}
                  <p className="text-[#008CD0] font-medium">{bidData.group}</p>
                </div>
                <div>
                  Local{" "}
                  <p className="text-[#008CD0] font-medium">{bidData.local}</p>
                </div>
                <div>
                  Business Agent{" "}
                  <p className="text-[#008CD0] font-medium">
                    {bidData.businessAgent}
                  </p>
                </div>
                <div className="col-span-2">
                  Work Type
                  <div className="grid grid-cols-2">
                    <p className="text-[#008CD0]">
                      <span> TYPE1: </span>
                      <input
                        type="text"
                        name="type1"
                        value={bidData.workTypes.type1}
                        onChange={handleWorkTypeChange}
                        className="px-1 border w-24 border-gray-200 rounded-sm ml-1 text-sm"
                      />
                    </p>
                    <p className="text-[#008CD0]">
                      <span> TYPE2: </span>
                      <input
                        type="text"
                        name="type2"
                        value={bidData.workTypes.type2}
                        onChange={handleWorkTypeChange}
                        className="px-1 border w-24 border-gray-200 rounded-sm ml-1 text-sm"
                      />
                    </p>
                    <p className="text-[#008CD0]">
                      <span> TYPE3: </span>
                      <input
                        type="text"
                        name="type3"
                        value={bidData.workTypes.type3}
                        onChange={handleWorkTypeChange}
                        className="px-1 border w-24 border-gray-200 rounded-sm ml-1 text-sm"
                      />
                    </p>
                    <p className="text-[#008CD0]">
                      <span> TYPE4: </span>
                      <input
                        type="text"
                        name="type4"
                        value={bidData.workTypes.type4}
                        onChange={handleWorkTypeChange}
                        className="px-1 border w-24 border-gray-200 rounded-sm ml-1 text-sm"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 place-content-between gap-10 mt-5">
              <div>
                <h2 className="font-semibold text-gray-700">Company Info</h2>
                <div className="mt-1">
                  <img src={arrow} alt="Logo" className="w-16 h-3" />
                </div>
                <div className="p-1 text-sm flex items-start ">
                  <span className="text-gray-600 w-36 font-medium ">
                    Contact Name:
                  </span>
                  <input
                    type="text"
                    name="contactName"
                    value={bidData.companyInfo.contactName}
                    onChange={handleCompanyInfoChange}
                    className="px-1 border border-gray-200 w-full rounded-sm ml-1 text-sm"
                  />
                </div>
                <div className="text-sm p-1 flex items-start">
                  <span className="text-gray-600 font-medium w-36 ">
                    Phone No.:
                  </span>
                  <input
                    type="text"
                    name="phone"
                    value={bidData.companyInfo.phone}
                    onChange={handleCompanyInfoChange}
                    className="px-1 border border-gray-200 w-full rounded-sm ml-1 text-sm"
                  />
                </div>
                <div className="text-sm p-1 flex items-start">
                  <span className="text-gray-600 font-medium w-36 ">
                    Address:
                  </span>
                  <input
                    type="text"
                    name="address"
                    value={bidData.companyInfo.address}
                    onChange={handleCompanyInfoChange}
                    className="px-1 border border-gray-200 w-full rounded-sm ml-1"
                  />
                </div>
                <div className="grid grid-cols-3 gap-5 p-1">
                  <div className="text-sm flex items-start">
                    <span className="text-gray-600 font-medium">City:</span>
                    <input
                      type="text"
                      name="city"
                      value={bidData.companyInfo.city}
                      onChange={handleCompanyInfoChange}
                      className="px-1 border w-full border-gray-200 rounded-sm ml-1"
                    />
                  </div>
                  <div className="text-sm flex items-start">
                    <span className="text-gray-600 font-medium">State:</span>
                    <input
                      type="text"
                      name="state"
                      value={bidData.companyInfo.state}
                      onChange={handleCompanyInfoChange}
                      className="px-1 border w-full border-gray-200 rounded-sm ml-1"
                    />
                  </div>
                  <div className="text-sm flex items-start">
                    <span className="text-gray-600 font-medium">Zip:</span>
                    <input
                      type="text"
                      name="zip"
                      value={bidData.companyInfo.zip}
                      onChange={handleCompanyInfoChange}
                      className="px-1 border w-full border-gray-200 rounded-sm ml-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-gray-700">
                  Bid Contact Info
                </h2>
                <div className="mt-1">
                  <img src={arrow} alt="Logo" className="w-16 h-3" />
                </div>
                <div className="p-1 text-sm flex items-start ">
                  <span className="text-gray-600 w-36 font-medium ">
                    Contact Name:
                  </span>
                  <input
                    type="text"
                    name="contactName"
                    value={bidData.bidContactInfo.contactName}
                    onChange={handleBidContactInfoChange}
                    className="px-1 border border-gray-200 w-full rounded-sm ml-1 text-sm"
                  />
                </div>
                <div className="text-sm p-1 flex items-start">
                  <span className="text-gray-600 font-medium w-36 ">
                    Phone No.:
                  </span>
                  <input
                    type="text"
                    name="phone"
                    value={bidData.bidContactInfo.phone}
                    onChange={handleBidContactInfoChange}
                    className="px-1 border border-gray-200 w-full rounded-sm ml-1 text-sm"
                  />
                </div>
                <div className="text-sm p-1 flex items-start">
                  <span className="text-gray-600 font-medium w-36 ">
                    Email:
                  </span>
                  <input
                    type="text"
                    name="email"
                    value={bidData.bidContactInfo.email}
                    onChange={handleBidContactInfoChange}
                    className="px-1 border border-gray-200 w-full rounded-sm ml-1 text-sm"
                  />
                </div>
                <div className="text-sm p-1 flex items-start">
                  <span className="text-gray-600 font-medium w-36 ">
                    Project Name:
                  </span>
                  <input
                    type="text"
                    name="projectName"
                    value={bidData.bidContactInfo.projectName}
                    onChange={handleBidContactInfoChange}
                    className="px-1 border border-gray-200 w-full rounded-sm ml-1"
                  />
                </div>
                <div className="text-sm p-1 flex items-start">
                  <span className="text-gray-600 font-medium w-36 ">
                    Project Address:
                  </span>
                  <input
                    type="text"
                    name="projectAddress"
                    value={bidData.bidContactInfo.projectAddress}
                    onChange={handleBidContactInfoChange}
                    className="px-1 border border-gray-200 w-full rounded-sm ml-1"
                  />
                </div>
                <div className="grid grid-cols-3 gap-5 p-1">
                  <div className="text-sm flex items-start">
                    <span className="text-gray-600 font-medium">City:</span>
                    <input
                      type="text"
                      name="city"
                      value={bidData.bidContactInfo.city}
                      onChange={handleBidContactInfoChange}
                      className="px-1 border w-full border-gray-200 rounded-sm ml-1"
                    />
                  </div>
                  <div className="text-sm flex items-start">
                    <span className="text-gray-600 font-medium">State:</span>
                    <input
                      type="text"
                      name="state"
                      value={bidData.bidContactInfo.state}
                      onChange={handleBidContactInfoChange}
                      className="px-1 border w-full border-gray-200 rounded-sm ml-1"
                    />
                  </div>
                  <div className="text-sm flex items-start">
                    <span className="text-gray-600 font-medium">Zip:</span>
                    <input
                      type="text"
                      name="zip"
                      value={bidData.bidContactInfo.zip}
                      onChange={handleBidContactInfoChange}
                      className="px-1 border w-full border-gray-200 rounded-sm ml-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="my-10 mt-5 w-full flex gap-5 justify-end items-end cursor-pointer">
              <button
                onClick={saveToLocalStorage}
                className="p-2 py-0.5 hover:bg-[#008CBA] hover:text-gray-50 cursor-pointer w-24  text-[#008CBA]  border text-gray rounded-lg"
              >
                Save Draft
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-500 hover:bg-red-600 text-white py-1 h-7 px-3 rounded text-sm cursor-pointer"
              >
                Reset Form
              </button>

              <img
                onClick={handleSubmit}
                src={selectbtn}
                alt="Submit"
                className="w-28 h-8 cursor-pointer"
              />
            </div>
          </div>

          <footer className="text-start bg-amber-50 p-3 fixed bottom-0 w-full border-t-2 border-blue-300 text-gray-500 text-sm">
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

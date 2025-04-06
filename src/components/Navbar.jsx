import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import userImg from "../../src/assets/img-15.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-white flex items-start justify-between px-6 py-4">
      <div>
        {" "}
        <h2 className=" text-2xl text-[#008CBA]  font-semibold">
          {location.pathname === "/screen2" &&
            "Market Recovery Bid Update Menu"}
          {location.pathname === "/screen3" &&
            "Market Recovery Bid Update Menu"}
          {location.pathname === "/screen1" &&
            "Market Recovery Bid Maintainence"}
        </h2>
        <div className="bg-[#008CBA] h-0.5 mt-4 w-20"></div>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src={userImg}
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
        <div onClick={() => navigate("/login")} className="">
          {" "}
          <FaSignOutAlt className="text-gray-600 text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

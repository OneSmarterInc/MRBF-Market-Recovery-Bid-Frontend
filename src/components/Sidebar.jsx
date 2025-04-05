import React from "react";
import Logo from "../assets/image 2.png";
import sidebar from "../assets/left.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${sidebar})` }}
      className="w-48 h-screen p-6 pl-0 flex flex-col bg-cover bg-center"
    >
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Logo" className="w-20 h-20" />
      </div>

      <nav className="flex flex-col space-y-2">
        <p
          onClick={() => navigate("/screen3")}
          className="bg-[#008CD0] text-white px-4 cursor-pointer py-2 rounded-e-full font-medium"
        >
          Sample Link 01
        </p>
        <p
          onClick={() => navigate("/screen2")}
          className="text-[#008CD0] px-4 cursor-pointer py-2 hover:bg-white rounded-e-full"
        >
          Sample Link 02
        </p>
        <p
          onClick={() => navigate("/screen1")}
          className="text-[#008CD0] px-4 cursor-pointer py-2 hover:bg-white rounded-e-full"
        >
          Sample Link 03
        </p>
        <p
          onClick={() => navigate("/")}
          className="text-[#008CD0] px-4 cursor-pointer py-2 hover:bg-white rounded-e-full"
        >
          Sample Link 04
        </p>
        <p
          onClick={() => navigate("/")}
          className="text-[#008CD0] px-4 cursor-pointer py-2 hover:bg-white rounded-e-full"
        >
          Sample Link 05
        </p>
      </nav>
    </div>
  );
};

export default Sidebar;

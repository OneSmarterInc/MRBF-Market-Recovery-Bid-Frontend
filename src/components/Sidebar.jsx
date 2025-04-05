import React from "react";
import Logo from "../assets/image 2.png";
import sidebar from "../assets/left.png";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
          onClick={() => navigate("/screen1")}
          className={` ${
            location.pathname === "/screen1"
              ? "bg-[#008CD0] text-white"
              : "text-[#008CD0]"
          }   px-4 cursor-pointer py-2 rounded-e-full font-medium`}
        >
          Sample Link 01
        </p>
        <p
          onClick={() => navigate("/screen2")}
          className={` ${
            location.pathname === "/screen2"
              ? "bg-[#008CD0] text-white"
              : "text-[#008CD0]"
          }   px-4 cursor-pointer py-2 rounded-e-full font-medium`}
        >
          Sample Link 02
        </p>
        <p
          onClick={() => navigate("/screen3")}
          className={` ${
            location.pathname === "/screen3"
              ? "bg-[#008CD0] text-white"
              : "text-[#008CD0]"
          }   px-4 cursor-pointer py-2 rounded-e-full font-medium`}
        >
          Sample Link 03
        </p>
        <p
          onClick={() => navigate("/")}
          className={` ${
            location.pathname === "/screen4"
              ? "bg-[#008CD0] text-white"
              : "text-[#008CD0]"
          }   px-4 cursor-pointer py-2 rounded-e-full font-medium`}
        >
          Sample Link 04
        </p>
        <p
          onClick={() => navigate("/")}
          className={` ${
            location.pathname === "/screen5"
              ? "bg-[#008CD0] text-white"
              : "text-[#008CD0]"
          }   px-4 cursor-pointer py-2 rounded-e-full font-medium`}
        >
          Sample Link 05
        </p>
      </nav>
    </div>
  );
};

export default Sidebar;

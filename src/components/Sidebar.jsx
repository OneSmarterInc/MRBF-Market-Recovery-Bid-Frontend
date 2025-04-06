import React, { useState } from "react";
import Logo from "../assets/newlogo.png";
import sidebar from "../assets/left.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/screen1", label: "Sample Link 01" },
    { path: "/screen2", label: "Sample Link 02" },
    { path: "/screen3", label: "Sample Link 03" },
    { path: "/", label: "Sample Link 04" },
    { path: "/", label: "Sample Link 05" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:hidden relative">
        <button
          className="fixed top-24 cursor-pointer left-5 z-50 bg-amber-50 rounded-e-full p-1 border-e-4 border-blue-300"
          onClick={toggleSidebar}
        >
          {isOpen ? <X color="red" size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        style={{ backgroundImage: `url(${sidebar})` }}
        className={` h-full w-48 p-6 pl-0 flex-col bg-cover bg-center
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0 flex" : "-translate-x-full hidden"} 
          lg:translate-x-0 lg:flex`}
      >
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-20 h-20" />
        </div>

        <nav className="flex flex-col space-y-2">
          {navItems.map((item, idx) => (
            <p
              key={idx}
              onClick={() => handleNavigate(item.path)}
              className={`${
                location.pathname === item.path
                  ? "bg-[#008CD0] text-white"
                  : "text-[#008CD0]"
              } px-4 cursor-pointer py-2 rounded-e-full font-medium`}
            >
              {item.label}
            </p>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

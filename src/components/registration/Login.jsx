import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../../assets/bgimg.png";

const Login = () => {
  const navigate = useNavigate();

  const [employerNumber, setEmployerNumber] = useState("");
  const [groupNumber, setGroupNumber] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    // Basic validation
    if (!employerNumber || !groupNumber) {
      setError("All fields are required.");
      return;
    }

    try {
      // const response = await axios.post("http://127.0.0.1:8000/api/login/", {
      //   employer_number: employerNumber,
      //   group_number: groupNumber,
      // });
      const token = "response.data";
      const user = {
        employer_number: employerNumber,
        group_number: groupNumber,
      };

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    } finally {
      localStorage.setItem(
        "user",
        JSON.stringify({
          employer_number: employerNumber,
          group_number: groupNumber,
        })
      );
    }
  };

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={divStyle}
      className="min-h-screen flex flex-col justify-center items-center gap-4"
    >
      <div className="flex flex-col justify-center item-center bg-white gap-2 p-6 rounded-xl w-96 border border-gray-300">
        <h3 className="text-center font-semibold text-xl mb-4">LOGIN</h3>

        <label htmlFor="employerNumber" className="text-gray-600 text-sm">
          Employer Number<span className="text-gray-700">*</span>
        </label>
        <div className="flex flex-row bg-white border border-gray-300 rounded h-8 p-2">
          <input
            id="employerNumber"
            className="border-0 w-full outline-none text-sm"
            type="text"
            required
            value={employerNumber}
            onChange={(e) => setEmployerNumber(e.target.value)}
          />
        </div>

        <label htmlFor="groupNumber" className="text-gray-600 text-sm mt-2">
          Group Number<span className="text-gray-600">*</span>
        </label>
        <div className="flex flex-row bg-white border border-gray-300 rounded h-8 p-2">
          <input
            id="groupNumber"
            className="border-0 w-full outline-none text-sm"
            type="text"
            required
            value={groupNumber}
            onChange={(e) => setGroupNumber(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex flex-row justify-start mt-4">
          <button
            className="bg-[#0486A5] cursor-pointer py-2 px-6 text-white rounded-lg text-sm hover:bg-[#036a82]"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

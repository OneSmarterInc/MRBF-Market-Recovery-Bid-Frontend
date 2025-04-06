import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import MyProvider from "./ContextApi/MyProvider";
import PrivateRoute from "./Routes/PrivateRoute";
import Screen1 from "./components/Screens/Screen1";
import Screen3 from "./components/Screens/Screen3";
import Screen2 from "./components/Screens/Screen2";
import Login from "./components/registration/Login";

const App = () => {
  return (
    <MyProvider>
      {" "}
      <HashRouter>
        {" "}
        <Routes>
          {/* Public Routes */}
          <Route exact path="/screen3" element={<Screen3 />} />
          <Route exact path="/screen3" element={<Screen3 />} />
          <Route exact path="/screen2" element={<Screen2 />} />
          <Route exact path="/screen1" element={<Screen1 />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Screen3 />} />
            <Route exact path="/screen3" element={<Screen3 />} />
            <Route exact path="/screen2" element={<Screen2 />} />
            <Route exact path="/screen1" element={<Screen1 />} />
          </Route>
        </Routes>
      </HashRouter>
    </MyProvider>
  );
};

export default App;

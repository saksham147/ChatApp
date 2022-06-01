import React from "react";

import { Link, Routes, Route } from "react-router-dom";
import Register from "../AuthComponent/register";
import Login from "../AuthComponent/login";

export default function AuthRoute() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Register"> Register</Link>
        </li>
        <li>
          <Link to="/Login">Log In</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

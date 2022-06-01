import React from "react";

import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "../UserComponent/dashboard";
import Profiles from "../UserComponent/profiles";

export default function UserRoute() {
  return (
    <div>
      <Link to="/Dashboard">Dashboard</Link>
      <Routes>
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route path="/profiles/:id" element={<Profiles />} />
      </Routes>
    </div>
  );
}

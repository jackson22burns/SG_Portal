import React, { useEffect, useState } from "react";
import NavBar from "./dashComponents/NavBar";

const Dashboard = ({ setAuth }) => {
  return (
    <div>
      <NavBar setAuth={setAuth}/>
    </div>
  );
};

export default Dashboard;
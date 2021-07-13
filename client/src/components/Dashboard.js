import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Stages from "./Stages";

const Dashboard = ({ setAuth }) => {
  return (
    <div>
      <NavBar setAuth={setAuth}/>
      <Stages/>
    </div>
  );
};

export default Dashboard;
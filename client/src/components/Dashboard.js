import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Stages from "./Stages";
import Question from "../Questions.jpg";

const Dashboard = ({ setAuth }) => {

	const [ticket, setTicket] = useState("");
	const [business, setBusiness] = useState("");
	const [address, setAddress] = useState("");

  const getProfile = async () => {
		try {
		  const res = await fetch("http://localhost:5000/dashboard/", {
		    method: "GET",
		    headers: { jwt_token: localStorage.token }
		});
		 //console.log(parseData);
		 const parseData = await res.json();
		  setTicket(parseData.ticket_num);
		  setBusiness(parseData.user_bus);
		  setAddress(parseData.user_address);
		} catch (err) {
		  console.error(err.message);
		}
	};

	useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <NavBar setAuth={setAuth}/>
      <Stages/>
      <div class="welcomeDash">
        <h2>Welcome to the Loan Portal</h2>
      </div>
      <div class="containerDash">
        <div class= "box">
          <h4>Business Profile</h4>
          <hr size="4" width="100%" color="black"/>  
          <p id="bold"> Application Number: #{ticket}</p>
          <p> {business}</p>
          <p> {address}</p>
        </div>
        <div class= "box">
          <h4>Status</h4>
          <hr size="4" width="100%" color="black"/>
          <p>You are in x stage. Estimated time until next stage: </p>
          <p>Review steps to complete and messages in inbox as soon as possible to avoid delays.</p>  
        </div>
        <div class= "box">
          <h4>Your Quote</h4>
          <hr size="4" width="100%" color="black"/>  
          <p id="quote"> $150,000 </p>
        </div>
      </div>
      <div 
        class="HelpIcon" 
        data-html="true" 
        data-tooltip="Questions? Phone: 1 (800) 827-5722 TTY/TDD: 1-800-877-8339 Mon–Sun, 8 a.m to 8 p.m. (ET)">
        <img 
          src={Question} 
          alt="Question Mark"
          height="50"
          width="50"
        />
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const NavBar = ({ setAuth }) => {

	const [name, setName] = useState("");
	/*const [ticket, setTicket] = useState("");
	const [busiess, setBusiness] = useState("");
	const [address, setAddress] = useState("");*/

	const getProfile = async () => {
		try {
		  const res = await fetch("http://localhost:5000/dashboard/", {
		    method: "GET",
		    headers: { jwt_token: localStorage.token }
		});
		 //console.log(parseData);
		 const parseData = await res.json();
		  setName(parseData.user_name);

		} catch (err) {
		  console.error(err.message);
		}
	};

	useEffect(() => {
    	getProfile();
    }, []);

    const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light borderBottomWidth: 4">
		  <div class="container-fluid">
		  	<img 
		  	  src= "https://www.sba.gov/build/e0e199acd15b2c54a17de6be507cf7f7.png" 
              width="114" 
           	  height="31"
          	/>
          	<div id="navGroup">
			    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			      <span class="navbar-toggler-icon"></span>
			    </button>
			    <div class="collapse navbar-collapse" id="navbarNav">
			      <ul class="navbar-nav">
			        <li class="nav-item">
			          <a class="nav-link nav1" aria-current="page" href="/dashboard"><p className="blue">Hi {name}</p></a>
			        </li>
					<li class="nav-item">
			          <a class="nav-link nav 2" href="/dashboard/documents"><p className="red">Documents</p></a>
			        </li>
			        <li class="nav-item">
			          <a class="nav-link nav3" href="/dashboard/inbox"><p className="blue">Inbox</p></a>
			        </li>
			        <li class="nav-item">
			          <button onClick={e => logout(e)} className="btn btn-primary">Logout</button>
			        </li>
			      </ul>
			    </div>
		    </div>
		  </div>
		</nav>
	);
}

export default NavBar;



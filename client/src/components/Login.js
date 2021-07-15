import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Header/>
        <h1 className="LoginTitleOne">Sign Into Your Account</h1>
        <h4 className="LoginTitleTwo" > 
          Access your SBA Economic Injury Disaster Loan Portal Account to review your application and track your loan status.
        </h4>
      <form onSubmit={onSubmitForm}>
        <br/>
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <div className="signInButton">
          <button  class="btn btn-danger">Sign In</button>
        </div>
      </form>
      <Link to="/register" className="link">register</Link>
    </Fragment>
  );
};

export default Login;
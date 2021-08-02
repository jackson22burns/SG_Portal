import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/authentication/register",
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
        toast.success("Register Successfully");
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
      <div className="loginScreen">
        <Header/>
        <h1 className="LoginTitleOne">Register</h1>
        <h4 className="LoginTitleTwo" > 
            Create your SBA Economic Injury Disaster Loan Portal Account to review your application and track your loan status.
          </h4>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="email"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <div className="signInButton">
          <button className="btn btn-danger btn-block">Submit</button>
          </div>
        </form>
        <Link to="/login" className="link">login</Link>
      </div>
    </Fragment>
  );
};

export default Register;
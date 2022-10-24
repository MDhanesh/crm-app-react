import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Reset() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPassword = {
      id: id,
      token: token,
      password: password,
    };
    console.log(updatedPassword);
    // if (password !== confirmpassword) {
    //   window.alert("Passwords does not match");
    // } else {
    const response = await axios.post(
      `https://crm-node-app.herokuapp.com/register/resetpassword/${id}/${token}`,
      {
        updatedPassword,
      }
    );
    if (response.data) {
      if (response.data.message === "User Not Exist") {
        window.alert("User not exists!! Please sign up and create a new one");
      }
      if (response.data.message === "Password updated") {
        window.alert("Password updated successfully!!");
        navigate("/");
      }
      if (response.data.message === "Something went wrong") {
        window.alert("Token expired!!");
      }
    }
    //  }
    // fetch(
    //   `https://crm-node-app.herokuapp.com/register/resetpassword/${id}/${token}`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify(updatePassword),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    // .then((data) => data.json())
    // .then((data) => {
    //   if (data.message === "User not exists!!") {
    //     window.alert("User not exists!! Please sign up and create a new one");
    //   }
    //   if (data.message === "Password updated") {
    //     window.alert("Password updated successfully!!");
    //     navigate("/");
    //   }
    //   if (data.message === "Something went wrong") {
    //     window.alert("Token expired!!");
    //   }
    // });
  };

  return (
    <div className="Auth-form-container">
      <div className="container d-flex flex-column">
        <div
          className="row align-items-center justify-content-center
      min-vh-100 g-0"
        >
          <div className="col-12 col-md-8 col-lg-4 border-top border-3 border-primary">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="mb-4">
                  <h5>Reset Password</h5>
                </div>
                <div className="mb-3">
                  <label htmlforr="password" className="form-label">
                    Password
                  </label>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                    name="email"
                    placeholder="Enter Your password"
                    required=""
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                    name="email"
                    placeholder="Confirm password"
                    required=""
                    value={confirmpassword}
                    onChange={(e) => setconfirmpassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Change password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Reset Password</h3>
          <div className="form-group mt-3">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="form-control mt-1"
              placeholder="New Password"
              autoComplete="off"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Confirm Password"
              autoComplete="off"
            />
          </div>

          <div className="d-grid gap-2 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form> */}
    </div>
  );
}

export default Reset;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Reset = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatePassword = {
      password: password,
      confirmpassword: confirmpassword,
    };
    console.log(updatePassword);
    if (password === confirmpassword) {
      handleSubmit();
    } else {
      window.alert("Passwords does not match");
    }
    fetch(
      `https://crm-node-app.herokuapp.com/register/resetpassword/${id}/${token}`,
      {
        method: "POST",
        body: JSON.stringify(updatePassword),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "User not exists!!") {
          window.alert("User not exists!! Please sign up and create a new one");
        }
        if (data.message === "Password updated") {
          window.alert("Password updated successfully!!");
          navigate("/");
        }
        if (data.message === "Something went wrong") {
          window.alert("Token expired!!");
        }
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
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
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reset;

import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Reset() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  return (
    <div>
      {/* <!-- As a heading --> */}

      <div className="reset-password">
        <h4 className="heading-text">Reset your password</h4>
        <TextField
          required
          type="password"
          className="login-text-email"
          onChange={(e) => setpassword(e.target.value)}
          label="New Password"
          value={password}
          variant="standard"
        />
        <TextField
          required
          type="password"
          className="login-text-fname"
          onChange={(e) => setconfirmpassword(e.target.value)}
          label="Confirm Password "
          value={confirmpassword}
          variant="standard"
        />

        <Button
          className="login-button"
          variant="contained"
          onClick={() => {
            if (password !== confirmpassword) {
              window.alert("Passwords does not match");
            } else {
              const updatedPassword = {
                id: id,
                token: token,
                password: password,
              };
              fetch(
                "https://crm-node-app.herokuapp.com/register/resetpasswordconfirm",
                {
                  method: "PUT",
                  body: JSON.stringify(updatedPassword),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
                .then((data) => data.json())
                .then((data) => {
                  if (data.message == "Password successfully reset") {
                    window.alert("Password successfully reset");
                    navigate("/login");
                  } else if (data.message == "Token expired") {
                    window.alert("Token expired");
                  } else {
                    window.alert(
                      "Some unexpected error occured.Please try after sometime"
                    );
                  }
                });
            }
          }}
        >
          Update Passwords
        </Button>
      </div>
    </div>
  );
}

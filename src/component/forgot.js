import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";

export default function Forgot() {
  const [email, setUsername] = useState("");
  const handleSubmit = async (e) => {
    {
      const employeeFromDB = {
        email: email,
      };
      const response = await axios.post(
        "https://crm-node-app.herokuapp.com/register/forgot",
        {
          email: email,
        }
      );
      console.log(response);
      if (response) {
        if (response.data.message == "Email sent successfully") {
          window.alert(
            "success!! Password reset link has been sent to your mail"
          );
        } else {
          window.alert("Please enter valid and registered email ID");
        }
      }
    }
  };

  return (
    <div>
      {/* <!-- As a heading --> */}

      <div className="forgot-password">
        <h4 className="heading-text">Reset your password</h4>
        <TextField
          required
          className="login-text-email"
          onChange={(event) => setUsername(event.target.value)}
          label="Email"
          value={email}
          variant="standard"
        />
        <Button
          className="login-button"
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Send password reset email
        </Button>
      </div>
    </div>
  );
}

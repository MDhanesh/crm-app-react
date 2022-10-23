import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Reset() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmpassword: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const response = await axios.post(
      "https://crm-node-app.herokuapp.com/register/signin",
      {}
    );
    console.log(response);
    if (response.data) {
      localStorage.setItem("token", response.data);
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div style={{ margin: "10%", paddingLeft: "30%" }}>
        <Typography variant="h4" component="div">
          Signin Yourself
        </Typography>
        <br /> <br />
        <form onSubmit={handlesubmit}>
          <div>
            <TextField
              label="Password"
              type="password"
              name="password"
              variant="standard"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              label="confirmPassword"
              type="password"
              name="password"
              variant="standard"
              value={formData.confirmpassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmpassword: e.target.value })
              }
            />
          </div>
          <Link to="/forgot"> Forgot password</Link>
          <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Link to="/"> sign in</Link>
        </form>
      </div>
    </>
  );
}

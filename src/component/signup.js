import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignupComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const response = await axios.post("http://localhost:3002/register/signup", {
      ...formData,
    });
    console.log(response);
    if (response.data) {
      // localStorage.setItem("token", response.data);
      navigate("/login");
    }
  };
  return (
    <>
      <div style={{ margin: "10%", paddingLeft: "30%" }}>
        <Typography variant="h4" component="div">
          Signup Yourself
        </Typography>
        <br /> <br />
        <form onSubmit={handlesubmit}>
          <div>
            <TextField
              type="text"
              name="firstname"
              label="First Name"
              variant="standard"
              value={formData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              type="text"
              name="lastname"
              label="last Name"
              variant="standard"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="standard"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <br />
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
              label="Confirm Password"
              type="password"
              name="confirmpassword"
              variant="standard"
              value={formData.confirmpassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmpassword: e.target.value })
              }
            />
          </div>
          <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Link to="/login"> login</Link>
        </form>
      </div>
    </>
  );
}

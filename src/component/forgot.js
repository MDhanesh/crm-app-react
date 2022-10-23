import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Forgot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState({
    email: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    const users = {
      email: email,
    };
    const response = await axios.post(
      "https://crm-node-app.herokuapp.com/register/forgot",
      {
        ...email,
      }
    );
    console.log(response);
    if (response.data) {
      navigate("/reset");
    } else {
      console.log("error in forgot");
    }
  };
  return (
    <>
      <form>
        <div>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="standard"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />

        <br />
        <Button
          variant="contained"
          type="submit"
          onClick={(e) => {
            handlesubmit(e);
          }}
        >
          Submit
        </Button>
      </form>
    </>
  );
}

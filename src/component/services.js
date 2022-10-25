import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddServices = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [joined, setJoined] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div className="add-user">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="standard"
        />

        <TextField
          onChange={(event) => setMobile(event.target.value)}
          label="Mobile"
          variant="standard"
        />

        <TextField
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          variant="standard"
        />

        <TextField
          onChange={(event) => setAddress(event.target.value)}
          label="Address"
          variant="standard"
        />

        <TextField
          onChange={(event) => setType(event.target.value)}
          label="Type"
          variant="standard"
        />

        <TextField
          onChange={(event) => setJoined(event.target.value)}
          label="Joined Date"
          variant="standard"
        />

        <TextField
          onChange={(event) => setStatus(event.target.value)}
          label="Status"
          variant="standard"
        />
      </div>

      <Button
        className="add-button"
        onClick={() => {
          const newCustomer = {
            name: name,
            mobile: mobile,
            email: email,
            address: address,
            type: type,
            joined: joined,
            status: status,
          };

          fetch("https://crm-node-app.herokuapp.com/services/create", {
            method: "POST",
            body: JSON.stringify(newCustomer),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/customers"));
        }}
        variant="contained"
      >
        Add Customer
      </Button>
    </div>
  );
};

export default AddServices;

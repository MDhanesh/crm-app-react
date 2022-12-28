import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Button, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AddCustomer() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    company: "",
    country: "",
    error: {
      name: "",
      phone: "",
      email: "",
      address: "",
      company: "",
      country: "",
    },
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errKeys = Object.keys(formData).filter((key) => {
        if (formData[key] === "" && key !== "id" && key !== "error") {
          return key;
        }
      });
      if (errKeys.length >= 1) {
        alert("Please fill all Data");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
      ) {
        alert("Please Enter a Valid Email Address");
      } else {
        const response = await axios.post(
          `https://crmapp-g7w5.onrender.com/contact/create/`,
          { contact: { ...formData } },
          { headers: { accesstoken: localStorage.getItem("token") } }
        );
        console.log(response);
        setTimeout(() => {
          navigate("/customerdata");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //handlesubmit
  const handleChange = (e) => {
    let error = { ...formData.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is Required`;
    } else {
      error[e.target.name] = "";
    }
    setFormData({ ...formData, [e.target.name]: e.target.value, error });
  };
  ////

  return (
    <>
      <div id="page-top">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          <Sidebar />
          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
              <Navbar />
              <div className="add-user ">
                <div style={{ display: "flex" }}>
                  <div
                    className="product col-md-3 col-lg-6 offset-md-3"
                    style={{
                      justifyContent: "center",
                      padding: "30px",
                      backgroundColor: "white",
                      paddingLeft: "62px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        fontSize: "30px",
                        color: "black",
                        fontWeight: "bolder",
                      }}
                    >
                      Add Customer
                    </Typography>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div>
                        <TextField
                          fullWidth
                          value={formData.name}
                          onChange={(e) => handleChange(e)}
                          label="Name"
                          variant="standard"
                          name="name"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.name}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.phone}
                          onChange={(e) => handleChange(e)}
                          label="Phone"
                          variant="standard"
                          name="phone"
                        />

                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.phone}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.email}
                          onChange={(e) => handleChange(e)}
                          label="Email"
                          variant="standard"
                          name="email"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.email}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.address}
                          onChange={(e) => handleChange(e)}
                          label="Address"
                          variant="standard"
                          name="address"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.address}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.company}
                          onChange={(e) => handleChange(e)}
                          label="company"
                          variant="standard"
                          name="company"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.company}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.country}
                          onChange={(e) => handleChange(e)}
                          label="country"
                          variant="standard"
                          name="country"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.country}
                        </span>
                        <br />
                        <Button
                          style={{
                            width: "120px",
                          }}
                          variant="contained"
                          type="submit"
                        >
                          Add Customer
                        </Button>
                      </div>
                      <br />

                      <br />
                      <div></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

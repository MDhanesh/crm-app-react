import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Typography,
  Button,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function AddLead() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    title: "",
    company: "",
    phone: "",
    email: "",
    status: "",
    created: "",
    owner: "",
    error: {
      fullname: "",
      title: "",
      company: "",
      phone: "",
      email: "",
      status: "",
      created: "",
      owner: "",
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
          `https://crmapp-g7w5.onrender.com/lead/create/`,
          { lead: { ...formData } },
          { headers: { accesstoken: localStorage.getItem("token") } }
        );
        console.log(response);
        setTimeout(() => {
          navigate("/leaddata");
        }, 1000);
        if (response.status == 200) {
          alert("Lead Data Created sucessfully");
        }
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
              <div className="add-user">
                <div style={{ display: "flex" }}>
                  <div
                    className="product col-md-4 col-lg-6 offset-md-3"
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
                      Add services
                    </Typography>

                    <br />
                    <form onSubmit={handleSubmit}>
                      <div>
                        <TextField
                          fullWidth
                          value={formData.fullname}
                          onChange={(e) => handleChange(e)}
                          label="Name"
                          variant="outlined"
                          name="fullname"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.fullname}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.title}
                          onChange={(e) => handleChange(e)}
                          label="Title"
                          variant="outlined"
                          name="title"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.title}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.company}
                          onChange={(e) => handleChange(e)}
                          label="Company"
                          variant="outlined"
                          name="company"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.company}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.phone}
                          onChange={(e) => handleChange(e)}
                          label="Phone Number"
                          variant="outlined"
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
                          variant="outlined"
                          name="email"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.email}
                        </span>
                        <br />
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.status}
                            label="Status"
                            name="status"
                            onChange={(e) => handleChange(e)}
                          >
                            <MenuItem value="New">New</MenuItem>
                            <MenuItem value="Contacted">Contacted</MenuItem>
                            <MenuItem value="Qualified">Qualified</MenuItem>
                            <MenuItem value="Lost">Lost</MenuItem>
                            <MenuItem value="Canceled">Canceled</MenuItem>
                            <MenuItem value="Confirmed">Confirmed</MenuItem>
                          </Select>
                        </FormControl>
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.status}
                        </span>
                        <br />
                        <TextField
                          fullWidth
                          value={formData.created}
                          onChange={(e) => handleChange(e)}
                          label="Created Date"
                          variant="outlined"
                          name="created"
                        />
                        <br />{" "}
                        <span style={{ color: "red" }}>
                          {formData.error.created}
                        </span>{" "}
                        <br />
                        <TextField
                          fullWidth
                          value={formData.owner}
                          onChange={(e) => handleChange(e)}
                          label="Owner"
                          variant="outlined"
                          name="owner"
                        />
                        <br />
                        <span style={{ color: "red" }}>
                          {formData.error.owner}
                        </span>
                        <br />
                        <br />
                        <Button
                          style={{
                            width: "120px",
                          }}
                          variant="contained"
                          type="submit"
                        >
                          Add Lead
                        </Button>
                      </div>
                      <br />

                      <br />
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
export default AddLead;

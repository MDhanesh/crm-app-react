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
    status: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `https://crm-node-app.herokuapp.com/contact/create/`,
        { contact: { ...formData } },
        { headers: { accesstoken: localStorage.getItem("token") } }
      );
      console.log(response);
      setTimeout(() => {
        navigate("/customerdata");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

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
                    className="product col-md-3 col-lg-4"
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
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          label="Name"
                          variant="standard"
                          name="name"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          label="Phone"
                          variant="standard"
                          name="phone"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          label="Email"
                          variant="standard"
                          name="email"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                          label="Address"
                          variant="standard"
                          name="address"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          label="company"
                          variant="standard"
                          name="company"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.status}
                          onChange={(e) =>
                            setFormData({ ...formData, status: e.target.value })
                          }
                          label="Status"
                          variant="standard"
                          name="status"
                          required
                        />
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

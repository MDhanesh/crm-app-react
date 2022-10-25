import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Button, Box } from "@mui/material";
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
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `https://crm-node-app.herokuapp.com/lead/create/`,
        { lead: { ...formData } },
        { headers: { accesstoken: localStorage.getItem("token") } }
      );
      console.log(response);
      setTimeout(() => {
        navigate("/leaddata");
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
                      Add services
                    </Typography>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div>
                        <TextField
                          value={formData.fullname}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullname: e.target.value,
                            })
                          }
                          label="Name"
                          variant="standard"
                          name="fullname"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                          label="Title"
                          variant="standard"
                          name="title"
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
                          label="Company"
                          variant="standard"
                          name="company"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          label="Phone Number"
                          variant="standard"
                          name="phone"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          label="Email"
                          variant="standard"
                          name="email"
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
                        <TextField
                          value={formData.created}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              created: e.target.value,
                            })
                          }
                          label="Created Date"
                          variant="standard"
                          name="created"
                          required
                        />
                        <br />
                        <TextField
                          value={formData.owner}
                          onChange={(e) =>
                            setFormData({ ...formData, owner: e.target.value })
                          }
                          label="Owner"
                          variant="standard"
                          name="owner"
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

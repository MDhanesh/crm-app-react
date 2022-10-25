import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function AddServices() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyname: "",
    servicetype: "",
    users: "",
    status: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `https://crm-node-app.herokuapp.com/services/create/`,
        { services: { ...formData } },
        { headers: { accesstoken: localStorage.getItem("token") } }
      );
      console.log(response);
      setTimeout(() => {
        navigate("/servicesdata");
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

                  <form onSubmit={handleSubmit}>
                    <div>
                      <TextField
                        className="textfield"
                        sx={{
                          width: 300,
                        }}
                        id="standard-basic"
                        label="servicestype"
                        required
                        variant="standard"
                        name="name"
                        value={formData.serviceneed}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyname: e.target.value,
                          })
                        }
                      />
                    </div>
                    <br />
                    <div>
                      <TextField
                        className="textfield"
                        sx={{
                          width: 300,
                        }}
                        id="standard-basic"
                        label="Product Name"
                        required
                        variant="standard"
                        name="servicetype"
                        value={formData.servicetype}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            servicetype: e.target.value,
                          })
                        }
                      />
                    </div>
                    <br />
                    <div>
                      <TextField
                        className="textfield"
                        sx={{
                          width: 300,
                        }}
                        id="standard-basic"
                        label="Product users"
                        required
                        variant="standard"
                        type="text"
                        name="users"
                        value={formData.users}
                        onChange={(e) =>
                          setFormData({ ...formData, users: e.target.value })
                        }
                      />
                    </div>
                    <br />
                    <div>
                      <TextField
                        className="textfield"
                        sx={{
                          width: 300,
                        }}
                        id="standard-basic"
                        label="Quantity"
                        variant="standard"
                        required
                        type="number"
                        name="confirmpassword"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.value })
                        }
                      />
                    </div>
                    <br />
                    <div>
                      <select
                        style={{ width: "300px" }}
                        class="form-select"
                        aria-label="Default select example"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                      >
                        <option selected>Select Type</option>
                        <option value="camera">Camera</option>
                        <option value="lens">Lens</option>
                        <option value="light">Light</option>
                      </select>
                    </div>
                    <br />
                    <div>
                      <Button
                        style={{
                          width: "120px",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Request Services
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddServices;

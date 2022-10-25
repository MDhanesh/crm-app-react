import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
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
      }, 5000);
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
                <form onSubmit={handleSubmit}>
                  <TextField
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                    // onChange={(event) => setName(event.target.value)}
                    label="Name"
                    variant="standard"
                  />

                  <TextField
                    // onChange={(event) => setTitle(event.target.value)}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    label="Title"
                    variant="standard"
                  />

                  <TextField
                    // onChange={(event) => setCompany(event.target.value)}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    label="Company"
                    variant="standard"
                  />

                  <TextField
                    // onChange={(event) => setPhone(event.target.value)}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    label="Phone Number"
                    variant="standard"
                  />

                  <TextField
                    // onChange={(event) => setEmail(event.target.value)}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    label="Email"
                    variant="standard"
                  />

                  <TextField
                    // onChange={(event) => setStatus(event.target.value)}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    label="Status"
                    variant="standard"
                  />

                  <TextField
                    // onChange={(event) => setCreated(event.target.value)}
                    onChange={(e) =>
                      setFormData({ ...formData, created: e.target.value })
                    }
                    label="Created Date"
                    variant="standard"
                  />

                  <TextField
                    // onChange={(event) => setOwner(event.target.value)}
                    onChange={(e) =>
                      setFormData({ ...formData, owner: e.target.value })
                    }
                    label="Owner"
                    variant="standard"
                  />
                  <Button
                    style={{
                      width: "120px",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Add Lead
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddLead;

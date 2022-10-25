import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function LeadData() {
  const [lead, setLead] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getleads() {
      const response = await axios.get(
        `https://crm-node-app.herokuapp.com/lead/get`,
        {
          headers: {
            accesstoken: localStorage.getItem("token"),
          },
        }
      );
      setLead(response.data);
    }

    getleads();
  }, []);

  const [name, setName] = useState(lead.name);
  const [mobile, setMobile] = useState(lead.mobile);
  const [email, setEmail] = useState(lead.email);
  const [address, setAddress] = useState(lead.address);
  const [type, setType] = useState(lead.type);

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
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Lead Name</th>
                      <th scope="col">Title</th>
                      <th scope="col">Company</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Lead Status</th>
                      <th scope="col">Lead Created</th>
                      <th scope="col">Lead Owner</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lead.map((lead) => {
                      return (
                        <tr>
                          <td>{lead.fullname}</td>
                          <td>{lead.title}</td>
                          <td>{lead.company}</td>
                          <td>{lead.phone}</td>
                          <td>{lead.email}</td>
                          <td>{lead.status}</td>
                          <td>{lead.created}</td>
                          <td>{lead.owner}</td>
                          <td>
                            <IconButton onClick="" color="secondary">
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick="" color="error">
                              <DeleteIcon />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadData;

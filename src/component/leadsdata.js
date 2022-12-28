import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function LeadData() {
  const [lead, setLead] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getleads() {
      const response = await axios.get(
        `https://crmapp-g7w5.onrender.com/lead/get/`,
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
                <Typography
                  variant="h4"
                  style={{
                    fontSize: "30px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  LEADS DATA
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Lead Name</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Company</TableCell>

                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Created</TableCell>
                        <TableCell>Owner</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {lead.map((row) => (
                        <TableRow
                          key={row._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>{row.fullname}</TableCell>
                          <TableCell>{row.title}</TableCell>
                          <TableCell>{row.company}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.phone}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell>{row.created}</TableCell>
                          <TableCell>{row.owner}</TableCell>
                          <TableCell>
                            <IconButton color="secondary">
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={async () => {
                                const response = await axios.delete(
                                  `https://crmapp-g7w5.onrender.com/lead/delete/${row._id}`,
                                  {
                                    headers: {
                                      accesstoken:
                                        localStorage.getItem("token"),
                                    },
                                  }
                                );

                                window.location.reload();
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadData;

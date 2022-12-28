import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import axios from "axios";

import Typography from "@mui/material/Typography";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function ServicesData() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getservicess() {
      const response = await axios.get(
        `https://crmapp-g7w5.onrender.com/services/get`,
        {
          headers: {
            accesstoken: localStorage.getItem("token"),
          },
        }
      );
      setServices(response.data);
    }

    getservicess();
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
                  SERVICES DATA
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Services Type</TableCell>
                        <TableCell>Phone</TableCell>{" "}
                        <TableCell>Email</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Services Status</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {services.map((row) => (
                        <TableRow
                          key={row._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>{row.fullname}</TableCell>
                          <TableCell>{row.title}</TableCell>
                          <TableCell>{row.phone}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.company}</TableCell>

                          <TableCell>{row.servicetype}</TableCell>
                          <TableCell>{row.status}</TableCell>

                          <TableCell>
                            <IconButton color="secondary">
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={async () => {
                                const response = await axios.delete(
                                  `https://crm-node-app.herokuapp.com/services/delete/${row._id}`,
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

export default ServicesData;

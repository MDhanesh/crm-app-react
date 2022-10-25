import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function ServicesData() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getservicess() {
      const response = await axios.get(
        `https://crm-node-app.herokuapp.com/services/get`,
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
              <Box sx={{ flexGrow: 1 }}></Box>
              <Grid
                container
                spacing={5}
                style={{ padding: "30px", justifyContent: "center" }}
              >
                {services.map((row) => (
                  <Grid item key={row._id}>
                    <Card sx={{ maxWidth: 350, height: 430 }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={row.servicesurl}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 20 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          <strong>{row.servicesname}</strong>
                        </Typography>

                        <Typography sx={{ mb: 1.5 }}>
                          <strong> Price perday : {row.price} Rs</strong>
                        </Typography>

                        <Typography variant="body2" sx={{ fontSize: 15 }}>
                          <strong>Quantity : {row.quantity}</strong>
                          <br />
                        </Typography>
                        <br />
                        <Button
                          variant="contained"
                          style={{
                            width: "140px",
                            marginRight: "53px",
                            fontSize: "12px",
                          }}
                          //   onClick={() => Edit()}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="contained"
                          style={{
                            width: "120px",
                          }}
                          onClick={async () => {
                            const response = await axios.delete(
                              `https://crm-node-app.herokuapp.com/services/delete/${row._id}`,
                              {
                                headers: {
                                  accesstoken: localStorage.getItem("token"),
                                },
                              }
                            );
                            navigate("/services");
                          }}
                        >
                          Delete
                        </Button>
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Service Request Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">User Responsible</th>
                    <th scope="col">Sevice Category</th>
                    <th scope="col">Service Request Created</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((services) => {
                    return (
                      <tr>
                        <td>{services.name}</td>
                        <td>{services.status}</td>
                        <td>{services.user_responsible}</td>
                        <td>{services.service_category}</td>
                        <td>{services.created}</td>
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
    </>
  );
}

export default ServicesData;

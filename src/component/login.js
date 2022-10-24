import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const response = await axios.post(
      "https://crm-node-app.herokuapp.com/register/signin",
      {
        ...formData,
      }
    );
    console.log(response);
    if (response.data) {
      localStorage.setItem("token", response.data);
      navigate("/dashboard");
    }
  };
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style="border-radius: 1rem;"
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    <form onSubmit={handlesubmit}>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" for="typePasswordX">
                          Password
                        </label>
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <Link className="text-white-50" to="/forgot">
                          Forgot password?
                        </Link>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////// */}
      {/* <div style={{ margin: "10%", paddingLeft: "30%" }}>
        <Typography variant="h4" component="div">
          Signin Yourself
        </Typography>
        <br /> <br />
        <form onSubmit={handlesubmit}>
          <div>
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="standard"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              label="Password"
              type="password"
              name="password"
              variant="standard"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <Link to="/forgot"> Forgot password</Link>
          <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Link to="/signup"> signup</Link>
        </form>
      </div> */}
    </>
  );
}

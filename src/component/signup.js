import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignupComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const response = await axios.post(
      "https://crm-node-app.herokuapp.com/register/signup",
      {
        ...formData,
      }
    );
    console.log(response);
    if (response.data) {
      // localStorage.setItem("token", response.data);
      navigate("/signup");
    }
  };
  return (
    <>
      {/* <div style={{ margin: "10%", paddingLeft: "30%" }}>
        <Typography variant="h4" component="div">
          Signup Yourself
        </Typography>
        <br /> <br />
        <form onSubmit={handlesubmit}>
          <div>
            <TextField
              type="text"
              name="firstname"
              label="First Name"
              variant="standard"
              value={formData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              type="text"
              name="lastname"
              label="last Name"
              variant="standard"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
            />
          </div>
          <br />
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
          <br />
          <div>
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmpassword"
              variant="standard"
              value={formData.confirmpassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmpassword: e.target.value })
              }
            />
          </div>
          <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Link to="/"> login</Link>
        </form>
      </div> */}
      {/* ///////////////////////////// */}
      <section
        className="vh-100 bg-image"
        style={{
          backgroundimage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderradius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handlesubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">
                          FirstName*
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control form-control-lg"
                          placeholder="Firstname"
                          value={formData.firstname}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstname: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">
                          LastName*
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          className="form-control form-control-lg"
                          placeholder="Lastname"
                          value={formData.lastname}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastname: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="password"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Confirm your password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="Confirm your password"
                          value={formData.confirmpassword}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              confirmpassword: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Already have an account?
                        <Link to="/" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                        {/* <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a> */}
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

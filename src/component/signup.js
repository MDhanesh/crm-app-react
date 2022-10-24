import React, { useState } from "react";
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
      navigate("/");
    }
  };
  return (
    <>
      <section className="vh-100 bg-image gradient-custom">
        <div className="mask d-flex align-items-center h-100 ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  className="card  bg-dark text-white"
                  style={{ borderradius: "15px" }}
                >
                  <div className="card-body p-5">
                    <h2 className=" text-white-50 text-uppercase text-center mb-5">
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
                          required
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
                          required
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
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
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
                          required
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
                          required
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
                          className="btn btn-outline-light btn-lg px-5"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-white-50 mt-5 mb-0">
                        Already have an account?
                        <Link to="/" className="fw-bold text-white-50">
                          <u>Login here</u>
                        </Link>
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

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
    error: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });
  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      const errKeys = Object.keys(formData).filter((key) => {
        if (formData[key] === "" && key !== "id" && key !== "error") {
          return key;
        }
      });
      if (errKeys.length >= 1) {
        alert("Please fill all Data");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
      ) {
        window.alert("Please Enter a Valid Email Address");
      } else {
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
        if (response.status == 200) {
          alert(" Account Created sucessfully");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //handlesubmit
  const handleChange = (e) => {
    let error = { ...formData.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is Required`;
    } else {
      error[e.target.name] = "";
    }
    setFormData({ ...formData, [e.target.name]: e.target.value, error });
  };
  ////
  return (
    <>
      <nav className="navbar navbar-dark bg-dark  text-center">
        <div className="container">
          <h5 className="navbar-text fw-bold justify-content-center align-content-center ">
            Customer Relationship Manager
          </h5>
          <Link to="/">
            <button className="btn btn-primary" type="submit">
              LOGIN
            </button>
          </Link>
        </div>
      </nav>

      <div className=" gradient-custom">
        <section className=" bg-image ">
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
                          <label
                            className="form-label"
                            htmlFor="form3Example1cg"
                          >
                            FirstName
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            className="form-control form-control-lg"
                            placeholder="Firstname"
                            value={formData.firstname}
                            onChange={(e) => handleChange(e)}
                          />
                          <span style={{ color: "red" }}>
                            {formData.error.firstname}
                          </span>
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example1cg"
                          >
                            LastName
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            className="form-control form-control-lg"
                            placeholder="Lastname"
                            value={formData.lastname}
                            onChange={(e) => handleChange(e)}
                          />
                          <span style={{ color: "red" }}>
                            {formData.error.lastname}
                          </span>
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            Your Email
                          </label>
                          <input
                            // type="email"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleChange(e)}
                          />
                          <span style={{ color: "red" }}>
                            {formData.error.email}
                          </span>
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            placeholder="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => handleChange(e)}
                          />
                          <span style={{ color: "red" }}>
                            {formData.error.password}
                          </span>
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
                            name="confirmpassword"
                            id="form3Example4cdg"
                            className="form-control form-control-lg"
                            placeholder="Confirm your password"
                            value={formData.confirmpassword}
                            onChange={(e) => handleChange(e)}
                          />
                          <span style={{ color: "red" }}>
                            {formData.error.confirmpassword}
                          </span>
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
      </div>
    </>
  );
}

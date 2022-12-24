import React, { useState } from "react";
import "./registration.css";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [signIn, setSignIn] = useState(false);
  const SignInHandleClick = (e) => {
    e.preventDefault();
    setSignIn(false);
  };
  const SignUpHandleClick = (e) => {
    e.preventDefault();
    setSignIn(true);
  };
  //signup formik
  let Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate: (values) => {
      var errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (values.name === "") errors.name = "Name is Required";
      //  if (!regex.test(values.email)) errors.email = "Email is Required";
      if (!values.email) {
        errors.email = "Email is Required";
      } else if (!regex.test(values.email)) {
        errors.email = "Invalid email format";
      }
      //if (values.password === "") errors.password = "password is Required";
      if (!values.password) {
        errors.password = "password is Required";
      } else if (values.password.length < 7) {
        errors.password = "Password must be more than 7 characters";
      }
      // if (values.confirmpassword === "")
      //   errors.confirmpassword = "Confirm Password is Required";
      if (!values.confirmpassword) {
        errors.confirmpassword = "password is Required";
      } else if (values.confirmpassword.length < 7) {
        errors.confirmpassword = "Password must be more than 7 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        // console.log(values);
        const response = await axios.post(
          `http://localhost:4000/register/signup`,
          {
            ...values,
          }
        );
        // console.log(response);

        if (response.data) {
          localStorage.setItem("token", response.data);
          Swal.fire({
            title: "User Created Successfully",
            icon: "success",
            confirmButtonText: "okay",
          });
          navigate("/");
        }
        if (response.status == 200) {
          alert(" Account Created sucessfully");
        }
      } catch (error) {
        console.log(error);
        window.alert("Please enter registered email ID and Password");
      }
    },
  });
  //signin formik
  let FormikSignin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      var errors = {};
      if (values.email === "") errors.email = "Email is Required";
      if (values.password === "") errors.password = "Password is Required";
      return errors;
    },
    onSubmit: async (values) => {
      try {
        // console.log(values);
        const response = await axios.post(
          "http://localhost:4000/register/signin",
          {
            ...values,
          }
        );
        navigate("/home");
        //console.log(response);
        if (response.data) {
          localStorage.setItem("token", response.data);
        }
      } catch (error) {
        console.log(error.response.data.msg);
        Swal.fire({
          title: "Wrong credentials",
          icon: "error",
          confirmButtonText: "okay",
        });
      }
    },
  });
  return (
<<<<<<< HEAD
    <>
      <nav className="navbar navbar-dark bg-dark  text-center">
        <div className="container">
          <h5 className="navbar-text fw-bold justify-content-center align-content-center ">
            Customer Relationship Management
          </h5>
          <Link to="/">
            <button className="btn btn-primary" type="submit">
              LOGIN
            </button>
          </Link>
        </div>
      </nav>

      <div>
        <section className=" bg-image vh-100  gradient-custom">
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
=======
    <div className={`containers ${signIn ? "sign-up-mode" : ""}`}>
      <div className="forms-container ">
        <div className="signin-signup">
          <form onSubmit={FormikSignin.handleSubmit} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={FormikSignin.values.email}
                onBlur={FormikSignin.handleBlur}
                onChange={FormikSignin.handleChange}
              />
>>>>>>> d695447190cdbf73b835a73318f2d42916b3f5d9
            </div>
            <div style={{ color: "red" }}>
              {FormikSignin.touched.email && FormikSignin.errors.email}
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={FormikSignin.values.password}
                onChange={FormikSignin.handleChange}
                onBlur={FormikSignin.handleBlur}
              />
            </div>
            <div style={{ color: "red" }}>
              {FormikSignin.touched.password && FormikSignin.errors.password}
            </div>
            <a href="/forgot">Forgot Password?</a>
            <input type="submit" value="login" className="btns solid" />
          </form>
          {/* sign up page */}
          <form onSubmit={Formik.handleSubmit} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={Formik.values.name}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
            </div>
            <div style={{ color: "red" }}>
              {Formik.touched.name && Formik.errors.name}
            </div>
            <div className="input-field">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={Formik.values.email}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
              />
            </div>
            <div style={{ color: "red" }}>
              {Formik.touched.email && Formik.errors.email}
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={Formik.values.password}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
            </div>
            <div style={{ color: "red" }}>
              {Formik.touched.password && Formik.errors.password}
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={Formik.values.confirmpassword}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
              />
            </div>
            <div style={{ color: "red" }}>
              {Formik.touched.confirmpassword && Formik.errors.confirmpassword}
            </div>
            <input type="submit" value="sign up" className="btns solid" />
          </form>
        </div>
      </div>
      <div className="panel-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Signup With us <br />
            </p>
            <button
              className="btns transparent"
              id="sign-up-btns"
              onClick={SignUpHandleClick}
            >
              sign Up
            </button>
          </div>

          <img src={one} className="image" alt=""></img>
        </div>
        <div className="panel right-panel ">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Just Login with your email and password</p>

            <button
              className="btns transparent"
              id="sign-in-btns"
              onClick={SignInHandleClick}
            >
              Login
            </button>
          </div>
          <img src={two} className="image" alt=""></img>
        </div>
      </div>
    </div>
  );
}

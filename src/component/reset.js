// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { useNavigate, useParams } from "react-router-dom";

// const Reset = () => {
//   const { id, token } = useParams();
//   const navigate = useNavigate();
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   return (
//     <div>
//       {/* <!-- As a heading --> */}
//       <nav className="navbar bg-primary">
//         <div className="container-fluid">
//           <a className="navbar-brand text-white">CRM Application</a>
//           <form className="d-flex" role="search">
//             <button
//               onClick={() => navigate("/login")}
//               className="btn btn-light"
//               type="submit"
//             >
//               Login
//             </button>
//             &nbsp;
//             <button
//               onClick={() => navigate("/signup")}
//               className="btn btn-light"
//               type="submit"
//             >
//               Signup
//             </button>
//           </form>
//         </div>
//       </nav>

//       <div className="reset-password">
//         <h4 className="heading-text">Reset your password</h4>
//         <TextField
//           required
//           type="password"
//           className="login-text-email"
//           onChange={(event) => setNewPassword(event.target.value)}
//           label="New Password"
//           value={newPassword}
//           variant="standard"
//         />
//         <TextField
//           required
//           type="password"
//           className="login-text-fname"
//           onChange={(event) => setConfirmPassword(event.target.value)}
//           label="Confirm Password "
//           value={confirmPassword}
//           variant="standard"
//         />

//         <Button
//           className="login-button"
//           variant="contained"
//           onClick={() => {
//             if (newPassword !== confirmPassword) {
//               window.alert("Passwords does not match");
//             } else {
//               const updatedPassword = {
//                 id: id,
//                 token: token,
//                 password: newPassword,
//               };
//               fetch(
//                 "https://crm-node-app.herokuapp.com/register/resetpassword",
//                 {
//                   method: "POST",
//                   body: JSON.stringify(updatedPassword),
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                 }
//               )
//                 .then((data) => data.json())
//                 .then((data) => {
//                   if (data.message == "Password successfully reset") {
//                     window.alert("Password successfully reset");
//                     navigate("/login");
//                   } else if (data.message == "Token expired") {
//                     window.alert("Token expired");
//                   } else {
//                     window.alert(
//                       "Some unexpected error occured.Please try after sometime"
//                     );
//                   }
//                 });
//             }
//           }}
//         >
//           Update Password
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Reset;

import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Reset = () => {
  const { id, token } = useParams();

  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordMatch = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      handleSubmit();
    } else {
      window.alert("Passwords does not match");
    }
  };

  const handleSubmit = () => {
    const updatePassword = {
      password: password,
    };
    console.log(updatePassword);
    fetch(
      `https://crm-node-app.herokuapp.com/register/resetpassword/${id}/${token}`,
      {
        method: "POST",
        body: JSON.stringify(updatePassword),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "User not exists!!") {
          window.alert("User not exists!! Please sign up and create a new one");
        }
        if (data.message === "Password updated") {
          window.alert("Password updated successfully!!");
        }
        if (data.message === "Something went wrong") {
          window.alert("Token expired!!");
        }
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Reset Password</h3>
          <div className="form-group mt-3">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
              className="form-control mt-1"
              placeholder="New Password"
              autoComplete="off"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="form-control mt-1"
              placeholder="Confirm Password"
              autoComplete="off"
            />
          </div>

          <div className="d-grid gap-2 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={passwordMatch}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reset;

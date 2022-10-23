import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// export default function Forgot() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     const users = {
//       email: email,
//     };
//     const response = await axios.post(
//       "http://localhost:3002/register/forgot",
//       {}
//     );
//     console.log(response);
//     // if (response.data) {
//     //   navigate("/reset");
//     // } else {
//     //   console.log("error in forgot");
//     // }
//   };
//   return (
//     <>
//       <form>
//         <div>
//           <TextField
//             type="email"
//             name="email"
//             label="Email"
//             variant="standard"
//             // value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <br />

//         <br />
//         <Button
//           variant="contained"
//           type="submit"
//           onClick={(e) => {
//             handlesubmit(e);
//           }}
//         >
//           Submit
//         </Button>
//       </form>
//     </>
//   );
// }
export default function Forgot() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");

  return (
    <div>
      {/* <!-- As a heading --> */}

      <div className="forgot-password">
        <h4 className="heading-text">Reset your password</h4>
        <TextField
          required
          className="login-text-email"
          onChange={(event) => setUsername(event.target.value)}
          label="Email"
          value={email}
          variant="standard"
        />
        <Button
          className="login-button"
          variant="contained"
          onClick={() => {
            const employeeFromDB = {
              email: email,
            };
            fetch("https://crm-node-app.herokuapp.com/register/forgot", {
              method: "POST",
              body: JSON.stringify(employeeFromDB),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((data) => data.json())
              .then((data) => {
                if (data.message === "success") {
                  window.alert(
                    "success!! Password reset link has been sent to your mail"
                  );
                } else {
                  window.alert("Please enter valid and registered email ID");
                }
              });
          }}
        >
          Send password reset email
        </Button>
      </div>
    </div>
  );
}

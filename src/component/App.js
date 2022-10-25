import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function App() {
  //GET Method
  //usestate for GET METHOD
  const [get, setGet] = useState([]);
  //useeffect for GET METHOD
  useEffect(() => {
    async function APIData() {
      const response = await axios.get(
        "https://62ff2d03a85c52ee48420f24.mockapi.io/user"
      );
      setGet(response.data);
    }
    APIData();
  }, []);
  //--------------------------------------------------------------//
  //POST Method
  //
  let formValue = {
    id: "",
    name: "",
    age: "",
    email: "",
    gender: "",
    course: "",
    error: {
      name: "",
      age: "",
      email: "",
      gender: "",
      course: "",
    },
  };
  //usestate for POST METHOD
  const [post, setPost] = useState(formValue);
  //FUNCTION for POST Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errKeys = Object.keys(post).filter((key) => {
      if (post[key] === "" && key !== "id" && key !== "error") {
        return key;
      }
    });
    if (errKeys.length >= 1) {
      alert("Please fill all Data");
    } else {
      if (post.id) {
        const response = await axios.put(
          `https://62ff2d03a85c52ee48420f24.mockapi.io/user/${post.id}`,
          {
            name: post.name,
            age: post.age,
            email: post.email,
            gender: post.gender,
            course: post.course,
          }
        );
        console.log(response);
        let user = [...get];
        let index = user.findIndex((row) => row.id === response.data.id);
        user[index] = response.data;
        setGet(user);
      } else {
        const response = await axios.post(
          "https://62ff2d03a85c52ee48420f24.mockapi.io/user",
          {
            name: post.name,
            age: post.age,
            email: post.email,
            gender: post.gender,
            course: post.course,
          }
        );
        console.log(response.data);
        setGet([...get, response.data]);
        setPost(formValue);
      }
    }
  };
  //
  //handlesubmit
  const handleChange = (e) => {
    let error = { ...post.error };
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} is Required`;
    } else {
      error[e.target.name] = "";
    }
    setPost({ ...post, [e.target.name]: e.target.value, error });
  };
  ////
  const value = (id) => {
    let apiData = get.filter((row) => row.id === id)[0];
    console.log(apiData);
    setPost({ ...post, ...apiData });
  };
  ///
  ///
  const Delete = async (id) => {
    const response = await axios.delete(
      `https://62ff2d03a85c52ee48420f24.mockapi.io/user/${id}`
    );
    const user = get.filter((row) => row.id !== response.data.id);
    setGet(user);
  };
  return (
    <>
      <h3>FORM DATA TO FILL</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          name="name"
          value={post.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span style={{ color: "red" }}>{post.error.name}</span>
        <br />
        <TextField
          id="age"
          label="Age"
          variant="outlined"
          type="number"
          name="age"
          value={post.age}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span style={{ color: "red" }}>{post.error.age}</span>
        <br />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          value={post.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <span style={{ color: "red" }}>{post.error.email}</span>
        <br />
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="gender"
          value={post.gender}
          onChange={(e) => handleChange(e)}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Course</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={post.course}
            name="course"
            label="Course"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="REACT">REACT</MenuItem>
            <MenuItem value="DSA">DSA</MenuItem>
            <MenuItem value="CSS">CSS</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button variant="contained" type="submit">
          submit
        </Button>
      </Box>
      <h3>Data Fetch From API</h3>
      <TableContainer component={Paper}>
        <Table sx={{ width: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">AGE</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">GENDER</TableCell>
              <TableCell align="right">COURSE</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {get.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => value(row.id)}>
                    EDIT
                  </Button>
                  &nbsp;
                  <Button variant="contained" onClick={() => Delete(row.id)}>
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./component/login";
import SignupComponent from "./component/signup";
import Apps from "./component/dashboard";
import Forgot from "./component/forgot";
import Reset from "./component/reset";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<SignupComponent />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/dashboard" element={<Apps />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./component/login";
import SignupComponent from "./component/signup";
import Apps from "./component/dashboard";
import Forgot from "./component/forgot";
import Reset from "./component/reset";
import AddServices from "./component/services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/dashboard" element={<Apps />} />
          <Route path="/reset/:id/:token" element={<Reset />} />
          <Route path="/services" element={<AddServices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

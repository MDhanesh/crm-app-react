import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./component/login";
import SignupComponent from "./component/signup";
import Forgot from "./component/forgot";
import Reset from "./component/reset";
import AddServices from "./component/services";
import ServicesData from "./component/servicesdata";
import Dashboard from "./component/dashboard";
import AddLead from "./component/leads";
import LeadData from "./component/leadsdata";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reset/:id/:token" element={<Reset />} />
          <Route path="/services" element={<AddServices />} />
          <Route path="/servicesdata" element={<ServicesData />} />
          <Route path="/lead" element={<AddLead />} />
          <Route path="/leaddata" element={<LeadData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

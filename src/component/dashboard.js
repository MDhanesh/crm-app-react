import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

export default function Dashboard() {
  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}

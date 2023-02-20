import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="container bg-dark rounded">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;

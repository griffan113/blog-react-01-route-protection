import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;

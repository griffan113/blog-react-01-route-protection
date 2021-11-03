import React from "react";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Welcome to Dashboard {props.user.name}!</h1>
    </div>
  );
};

export default Dashboard;

import React from "react";
import "./App.css";
import ReactRoute from "./routes/Route";

function App() {
  let userData = JSON.parse(localStorage.getItem("token"));
  let auth = {};
  if (userData) {
    auth = {
      isSignedIn: true,
    };
  } else {
    auth = {
      isSignedIn: false,
    };
  }

  return (
    <div>
      <ReactRoute user={auth} />
    </div>
  );
}

export default App;

import React from "react";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

// import SignUp from "../pages/Accounts/SignUp";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Accounts/Login";

let userData;

function UserRoute() {
  userData = localStorage.getItem("userData");
  console.log("USERRR", userData);

  let location = useLocation();

  if (userData) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
}

function AccountRoute() {
  userData = localStorage.getItem("userData");
  console.log("USERRR", userData);

  let location = useLocation();

  if (!userData) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
}

// const RestrictedRoute = ({
//   component: Component,
//   isAuthenticated,
//   role,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated && role === "admin" ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{ pathname: "/login", state: { from: props.location } }}
//         />
//       )
//     }
//   />
// );

const ReactRoute = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route element={<UserRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AccountRoute />}>
          <Route exact path="/signup" element={<Login />} />
          <Route exact path="/signin" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default ReactRoute;
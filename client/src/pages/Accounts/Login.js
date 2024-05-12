import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import signInBg from "../../assets/images/login-bg.svg";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import { signupUser, loginUser } from "./helper";

// import SignUpForm from "../components/SignUpForm";

const Login = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const navigate = useNavigate();

  const loginData = [
    {
      name: "phone",
      placeholder: "Phone or email",
      rules: {
        required: "Phone or email is required",
      },
      type: "text",
    },
    {
      name: "password",
      placeholder: "Password",
      rules: {
        required: "Password is required",
      },
      type: "password",
    },
  ];

  const signUpData = [
    {
      name: "firstName",
      placeholder: "First name",
      rules: {
        required: "First name is required",
      },
      type: "text",
    },
    {
      name: "lastName",
      placeholder: "Last name",
      rules: {
        required: "Last name is required",
      },
      type: "text",
    },
    {
      name: "email",
      placeholder: "Email",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email format",
        },
      },
      type: "text",
    },
    {
      name: "phone",
      placeholder: "Phone or email",
      rules: {
        required: "Phone or email is required",
      },
      type: "text",
    },
    {
      name: "password",
      placeholder: "Password",
      rules: {
        required: "Password is required",
      },
      type: "password",
    },
    {
      name: "confirmPassword",
      placeholder: "Confirm password",
      rules: {
        required: "Confirm password is required",
      },
      type: "password",
    },
  ];

  const signUp = async ({ data }) => {
    await signupUser(data, dispatch).then((response) => {
      if (!response.success) {
        console.log("HERE", data);
      } else {
        console.log("HERE", data);
      }
    });
  };

  const signIn = async (data) => {
    console.log("DATAT", data);
    await loginUser(data, dispatch).then((response) => {
      console.log("RESS", response);
      if (response.status) {
        console.log("HERE", data);
        localStorage.setItem("userData", response.token);
        navigateToPage("/dashboard");
      } else {
        console.log("HERE", data);
      }
    });
  };

  const getComponent = () => {
    if (currentUrl.includes("signin")) {
      return (
        <LoginForm
          loginData={loginData}
          navigateToPage={navigateToPage}
          onSubmit={signIn}
        />
      );
    } else if (currentUrl.includes("signup")) {
      return <SignUpForm signUpData={signUpData} onSubmit={signUp} />;
    }
  };

  const navigateToPage = (data) => {
    navigate(data);
  };

  const dispatch = useDispatch();
  return (
    <div className="bg-[#000] w-full h-[100vh] p-4 flex justify-center items-center h-screen">
      <div className="flex w-full justify-between h-[10vh] p-6 fixed top-0 items-start">
        <div className="text-white text-2xl font-bold">Book Store</div>
        <div className="text-white text-lg font-bold">
          <button
            className={
              currentUrl.includes("signup")
                ? "text-white text-md font-bold mr-4"
                : "p-2 rounded-full bg-white text-[#000] mr-4"
            }
            onClick={() => navigateToPage("/signin")}
          >
            Sign In
          </button>
          <button
            className={
              currentUrl.includes("signin")
                ? "text-white text-md font-bold"
                : "p-2 rounded-full bg-white text-[#000]"
            }
            onClick={() => navigateToPage("/signup")}
          >
            Register
          </button>
        </div>
      </div>
      <div className="flex w-full h-full p-6">
        <div className="flex justify-end items-end h-full w-1/2">
          <img src={signInBg} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-1/2">
          <h1 className="text-white text-4xl font-bold">Hello !</h1>
          <h2 className="text-white text-4xl my-1 font-bold">
            Welcome {currentUrl.includes("signin") ? "back!" : "to Book store!"}
          </h2>
          <div className="my-2 w-full">{getComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import SignUpForm from "../../components/SignUpForm";

// import { InputText } from "primereact/inputtext";

const SignUp = () => {
  return (
    <div className="bg-[#0E0E0E] flex justify-center items-center h-screen">
      <div className="rounded-[5em] bg-[#D87D4A] h-[60vh] w-[50%]">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;

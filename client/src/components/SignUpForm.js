import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { classNames } from "primereact/utils";
// import { InputText } from "primereact/inputtext";

const SignUpForm = ({ signUpData, onSubmit }) => {
  const defaultValues = {
    password: "",
    confirmPassword: "",
    firstName: "",
    email: "",
    phoneNumber: "",
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  const getFormElement = () => {
    return signUpData.map((item, index) => (
      <div>
        <Controller
          name={item.name}
          control={control}
          rules={{
            required: item.rules.required,
            pattern: item.rules.pattern || null,
          }}
          render={({ field }) => (
            <input
              placeholder={item.placeholder}
              className="h-14 p-2 w-1/2 rounded-md my-2"
              {...field}
            />
          )}
        />

        {errors[item.name] && (
          <div className="w-full mb-6 flex justify-center items-center">
            <div className="w-1/2 flex justify-end items-center">
              <span className="text-white">{errors[item.name].message}</span>
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {getFormElement()}

      <div className="w-full flex justify-center items-center">
        <button
          className="mt-6 mb-2 text-black font-bold bg-white rounded-md w-1/2 h-14 flex justify-center items-center"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;

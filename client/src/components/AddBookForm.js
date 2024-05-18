import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { classNames } from "primereact/utils";
// import { InputText } from "primereact/inputtext";

const BookForm = ({ bookData, onSubmit }) => {
  const defaultValues = {
    name: "",
    author: "",
    quantity: null,
    price: null,
    image: "",
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const getFormElement = () => {
    return bookData.map((item, index) => (
      <div>
        <Controller
          name={item.name}
          control={control}
          rules={{
            required: item.rules.required,
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
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      {getFormElement()}

      <div className="w-full flex justify-center items-center">
        <button
          className="mt-6 mb-2 text-black font-bold bg-white rounded-md w-1/2 h-14 flex justify-center items-center"
          type="submit"
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;

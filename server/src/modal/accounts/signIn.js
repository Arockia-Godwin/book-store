const { Schema, model } = require("mongoose");

const mySchema = {
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};

const signInModel = model("signIn", mySchema);
module.exports = signInModel;

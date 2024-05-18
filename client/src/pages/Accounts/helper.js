import axios from "../../axiosConfig";

const signupUser = async (user) => {
  console.log("USERRRR", user);
  try {
    let response;
    try {
      response = await axios.post("/signup", user);
    } catch (error) {
      response = error;
    }
    console.log("HEREEE", response);
    return response.response || response;
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong!",
    };
  }
};

const loginUser = async (user, dispatch) => {
  try {
    // dispatch(signupUserInProgress());
    let response;
    try {
      response = await axios.post("/signin", user);
    } catch (error) {
      response = error;
    }
    console.log("HEREEE", response);
    return response.response || response;
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong!",
    };
  }
};

export { signupUser, loginUser };

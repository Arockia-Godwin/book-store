import axios from "../../axiosConfig";
import {
  signupUserError,
  signupUserInProgress,
  signupUserSuccess,
} from "../../redux/reducers/Auth/index";

const signupUser = async (user, dispatch) => {
  try {
    dispatch(signupUserInProgress());
    let response = await axios.post("/signup", user);
    if (response.status) {
      dispatch(signupUserSuccess());
    } else {
      dispatch(signupUserError(response));
    }
    return response.data;
  } catch (error) {
    await dispatch(signupUserError());
  }
};

const loginUser = async (user, dispatch) => {
  try {
    console.log("HEREEE");
    // dispatch(signupUserInProgress());
    let response;
    try {
      response = await axios.post("/signin", user);
    } catch (error) {
      response = error;
    }
    console.log("RESS", response);
    if (response.success) {
      // dispatch(signupUserSuccess());
    } else {
      // dispatch(signupUserError(response));
    }
    return response.data;
  } catch (error) {
    await dispatch(signupUserError());
  }
};

export { signupUser, loginUser };

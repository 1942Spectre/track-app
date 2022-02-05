import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { token: action.payload, errorMessage: null };
    case "clear_error_message":
      return { ...state, errorMessage: null };
    case "signin":
      return { token: action.payload, errorMessage: null };
    case "signout":
      return {token:null, errorMessage:null}
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
      dispatch({type:"signin", payload: token})
      navigate("mainFlow")
    }
    else{
      navigate("loginFlow")
    }
  }
}

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    // Make api request to sign up with the provided credentials
    const body = { email, password };
    try {
      const response = await trackerApi.post("/signup", body);
      await AsyncStorage.setItem("token", response.data.token);

      // If succeed, modify state set authenticated
      dispatch({ type: "signup", payload: response.data.token });
      // navigate to main flow
      navigate("mainFlow");
    } catch (e) {
      // If failed, reflect an error
      dispatch({ type: "add_error", payload: "Try another email" });
    }
  };
};

const signIn = (dispatch) => {
  return async ({ email, password }) => {
    // Make api request to sign in
    const body = { email, password };
    try {
      const response = await trackerApi.post("/signin", body);
      await AsyncStorage.setItem("token", response.data.token);
      // If succeed, modify state set authenticated
      dispatch({ type: "signin", payload: response.data.token });
      navigate("mainFlow");
    } catch (e) {
      // If failed, reflect error
      dispatch({ type: "add_error", payload: "Bad Credentials" });
    }
  };
};

const signOut = (dispatch) => {
  return async () => {
    // modify state not authenticated
    await AsyncStorage.removeItem("token")
    dispatch({type:"signout"})
    navigate("loginFlow")
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: null }
);

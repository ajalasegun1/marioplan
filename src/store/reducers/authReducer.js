const initState = {
  authError: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login failed");
      return {
        ...state,
        authError: "Login Failed...",
      };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout Success");
      return {
        state,
      };
    case "SIGNUP_SUCCESS":
      console.log("Signup successful");
      return {
        ...state,
        authError: null
      }
    case "SIGNUP_ERROR":
      console.log("Signup unsuccessful");
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
};

export default authReducer;

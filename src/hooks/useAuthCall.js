import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/Toastify";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = "http://32216.fullstack.clarusway.com/";

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      navigate("/dashboard");
      dispatch(registerSuccess(data));
      toastSuccessNotify("Registered successfully");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Couldn't registered");
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      navigate("/dashboard");
      toastSuccessNotify("Login successfully");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Couldn't login");
      console.log(error);
    }
  };

  const logout = async (userInfo) => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}users/auth/logout`, userInfo);
      dispatch(logoutSuccess());
      navigate("/login");
      toastSuccessNotify("Logout successfully");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Couldn't logout");
    }
  };

  return { register, login, logout };
};

export default useAuthCall;

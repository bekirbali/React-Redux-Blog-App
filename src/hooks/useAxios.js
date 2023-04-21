import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.authReducer);

  const instance = axios.create({
    baseURL: "http://32216.fullstack.clarusway.com/",
  });

  return { instance };
};

export default useAxios;

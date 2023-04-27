import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const instance = axios.create({
    baseURL: "http://32216.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  return { instance };
};

export default useAxios;

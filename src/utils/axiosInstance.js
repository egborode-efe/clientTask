import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://servertask-1.onrender.com",
});

export default axiosInstance;

import axios, {AxiosInstance} from "axios";

const baseURL = 'https://fakestoreapi.com';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
import { useCookie } from "@/utils/StorageUtil";
import axios from "axios";
import router from "@/router";

axios.defaults.baseURL = process.env.VUE_APP_API;

axios.interceptors.request.use(async request => {
  const token: string = await useCookie.getItem("authentication");

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: "Bearer " + token
    };
  }

  return request;
});

axios.interceptors.response.use(
  response => response.data,
  error => {
    // 504 still allow offline mode to run the API's
    if (error.response.status !== 504) {
      router.push({
        name: "error",
        params: { id: error.response.status.toString() }
      });
    }

    return Promise.reject(error.response.data);
  }
);

export default axios;

import { apiGenerator, getCookie } from "../helpers/Helpers";

const token = getCookie("token"); // GET TOKEN FROM COOKIE
export const BASE_URL = "http://139.59.23.105:8847/api"; // BASE URL

// API FUNCTION
export const api = apiGenerator({ token, baseURL: BASE_URL });

// API PATHS
export const APIS = {
  login: "/auth/login",
  assignedoffice: "/file/location",
  uploadfile: "/file/upload",
};

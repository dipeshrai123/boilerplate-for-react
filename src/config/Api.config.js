import { apiGenerator, getCookie } from "../helpers";

// base url
export const BASE_URL = "http://192.168.1.1:8000";

// api function
export const api = apiGenerator({ baseURL: BASE_URL });

// api paths
export const APIS = {
  sample: "/sample",
};

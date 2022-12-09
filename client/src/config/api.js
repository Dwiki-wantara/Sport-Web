import axios from "axios";

// buat base url untuk local
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

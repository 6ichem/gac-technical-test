import axios from "axios";

export const instance = axios.create({
  baseURL: "https://64905ded1e6aa71680cb200e.mockapi.io/api",
});

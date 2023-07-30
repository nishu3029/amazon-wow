import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/wow-a1285/us-central1/api", // THE API (Cloud function) URL
});

export default instance;

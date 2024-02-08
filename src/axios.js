import axios from "axios";

const instance = axios.create({
    baseURL: "https://great-fitness-backend.onrender.com",
});

export default instance;
import axios from "axios";

//base url 

const api = axios.create({
    baseURL: "https://api.linketrack.com/track",
    // headers: {'User-Agent': 'insomnia/2023.5.8'},
})

export default api;
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "d3ec30376ed912f9729af597a5171784",
        language: "ko-KR"
    }
})

export default instance;
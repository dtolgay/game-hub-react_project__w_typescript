import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "b986d9bf4a6c4b76842ddaef271d7a6e"
    },
})
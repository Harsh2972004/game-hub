import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "bb155767f7cf49c39fb55ac312e9fd11"
    }
})
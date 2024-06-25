import axios from "axios";

export default axios.create({ 
    baseURL: "https://api.rawg.io/api" ,

    params: {
        key: "77c5f5def0ee4ceca46c6a723b51da2f"
    }
})
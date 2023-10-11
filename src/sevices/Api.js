import Axios from "axios"


const Api = Axios.create({
    baseURL: "https://dummyjson.com/"
})

export default Api
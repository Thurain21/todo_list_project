import axios from "axios";

export const apidata = axios.create({
    baseURL : 'http://localhost:4000'
});
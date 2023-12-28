import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//this is the base url

export default instance;

import axios from 'axios';
const API_key= 'AIzaSyCNidLuwgX7aOiINpUSPTbrUdScPXoMIvU';
const instance = axios.create({
    baseURL: `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_key}`
});

export default instance;
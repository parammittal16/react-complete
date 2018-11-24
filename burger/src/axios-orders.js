import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://param-burger-app.firebaseio.com/'
});

export default instance;
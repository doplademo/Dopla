import axios from 'axios';
import { BASE_URL } from './urls';

const axiosRequest = axios.create({
    baseURL: BASE_URL,
});

export default axiosRequest;

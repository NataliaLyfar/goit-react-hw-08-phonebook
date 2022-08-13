import axios from 'axios';
import { BASE_URL } from './api';

const axiosDefaultBaseUrl = axios.create({
    baseURL: BASE_URL
  });

export default axiosDefaultBaseUrl;
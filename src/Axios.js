import axios from 'axios'
import {baseUrl} from './constants/Constant'

const instance = axios.create({
    baseURL: baseUrl,
    
  });

export default instance
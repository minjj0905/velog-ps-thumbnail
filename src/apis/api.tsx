import axios from 'axios';
import { solvedacAPI } from 'constants/urls';

const api = axios.create({
  baseURL: solvedacAPI,
});

export default api;

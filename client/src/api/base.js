import axios from 'axios';
const API = axios.create({
  baseURL: 'http://127.0.0.1:4000',
});
API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('profile')
    )}`;
  }
});
export default API;

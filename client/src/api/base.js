import axios from 'axios';
const API = axios.create({
  baseURL: 'https://hms-9d96.onrender.com/',
});
API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('profile')
    )}`;
  }
  return req;
});
export default API;

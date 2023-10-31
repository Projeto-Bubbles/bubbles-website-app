import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getPosts = () => {
  return api
    .get('/posts')
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

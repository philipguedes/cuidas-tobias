import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getUser = async (id) => {
  const user = await axios.get(`/users/${id}`);
  return user;
}

export const createUser = async (user) => {
  const res = await axios.post('/users/new', user);
  return res;
}
import axios from 'axios';

export default axios.create({
  baseURL: 'https://randomuser.me/api/?results=100&seed=directory'
})

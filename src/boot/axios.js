import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000/',
});

export default ({ app, router, Vue }) => {
  Vue.prototype.$axios = api;
};

export { api };

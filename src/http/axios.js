import axios from 'axios';
import Vue from 'vue';
let $http = axios.create({
    baseURL: 'http://localhost:9090'
});
Vue.prototype.$http = $http;
export default $http;

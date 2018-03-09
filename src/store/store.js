import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../http/axios.js'
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        residentList: []
    },
    mutations:{
        update_list (state, data) {
            state.residentList = data;
        }
    },
    actions: {
        update_list ({ commit }, pagesize) {
            axios.post('/api/list', {
                pageSize: pagesize,
                count: 10
            }).then((res) => {
                commit('update_list', res.data);
            });
        }
    }
});

export { store };
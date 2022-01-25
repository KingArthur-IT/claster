import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'
import axios from 'axios';
Vue.use(Vuex)

export default{
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        get_user: state => state.user,
    },
    mutations: {
        setCurrentUser(state, data){
            state.user = data;
        },
    },
    actions: {
        async getCurrentUser(){
            //const data = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = await axios.get('http://localhost:8080/data.json', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}});
            console.log('users', data)
            //commit('setCurrentUser', data);
        },
    },
    //plugins: [createPersistedState()]
}

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
        async getCurrentUser({commit}){
            const { data } = await axios.get('https://raw.githubusercontent.com/KingArthur-IT/claster/master/src/userData.json', {headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}});
            commit('setCurrentUser', data);
        },
    },
    //plugins: [createPersistedState()]
}

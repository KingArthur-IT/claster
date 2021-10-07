import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../Pages/MainPage.vue'
import StudentPage from '../Pages/StudentPage.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/Home',
            name: 'StudentPage',
            component: StudentPage
        }
    ]
})
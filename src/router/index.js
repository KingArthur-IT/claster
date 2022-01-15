import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import StudentPage from '@/views/StudentPage.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'MainPage', component: MainPage },
        { path: '/Home', name: 'StudentPage', component: StudentPage }
    ]
})
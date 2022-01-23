import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import SignIn from '@/views/SignIn.vue'
import ProfilePage from '@/views/ProfilePage.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'MainPage', component: MainPage, meta: {layout: 'unauth'} },
        { path: '/sign-in/:enter_type?', name: 'SignIn', component: SignIn, meta: {layout: 'unauth'} },
        { path: '/Home', name: 'ProfilePage', component: ProfilePage }
    ]
})
<template>
    <div class="overflow-hide">
        <MainUserInfoBlock :userInfo="userInfo"/>
        <Education v-if="userInfo" :education="userInfo.education" />
        <Skills />
        <Activity />
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import MainUserInfoBlock from '@/components/ProfilePage/MainUserInfoBlock'
import Skills from '@/components/ProfilePage/Skills'
import Education from '@/components/ProfilePage/Education'
import Activity from '@/components/ProfilePage/Activity'

export default {
name: 'ProfileUserPage',
components: {
    MainUserInfoBlock, Skills, Education, Activity
},
computed:{
        ...mapGetters({
            userInfo: 'user/get_user'
        })
    },
};
</script>
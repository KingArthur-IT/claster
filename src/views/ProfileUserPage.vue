<template>
    <div class="overflow-hide">
        <MainUserInfoBlock />
        <Education />
        <Skills />
        <Activity />
    </div>
</template>

<script>
    import MainUserInfoBlock from '@/components/ProfilePage/MainUserInfoBlock'
    import Skills from '@/components/ProfilePage/Skills'
    import Education from '@/components/ProfilePage/Education'
    import Activity from '@/components/ProfilePage/Activity'

    export default {
    name: 'ProfileUserPage',

    components: {
        MainUserInfoBlock, Skills, Education, Activity
    },

    data: () => ({
    }),
    };
</script>
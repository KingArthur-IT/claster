<template>
    <div class="overflow-hide">
        <InfoBlock />
        <Education />
        <Skills />
        <Activity />
    </div>
</template>

<script>
    import InfoBlock from '@/components/ProfilePage/InfoBlock'
    import Skills from '@/components/ProfilePage/Skills'
    import Education from '@/components/ProfilePage/Education'
    import Activity from '@/components/ProfilePage/Activity'

    export default {
    name: 'ProfilePage',

    components: {
        InfoBlock, Skills, Education, Activity
    },

    data: () => ({
    }),
    };
</script>
<template>
    <div class="overflow-hide">
        <InfoBlock />
        <About />
        <Education />
        <Skills />
        <Activity />
    </div>
</template>

<script>
    import InfoBlock from '@/components/ProfilePage/InfoBlock'
    import About from '@/components/ProfilePage/About'
    import Skills from '@/components/ProfilePage/Skills'
    import Education from '@/components/ProfilePage/Education'
    import Activity from '@/components/ProfilePage/Activity'

    export default {
    name: 'StudentPage',

    components: {
        InfoBlock, About, Skills, Education, Activity
    },

    data: () => ({
    }),
    };
</script>
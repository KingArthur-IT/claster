<template>
    <div class="overflow-hide">
        <NavAuthorized />
        <InfoBlock />
        <About />
        <Education />
        <Skills />
        <Activity />
        <Footer />
    </div>
</template>

<script>
    import NavAuthorized from '@/components/Navbars/NavAuthorized'
    import Footer from '@/components/Footer'
    import InfoBlock from '@/components/ProfilePage/InfoBlock'
    import About from '@/components/ProfilePage/About'
    import Skills from '@/components/ProfilePage/Skills'
    import Education from '@/components/ProfilePage/Education'
    import Activity from '@/components/ProfilePage/Activity'

    export default {
    name: 'StudentPage',

    components: {
        NavAuthorized, Footer, InfoBlock, About, Skills, Education, Activity
    },

    data: () => ({
    }),
    };
</script>
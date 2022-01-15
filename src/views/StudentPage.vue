<template>
    <div class="overflow-hide">
        <Header />
        <InfoBlock />
        <About />
        <Education />
        <Skills />
        <Activity />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import InfoBlock from '@/components/ProfilePage/InfoBlock'
    import About from '@/components/ProfilePage/About'
    import Skills from '@/components/ProfilePage/Skills'
    import Education from '@/components/ProfilePage/Education'
    import Activity from '@/components/ProfilePage/Activity'

    export default {
    name: 'StudentPage',

    components: {
        Header, Footer, InfoBlock, About, Skills, Education, Activity
    },

    data: () => ({
    }),
    };
</script>
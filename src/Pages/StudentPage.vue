<template>
    <div class="overflow-hide">
        <Header />
        <InfoBlock />
        <About />
        <Skills />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import InfoBlock from '@/components/ProfilePage/InfoBlock'
    import About from '@/components/ProfilePage/About'
    import Skills from '@/components/ProfilePage/Skills'

    export default {
    name: 'StudentPage',

    components: {
        Header, Footer, InfoBlock, About, Skills
    },

    data: () => ({
    }),
    };
</script>
<template>
    <div class="overflow-hide">
        <MainHeader></MainHeader>
        <MainAboutHero></MainAboutHero>    
        <Partners
        v-bind:title="'Наші партнери - університети'"
        v-bind:images="Universities"
        ></Partners>  
        <Partners
        v-bind:title="'Наші партнери - IT компанії'"
        v-bind:images="Bissnes"
        ></Partners>
        <JoinUs></JoinUs>
        <Footer></Footer>
    </div>
</template>

<script>
    import MainHeader from '@/components/MainPage/MainHeader'
    import MainAboutHero from '@/components/MainPage/MainAboutHero'
    import Partners from '@/components/MainPage/Partners'
    import JoinUs from '@/components/MainPage/JoinUs'
    import Footer from '@/components/Footer'
    //images
    import PstuLogo from '@/assets/pstu_logo.png'
    import StartupLogo from '@/assets/1991_logo.png'
    import MakebecoolLogo from '@/assets/makebecool_logo.png'
    import ArchatLogo from '@/assets/arhat_logo.png'

    export default {
    name: 'MainPage',

    components: {
        MainHeader, MainAboutHero, Partners, JoinUs, Footer
    },

    data: () => ({
        Universities: [PstuLogo, PstuLogo, PstuLogo],
        Bissnes: [StartupLogo, MakebecoolLogo, ArchatLogo]
    }),
    };
</script>
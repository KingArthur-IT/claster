<template>
    <div class="overflow-hide">
        <Header />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
    name: 'StudentPage',

    components: {
        Header, Footer
    },

    data: () => ({
    }),
    };
</script>
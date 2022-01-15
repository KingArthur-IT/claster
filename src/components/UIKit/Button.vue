<template>
    <v-btn class="btn button" :x-large="isLarge" >
        {{text}}
    </v-btn>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            required: true
        },
        isLarge: {
            type: Boolean,
            default: () => false
        }
    }
}
</script>

<style scoped>
.btn {
    background: linear-gradient(90deg, #00C4DF -31.56%, rgba(11, 129, 229, 0.76) 37.19%, rgba(31, 13, 239, 0.0621078) 123.71%, rgba(195, 196, 196, 0.00520833) 123.73%, rgba(196, 196, 196, 0) 123.74%);
    color: #ffffff !important;
    font-weight: 600;
  }
</style>
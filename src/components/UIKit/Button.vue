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
    background: var(--dark-primary-color);
    color: #ffffff !important;
    font-weight: 600;
  }
</style>
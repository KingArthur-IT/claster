<template>
    <v-container>
        <form action="">
            <v-col cols="4" class="d-flex flex-column m-auto">
                <label for="login">Логін</label>
                <input type="text" name="login" class="input mb-3">
                <label for="password">Пароль</label>
                <input type="text" name="password" class="input mb-3">
            </v-col>
        </form>
    </v-container>
</template>

<style scoped>
.m-auto{
    margin: auto;
}
.input{
    border: 1px solid rgba(11, 129, 229, 0.532);
}
</style>
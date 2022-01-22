<template>
    <v-container>
        <v-col cols="5" class="m-auto border mb-10 p-0">
            <div class="design-block"></div>
            <v-tabs
                v-model="tab"
                color="blue"
                grow
            >
                <v-tab>Реєстрація</v-tab>
                <v-tab>Вхід</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card color="basil" flat class="px-4">
                        <v-card-text>12345</v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-form ref="signInForm" v-model="signInData.valid" lazy-validation class="px-5 py-5">
                        <v-text-field
                            v-model="signInData.userName"
                            :rules="signInData.userNameRules"
                            label="User name"
                        ></v-text-field>
                        <v-text-field
                            v-model="signInData.password"
                            :rules="signInData.passwordRules"
                            type="password"
                            label="Password"
                        ></v-text-field>
                        <Button 
                            :text="'Увійти'"
                            @click.native="signIn"
                            class="d-flex m-auto my-4"
                        />
                    </v-form>
                </v-tab-item>
            </v-tabs-items>
        </v-col>
    </v-container>
</template>

<script>
import Button from '@/components/UIKit/Button'
export default {
    name: "SignIn",
    components: {
        Button
    },
    data(){
        return{
            tab: null,
            signInData: {
                valid: true,
                userName: '',
                password: '',
                userNameRules: [
                    v => !!v || 'Name is required',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 8) || 'Password must be longer than 8 characters',
                ],
            }
        }
    },
    methods: {
        signIn () {
            if(this.$refs.signInForm.validate()){
                this.$router.push({name: "ProfilePage"});
            }
        },
    }
}
</script>

<style scoped>
.m-auto{
    margin: auto;
}
.design-block{
   position: absolute;
    width: 25%;
    height: 50%;
    top: 13%;
    left: 36%;
    background: var(--primary-color);
    transform: rotate(77deg);
    z-index: 0; 
}
.border{
    border: 1px solid var(--light-solid-primary-color);
}
.p-0{
    padding: 0;
}
</style>
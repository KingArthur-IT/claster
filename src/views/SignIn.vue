<template>
    <v-container>
        <v-col cols="5" class="m-auto border mb-10 p-0">
            <div class="hero">
                <v-tabs v-model="tab" color="blue" grow>
                    <v-tab>Реєстрація</v-tab>
                    <v-tab>Вхід</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-form ref="registrationForm" v-model="registrationData.valid" lazy-validation class="px-5 py-5">
                            <v-text-field
                                v-model="registrationData.userName"
                                :rules="registrationData.userNameRules"
                                label="User name"
                            ></v-text-field>
                            <v-text-field
                                v-model="registrationData.password"
                                :rules="registrationData.passwordRules"
                                type="password"
                                label="Password"
                            ></v-text-field>
                            <Button 
                                :text="'Зареєструватися'"
                                @click.native="registration"
                                class="d-flex m-auto my-4"
                            />
                        </v-form>
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
            </div>
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
            tab: 0,
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
            },
            registrationData: {
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
                this.$router.push({name: "ProfileUserPage"});
            }
        },
        registration () {
            if(this.$refs.registrationForm.validate()){
                this.$router.push({name: "ProfileUserPage"});
            }
        },
    },
    watch:{
        '$route': {
            immediate: true,
            handler(){
                if (this.$route.params.enter_type === 'log-in')
                    this.tab = 1;
                else this.tab = 0;
            }
        },
    }
}
</script>

<style scoped>
.m-auto{
    margin: auto;
}
.border{
    border: 1px solid var(--light-solid-primary-color);
    position: relative;
}
.hero:before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--primary-color);
    transform: rotate(7deg);
}
.p-0{
    padding: 0;
}
</style>
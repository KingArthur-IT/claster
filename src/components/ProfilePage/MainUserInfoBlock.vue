<template>
    <v-container>
        <v-row>
            <!-- Avatar -->
            <v-col cols="3">
                <v-img src="@/assets/incognito.jpg"></v-img>
            </v-col>
            <!-- User Info -->
            <v-col cols="9" v-if="userInfo">
                <h2 class="titles">{{userInfo.name}}</h2>
                <p class="mt-3" v-if="userInfo.city">
                    <strong>Місто: </strong>{{userInfo.city}}
                </p>
                <p class="mt-3" v-if="userInfo.userAge">
                    <strong>Вік: </strong>{{userInfo.userAge}}
                </p>
                <p class="mt-3" v-if="userInfo.workExperience.length">
                    <ul class="px-0">
                        <strong>Місце роботи: </strong>
                        <li v-for="work in userInfo.workExperience" :key="work.id" class="ml-10">
                            {{work.work}} 
                            <span v-if="work.startYear || work.endYear">
                                <span v-if="work.startYear">з {{work.startYear}}</span>  
                                <span v-if="work.endYear">по {{work.endYear}}</span>
                            </span>
                        </li>
                    </ul>                    
                </p>
                <p class="mt-3" v-if="userInfo.education.length">
                    <ul class="px-0">
                        <strong>Освіта: </strong>
                        <li v-for="education in userInfo.education" :key="education.id" class="ml-10">
                            <span class="mr-2">{{education.degree}}:</span>{{education.speciality}}
                        </li>
                    </ul>                    
                </p>
                <p class="mt-3" v-if="userInfo.Cite">
                    <a :href="userInfo.Cite" target="_blank" rel="noopener noreferrer">Github repository</a>
                </p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <div v-if="userInfo.AboutMyself">
            <h2 class="titles text-center mb-5">Про мене</h2>
            <p>
                {{userInfo.AboutMyself}}
            </p>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'MainUserInfoBlock',
    props: {
        userInfo: {
            type: Object,
            default: null
        }
    }
};
</script>

<style scoped>
p{
    text-align: justify;
}
</style>
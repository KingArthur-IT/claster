<template>
    <v-container>
        <v-row>
            <!-- Avatar -->
            <v-col cols="4">
                <v-img
                    src="@/assets/incognito.jpg"
                    
                ></v-img>
            </v-col>
            <!-- User Info -->
            <v-col cols="4">
                <h2 class="titles mt-16">{{userName}}</h2>
                <div v-for="infoItem in userInfo" :key="infoItem.itemName">
                    <div class="mt-3">
                        <strong>{{infoItem.itemName}}</strong>{{infoItem.itemValue}}
                    </div>
                </div>
            </v-col>
            <!-- Props -->
            <v-col cols="4" class="d-flex flex-column relative align-center">
                <div class="design-block"></div>
                <div class="status mb-4 onTop mt-16">{{userStatus}}</div>
                <div class="d-flex flex-column onTop">
                    <strong class="mb-1">Рейтинг: </strong>
                    <div>
                        <v-icon normal color="blue">mdi-cup</v-icon> {{userRating}}
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'InfoBlock',

    components: {
        
    },

    data: () => ({
        userName: 'Остапенко Артем',
        userStatus: 'Студент',
        userRating: 10,
        userInfo: [
            {itemName: 'Місто: ', itemValue: 'Маріуполь'},
            {itemName: 'Сайт: ', itemValue: 'github.com'}
        ]
    }),
};
</script>

<style scoped>
.design-block{
    position: absolute;
    width: 100%;
    height: 80%;
    top: -0%;
    background: linear-gradient(90deg, rgba(97, 236, 255, 0.7) -31.56%, rgba(11, 129, 229, 0.532) 37.19%, rgba(31, 13, 239, 0.0434755) 123.71%, rgba(195, 196, 196, 0.00364583) 123.73%, rgba(196, 196, 196, 0) 123.74%);
    transform: rotate(-7deg);
    right: -20%;
    z-index: 0;
}
.status{
    height: 60px;
    width: 40%;
    background: #86D9FD;
    padding: 20px;
    font-weight: bold;
    text-align: center;
}
</style>
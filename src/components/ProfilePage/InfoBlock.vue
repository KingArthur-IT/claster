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
            <v-spacer></v-spacer>
            <!-- Props -->
            <v-col cols="2#48bcea" class="d-flex flex-column relative">
                
                <div class="status mb-4 onTop mt-16">{{userStatus}}</div>
                <div class="d-flex flex-column onTop">
                    <strong class="mb-1">Рейтинг: </strong>
                    <div>
                        <v-icon normal color="#48bcea">mdi-cup</v-icon> {{userRating}}
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
.status{
    height: 60px;
    width: 100%;
    background: #48bcea;
    padding: 20px;
    font-weight: bold;
    text-align: center;
}
</style>
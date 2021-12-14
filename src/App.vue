<template>
<v-app>
    <v-navigation-drawer class="darken-1" app v-model="drawer" style="width:300px!important">
        <v-list-item>
            <v-list-item-content>
                <img src="./assets/Logooo.png" class="logoImg mt-8 " alt="">
                <v-list-item-subtitle>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <br>
        <v-list class="lists" flat>
            <v-list-item-group v-model="model" color="black" class="mt-15 listGroup" active-class="bg-active">
                <v-list-item v-for="(item, i) in items" :key="i" class="mt-2 vlistItem " style="margin-left: 1px" @click="sendToRout(item)">
                    <div class="borderLeft"></div>
                    <v-list-item-icon v-if="item.active">
                        <img height="20" class="linkColor" :src=" item.icon" alt="">
                    </v-list-item-icon>
                    <v-list-item-icon v-if="!item.active">
                        <img height="20" class="linkColor" :src=" item.unicon" alt="">
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="linksFont ml-4" small v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-list class="lists" flat>
            <v-list-item-group color="black" class=" mt-10 listGroup" active-class="bg-active">
                <v-list-item class="mt-5 vlistItem" active-class="navList" style="margin-left: 1px" @click="sendToRout(item)">
                    <div class="borderLeft"></div>
                    <v-list-item-icon>
                        <img height="20" src="./assets/Iconly/Curved/Logout.svg" alt="">
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title style="color:black!important" class="linksFont ml-4" small>Chiqish</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar app elevation="0" class=" appBar hidden-md-and-up">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="ChangeDrawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn icon class="mt-5" @click="searchActive" v-if="!isSearch">
            <img src="./assets/Search.svg" alt="">
        </v-btn>
        <v-text-field transition="slide-x-transition" v-if="isSearch" prepend-inner-icon="mdi-magnify " class="mt-10" label="Qidiruv..." style=" width:60px; transition:0.6s"></v-text-field>
       <div class="text-center ">
            <v-menu offset-y content-class="elevation-1 rounded-lg">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" class="mt-5 mr-2">
                        <img src="../src/assets/Notification.svg" alt="">
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item-group v-model="selected" active-class="primary--text" multiple>
                        <template v-for="item in 3">
                            <v-list-item :key="item.title">
                                <template>
                                    <v-list-item-content class=" d-block ">
                                        <span class=" black--text ">Arizachilar
                                            taftishdan o’tishi, tasdiq
                                            <br> yoki qora ro’yxatga kiritilishi kerak
                                        </span>
                                        <p style="font-size:14px">23 daqiqa oldin</p>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                                        <v-icon v-if="!active" color=" lighten-1">
                                            mdi-circle
                                        </v-icon>

                                        <v-icon v-else color="yellow ">
                                            mdi-circle
                                        </v-icon>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </template>
                        <div class="pa-5">
                            <v-btn class=" pa-2 rounded-lg btns" elevation="0" dark style="background: #2F80ED!important;" large block>Barchasi</v-btn>
                        </div>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </div>
        <v-avatar class="mt-5 mr-2">
            <img src="./assets/photo_2021-06-19_22-12-58.jpg" alt="John">
        </v-avatar>
        <v-col class="d-flex mt-5 mr-15 " cols="1" sm="1">
            <p class="mt-3 linksFont">Бехруз</p>
            <div class="text-center mr-15">
                <v-menu offset-y content-class="elevation-1 rounded-lg ">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon class="" v-bind="attrs" v-on="on">
                            <img src="@/assets/downArrow.svg" alt="">
                        </v-btn>
                    </template>
                    <v-list width="200">
                        <v-list-item-content>
                            <v-list-item>
                                <v-list-item-title class="text--primary">Huzayfa Baxromiy</v-list-item-title>
                            </v-list-item>
                        </v-list-item-content>
                        <v-divider></v-divider>
                        <v-list-item-content>
                            <v-list-item>
                                <div class="d-flex">
                                    <a href="#" class="text-decoration-none">Ubayda Alibekov</a>
                                    <img class="ml-5" src="./assets/ArrowDow1.svg" alt="">
                                </div>
                            </v-list-item>
                        </v-list-item-content>
                        <v-divider></v-divider>
                        <v-list-item-content>
                            <v-list-item>
                                <a href="#" class="text-decoration-none">Ubayda Alibekov</a>
                                <img class="ml-5" src="./assets/ArrowDow1.svg" alt="">
                            </v-list-item>
                        </v-list-item-content>
                        <div class="pa-5">
                            <Logout></Logout>
                        </div>
                    </v-list>
                </v-menu>

            </div>
        </v-col>
    </v-app-bar>
    <!--       ADOPTATION -->

    <v-app-bar app elevation="0" class=" appBar hidden-sm-and-down">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="ChangeDrawer"></v-app-bar-nav-icon>

        <h1 class="sutitleCommon mt-10 linksFont " style="font-family: Gilroy;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 48px;">Umumiy</h1>
        <v-col cols="2" class="mt-15 ml-8">

            <v-text-field prepend-inner-icon="mdi-magnify " label="Qidiruv..." class="searchNavbar"></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <div class="text-center mt-10">
            <newAriza class="mr-7"></newAriza>
        </div>
        <div class="text-center ">
            <v-menu offset-y content-class="elevation-1 rounded-lg">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" class="mt-10 mr-2">
                        <img src="../src/assets/Notification.svg" alt="">
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item-group v-model="selected" active-class="primary--text" multiple>
                        <template v-for="item in 3">
                            <v-list-item :key="item.title">
                                <template>
                                    <v-list-item-content class=" d-block ">
                                        <span class=" black--text ">Arizachilar
                                            taftishdan o’tishi, tasdiq
                                            <br> yoki qora ro’yxatga kiritilishi kerak
                                        </span>
                                        <p style="font-size:14px">23 daqiqa oldin</p>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                                        <v-icon v-if="!active" color=" lighten-1">
                                            mdi-circle
                                        </v-icon>

                                        <v-icon v-else color="yellow ">
                                            mdi-circle
                                        </v-icon>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </template>
                        <div class="pa-5">
                            <v-btn class=" pa-2 rounded-lg btns" elevation="0" dark style="background: #2F80ED!important;" large block>Barchasi</v-btn>
                        </div>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </div>
        <v-avatar class="mt-10 ">
            <img src="./assets/photo_2021-06-19_22-12-58.jpg" alt="John">
        </v-avatar>
        <v-col class="d-flex mt-10 mr-15 " cols="1" sm="1">
            <p class="mt-3  linksFont">Бехруз</p>
            <div class="text-center mr-20">
                <v-menu offset-y content-class="elevation-1 rounded-lg ">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon class="" v-bind="attrs" v-on="on">
                            <img src="@/assets/downArrow.svg" alt="">
                        </v-btn>
                    </template>
                    <v-list width="200">
                        <v-list-item-content>
                            <v-list-item>
                                <v-list-item-title class="text--primary">Huzayfa Baxromiy</v-list-item-title>
                            </v-list-item>
                        </v-list-item-content>
                        <v-divider></v-divider>
                        <v-list-item-content>
                            <v-list-item>
                                <div class="d-flex">
                                    <a href="#" class="text-decoration-none">Ubayda Alibekov</a>
                                    <img class="ml-5" src="./assets/ArrowDow1.svg" alt="">
                                </div>
                            </v-list-item>
                        </v-list-item-content>
                        <v-divider></v-divider>
                        <v-list-item-content>
                            <v-list-item>
                                <a href="#" class="text-decoration-none">Ubayda Alibekov</a>
                                <img class="ml-5" src="./assets/ArrowDow1.svg" alt="">
                            </v-list-item>
                        </v-list-item-content>
                        <div class="pa-5">
                            <Logout></Logout>
                        </div>
                    </v-list>
                </v-menu>
            </div>
        </v-col>
    </v-app-bar>
    <v-main class="vMain mt-6">
        <v-container>
            <router-view class="router"></router-view>
        </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
</v-app>
</template>

<script>
import newAriza from './views/NewAriza'
import Logout from './views/Logout'
export default {
    name: 'App',
    data() {
        return {
            drawer: true,
            model: '',
            items1:[],
            isSearch: false,
            link: false,
            filtering: {},
            selected: false,
            active: false,
            items: [{
                    title: 'Umumiy',
                    icon: require('@/assets/Iconly/Curved/Category1.svg'),
                    path: '/',
                    unicon: require('@/assets/Iconly/Curved/Category.svg'),
                    active: false
                },
                {
                    title: 'Arizachilar',
                    icon: require('@/assets/Iconly/Curved/Paper.svg'),
                    path: '/report',
                    unicon: require('@/assets/Iconly/Curved/PaperUn.svg'),
                    active: false
                },
                {
                    title: 'Tekshiruvdagilar',
                    icon: require('@/assets/Iconly/Curved/Scan.svg'),
                    path: '/cheking',
                    unicon: require('@/assets/Iconly/Curved/ScanUn.svg'),
                    active: false
                },
                {
                    title: 'Haqdorlar',
                    icon: require('@/assets/Iconly/Curved/3 User.svg'),
                    path: '/deserving',
                    unicon: require('@/assets/Iconly/Curved/3UserUn.svg'),
                    active: false
                },
                {
                    title: 'Qora ro’yxat',
                    icon: require('@/assets/Iconly/Curved/Lock.svg'),
                    path: '/blackList',
                    unicon: require('@/assets/Iconly/Curved/LockUn.svg'),
                    active: false
                },
                {
                    title: 'Kalendar',
                    icon: require('@/assets/Iconly/Curved/Calendar.svg'),
                    path: '/calendar',
                    unicon: require('@/assets/Iconly/Curved/CalendarUn.svg'),
                    active: false
                },
            ],
        }
    },
    methods: {
        searchActive() {
            this.isSearch = !this.isSearch
        },
        ChangeDrawer() {
            this.drawer = !this.drawer
        },
        sendToRout(item) {
            this.items.forEach(value => {
                value.active = false
            })
            item.active = true
            console.log(this.items);
            this.$router.push(item.path)
        }
    },
    components: {
        newAriza,
        Logout
    }
};
</script>

<style>
im .theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
    background-color: rgba(0, 0, 0, 0.0) !important;
}

.v-list-item .vlistItem {
    padding: 0 1px;
}

.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
    line-height: 1.2;
    font-size: 18px;
}

.logoImg {
    position: absolute;
    width: 124px;
    height: 24px;
    left: 70px;
    top: 20px
}

.profile {
    margin-right: 50px !important;
}

.sutitleCommon {
    margin-left: 80px;
}

.v-list-item__content>* {
    line-height: 1.1;
    flex: 1 0 0 !important;
}

.v-list-group-active {
    background: none;
}

.fewfew {
    background: none !important;
}

.bg-active {
    background-color: white;
    border-left: 3px solid black !important;
    color: black;
    font-weight: 600;
}

.vlistItem {
    background-color: white;
    border-left: 3px solid transparent;
    color: black;
}

.listGroup {
    margin-top: 30px !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: #999999 !important;
}

.v-navigation-drawer__content {
    max-width: 100%;
    overflow-x: hidden;
}

.appBar {
    background: #FBFBFB !important;
    height: 85px !important;
}

.vMain {
    background: #FBFBFB;
}

.v-list-group-active {
    color: black;
}

.linksFont {
    font-family: Gilroy;
}

.router {
    margin-left: 70px;
}

.borderLeft {
    border-left: 3px solid transparent !important;
    margin-right: 40px;
}

@media (min-width: 1400px) {
    .listGroup {
        margin-top: 50px !important;
    }

    .sutitleCommon {
        margin-left: 80px !important;
    }

    .router {
        margin-left: 40px;
    }

    .vlistItem {
        padding: 2px;
    }

    .sutitleCommon {
        margin-left: 130px;
    }
}

@media (max-width: 600px) {
    .router {
        margin-left: 10px !important;
    }

}

@media (min-width: 1800px) {
    .searchNavbar {
        margin-left: 70px;
    }

    .v-navigation-drawer .v-list:not(.v-select-list) {
        background: inherit;
        margin-top: 50px;
    }

    .router {
        margin-left: 50px;
        padding: 50px;
    }

    .vlistItem {
        padding: 10px;
    }

    .sutitleCommon {
        margin-left: 100px !important;
    }

}
</style>

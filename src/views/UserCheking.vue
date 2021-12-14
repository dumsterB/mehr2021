<template>
    <div>
        <v-dialog
            v-model="dialogRight"
            hide-overlay
            no-click-animation
            max-width="500"
            persistent
            fullscreen
            class="UserModal"
            transition="scroll-x-reverse-transition"
        >
            <template v-slot:activator="{ on, attrs }">

                <img v-bind="attrs"
                     v-on="on" src="../assets/ArrowDow.svg"
                     alt="">
            </template>
            <v-card>
                <v-divider></v-divider>
                <v-list-item class="mt-2">
                    <v-spacer></v-spacer>
                    <v-btn elevation="0" @click="dialogRight=!dialogRight"><img src="../assets/x.svg" alt=""></v-btn>
                </v-list-item>
                <v-container>
                    <v-row wrap class="pa-5">
                        <v-col cols="8">
                            <v-list-item-group
                                v-model="selectedItem"
                                color="primary"
                                class="d-flex justify-space-between"
                            >
                                <p style="font-size: 19px" class=" black--text d-flex  mt-2 linksFont">Abror Xoshimjonov
                                    Alibekovich</p>
                            </v-list-item-group>
                        </v-col>
                        <v-col cols="4">
                            <v-list-item-title class="text--secondary mt-2 linksFont"
                            >3 kun loldi
                            </v-list-item-title>
                        </v-col>
                    </v-row>
                </v-container>
                <v-list-item>
                    <v-container>
                        <v-row wrap style="align-items: start">
                            <v-col>
                                <v-list
                                    nav
                                    dense
                                    class="mt-1"

                                >
                                    <v-list-item-group
                                        v-model="selectedItem"
                                        color="primary"
                                    >
                                        <v-list-item-group
                                            v-model="selectedItem"
                                            color="primary"
                                        >

                                            <v-list-item-title class="black--text mt-2 linksFont">Status
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Tasdiqlovchi
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Guruhlash dedlayni
                                            </v-list-item-title>
                                        </v-list-item-group>

                                    </v-list-item-group>
                                </v-list>
                            </v-col>
                            <v-col>
                                <v-list
                                    nav
                                    dense

                                >
                                    <v-list-item-group
                                        v-model="selectedItem"
                                        color="primary"
                                        v-if="!access"
                                    >

                                        <v-list-item-group
                                            v-model="selectedItem"
                                            color="primary"
                                            v-if="!access"
                                        >
                                            <v-btn class="btns rounded-xl" elevation="0" dark
                                                   style="background:#27AE60 ">Tasdiqlandan
                                            </v-btn>
                                            <br>
                                            <v-list-item-title class="text--secondary mt-4 linksFont">Abu Ubayda ibn
                                                Huzayfa
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="text--secondary mt-4 linksFont">18.06.2021 - 3 kun
                                                qoldi
                                            </v-list-item-title>
                                        </v-list-item-group>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list-item>
                <v-container>
                    <v-row wrap class="pa-5">
                        <v-col cols="8">
                            <v-list-item-group
                                v-model="selectedItem"
                                color="primary"
                                class=" justify-space-between"
                            >
                                <v-list-item-title class="text--secondary  linksFont">Haqdorning ma’lumotlarini to’liq
                                    <br> holatga
                                    keltirish
                                </v-list-item-title>
                                <br>
                                <v-list-item-title class="text--secondary mt-4 linksFont">Haqdorni ta’minot bo’yicha
                                    guruhlash
                                </v-list-item-title>
                            </v-list-item-group>
                        </v-col>
                        <v-col cols="4">
                            <UserChecking2 ></UserChecking2>
                            <br><br>
                            <UserChecking3></UserChecking3>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import UserChecking2 from "./UserChecking2";
import UserChecking3 from "./UserCheking3";
import {mapGetters,} from 'vuex'

export default {
    data() {
        return {
            access: false,
            value: '',
            dialog: false,
            selectedItem: [],
            dialogRight: false,
        }
    },
    methods: {},
    computed: {
        ...mapGetters(['usersData'])
    },
    components: {
        UserChecking2,UserChecking3
    }
}
</script>

<style scoped>
.UserModal {
    justify-content: flex-start;
    max-height: 100% !important;
}
.v-slide-group__content {
    background: white!important;
}

.v-dialog--fullscreen {
    right: 0;
    left: auto!important;
}
.v-slide-group__content {
    background: none;
}
</style>

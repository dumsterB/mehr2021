<template>
<div>
    <v-dialog v-model="tableClicked" hide-overlay no-click-animation max-width="500" persistent fullscreen class="UserModal" transition="scroll-x-reverse-transition">

        <template v-slot:activator="{ on, attrs }">
            <img @click="tableClicked=true" v-bind="attrs" v-on="on" slot="activator" style="background: none!important;" src="../assets/ArrowDow.svg" alt="">
        </template>

        <v-card class="flex" style="justify-content: end!important;">
            <v-divider></v-divider>
            <v-list-item class="mt-2">
                <v-btn rounded elevation="0" v-if="!access" @click="access=!access" style="border: 1px solid lightgray">
                    <v-icon small class="mr-2">mdi-pencil</v-icon>
                    Tahrirlash
                </v-btn>
                <v-card-actions v-if="access">
                    <v-btn outlined class="rounded-xl btns " color="primary" elevation="0" @click="access=false" tile>Bekor qilish</v-btn>
                    <v-btn dark class="rounded-xl btns" elevation="0" color="primary" @click="access=false">Saqlash</v-btn>
                </v-card-actions>
                <v-spacer></v-spacer>
                <v-btn elevation="0" @click="tableClicked=false"><img src="@/assets/x.svg" alt=""></v-btn>
            </v-list-item>
            <v-container>
                <v-row wrap class="pa-5">
                    <v-col cols="8">
                        <v-list-item-group color="primary" class="d-flex justify-space-between">

                            <p style="font-size: 19px" class=" black--text d-flex  mt-2 linksFont">Abror Xoshimjonov
                                Alibekovich</p>

                        </v-list-item-group>
                    </v-col>
                    <v-col cols="4">
                        <v-list-item-title class="text--secondary mt-2 linksFont">10.06.2021 - 08:36
                        </v-list-item-title>
                    </v-col>
                </v-row>
            </v-container>
            <v-list-item>
                <v-container>
                    <v-row wrap>
                        <v-col>
                            <v-list nav dense class="mt-1" v-for="item of usersData" :key="item.title">
                                <v-list-item-group color="primary">
                                    <v-list-item-title class="black--text mt-2 linksFont" v-text="item.title"></v-list-item-title>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                        <v-col>
                            <v-list nav dense v-for="item of usersData" :key="item.title">
                                <v-list-item-group color="primary" v-if="!access">
                                    <v-list-item-title class="text--secondary mt-2 linksFont" v-text="item.description"></v-list-item-title>
                                </v-list-item-group>
                                <v-text-field v-if="access" :value="item.description" hide-details="auto"></v-text-field>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-container>
            </v-list-item>
        </v-card>
    </v-dialog>
    <br>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            access: false,
            value: '',
        }
    },
    methods: {},
    computed: {
        ...mapGetters(['usersData', 'tableClicked'])

    }
}
</script>

<style scoped>
.UserModal {
    max-height: 100% !important;
}
</style>

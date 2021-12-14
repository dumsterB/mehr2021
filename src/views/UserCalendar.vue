<template>
    <div>
        <v-dialog
            v-model="dialogRight"
            max-width="800"
            fullscreen
            class="UserModal "
            transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs"
                       v-on="on" class="primary">Click me to see modal window!
                </v-btn>
            </template>

            <v-card class="pa-5">
                <v-list-item class="mt-2">
                    <v-btn rounded elevation="0" v-if="!access" @click="access=!access"
                           style="border: 1px solid lightgray">
                        <v-icon small class="mr-2">mdi-pencil</v-icon>
                        Haqdorlar ro’yxati
                    </v-btn>

                    <v-card-actions v-if="access">
                        <v-btn outlined class="rounded-xl btns " color="primary" elevation="0" @click="access=false"
                               tile>Bekor qilish
                        </v-btn>
                        <v-btn dark class="rounded-xl btns" elevation="0" color="primary" @click="access=false">
                            Saqlash
                        </v-btn>
                    </v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn elevation="0" @click="dialogRight=false"><img src="@/assets/x.svg" alt=""></v-btn>
                </v-list-item>
                <v-container>
                    <v-row wrap class="pa-5">
                        <v-col cols="12">
                            <v-list-item-group
                                color="primary"
                                class="d-block justify-space-between"
                            >
                                <p style="font-size: 19px" class=" black--text d-flex  mt-2 linksFont">A12-iyun ta’minot
                                    kuni</p>
                                <v-divider class="justify-center"></v-divider>
                            </v-list-item-group>
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
                                            <v-list-item-title class="black--text mt-2 linksFont">Ta’min kuni
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Haqdorlar soni
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Guruh
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Kommentariya
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
                                    >
                                        <v-list-item-group
                                            v-model="selectedItem"
                                            color="primary"
                                        >
                                            <v-list-item-title class="text--secondary mt-4 linksFont">12.06.2021 -
                                                ertaga
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="text--secondary mt-4 linksFont">46 ta
                                            </v-list-item-title>
                                            <br>
                                            <v-btn class="btns rounded-xl" elevation="0" dark
                                                   style="background:#56CCF2 ">Haqdor
                                            </v-btn>
                                            <br><br>
                                            <v-textarea
                                                :disabled="!access"
                                                name="input-7-1"
                                                value="Comments...!"
                                                hint="Hint text"
                                            ></v-textarea>
                                        </v-list-item-group>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list-item>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapGetters,} from 'vuex'

export default {
    data() {
        return {
            access: false,
            switch1: false,
            value: '',
            tab: 'dicuments',
            dialog: false,
            items: [
                {tab: 'Ma’lumotlarni to’ldirish', content: 'Tab 1 Content', href: '#documents'},
                {tab: 'Mavjud ma’lumotlar', content: 'Tab 2 Content', chip: true, href: '#withoutdocuments'},
            ],
            selectedItem: [],
            dialogRight: false,
        }
    },
    methods: {},
    computed: {
        ...mapGetters(['usersData'])
    },
}
</script>

<style scoped>
.UserModal {
    justify-content: flex-start;
    max-height: 100vh !important;

}

.v-slide-group__content {
    background: none;
}
</style>

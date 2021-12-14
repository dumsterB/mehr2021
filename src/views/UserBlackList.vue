<template>
    <div>
        <v-dialog
            v-model="dialogRight"
            max-width="800"
            fullscreen
            class="UserModal "
            transition="scroll-x-reverse-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <img  v-bind="attrs"
                      v-on="on"  src="@/assets/ArrowDow.svg" alt="">
            </template>

            <v-card >
                <v-list-item class="mt-2">
                    <v-spacer></v-spacer>
                    <v-btn elevation="0" @click="dialogRight=false"><img src="@/assets/x.svg" alt=""></v-btn>
                </v-list-item>
                <v-container>
                    <v-row wrap class="pa-5">
                        <v-col cols="12">
                            <v-list-item-group
                                color="primary"
                                class=" justify-space-between"
                            >

                                <p style="font-size: 19px" class=" black--text d-flex  mt-2 linksFont">Abror Xoshimjonov
                                    Alibekovich</p>
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
                                            <v-list-item-title class="black--text mt-2 linksFont">Status
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Tasdiqlagan ma’sul
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Qora ro’yxatga olingan kun
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Tuman
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Manzil
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Sabab
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
                                            <v-btn class="btns rounded-xl" elevation="0" dark
                                                   style="background:#DA2C2C ">Qora ro’yxatda
                                            </v-btn>
                                            <br><br>
                                            <v-list-item-title class="text--secondary mt-2 linksFont">Huzayfa Baxromiy
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="text--secondary mt-2 linksFont">15.06.2021
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="text--secondary mt-2 linksFont">Yashnobod tumani
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="text--secondary mt-2 linksFont">Aviasozlar 4-27-89
                                            </v-list-item-title>
                                            <br>
                                            <v-textarea
                                                name="input-7-1"
                                                value="Ilojisi bo’lsa oilaga ko’proq kartoshka mahsulotlari yetkazilishini so’ramoqda."
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
            switch1:false,
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

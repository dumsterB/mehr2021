<template>
    <div>
        <v-row justify="center">
            <v-btn
                rounded
                elevation="0"
                large
                @click.stop="dialog = true"
                dark style="background:#2F80ED!important; "
                class="linksFont hidden-sm-and-down btns "

            >
                <v-icon left>
                    mdi-plus
                </v-icon>
                Yangi ariza
            </v-btn>

            <v-dialog
                v-model="dialog"
                max-width="350"
                class="rounded"
            >
                <v-card>
                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn class="modalBtnX"  @click="dialog=!dialog" elevation="0"><img   src="../assets/x.svg" alt=""></v-btn>
                    </v-card-actions>
                        <div class="pa-5">

                        <v-form
                            ref="form"

                            v-model="valid"
                            lazy-validation
                        >

                            <v-card-text class="mr-2 pa-1">
                                Ariza qayerdan keldi?
                            </v-card-text>
                            <v-select
                                :items="items"
                                label="Hatlov guruhi orqali"
                                outlined
                                dense
                                class=""
                            ></v-select>
                            <v-card-text class="mr-2 pa-1">
                                Ism, familiya
                            </v-card-text>
                            <v-text-field
                                dense
                                outlined
                                label="Akbariy Do’stqobilov"
                                required
                            ></v-text-field>
                            <v-card-text class="mr-2 pa-1">
                                Pasport ma’lumotlari
                            </v-card-text>
                            <div class="d-flex">
                                <v-text-field
                                    label="AC"
                                    dense
                                    class="mr-1"
                                    style="width: 30%"
                                    outlined
                                ></v-text-field>
                                <v-text-field
                                    class="ml-1"
                                    style="width: 70%"
                                    label="0092432"
                                    dense
                                    outlined

                                ></v-text-field>
                            </div>
                            <v-file-input
                                label="Pasport rasmini joylash"
                                class="inputFile"
                                outlined
                                dense
                            ></v-file-input>
                            <v-card-text class="mr-2 pa-1">
                                Farzand guvohnomasi
                            </v-card-text>

                            <v-text-field
                                label="7421882936"
                                outlined
                                dense
                            ></v-text-field>

                            <v-file-input
                                label="Guvohnoma rasmini joylash"
                                outlined
                                dense
                            ></v-file-input>
                            <v-card-actions>
                                <v-btn
                                    color="green lighten-2"

                                    text
                                >
                                    1/2
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn
                                    style=" background:#2F80ED!important;"
                                    dark
                                    elevation="0"
                                    class="mr-4 btns"
                                    @click="nextAriza"
                                >
                                    Davom etish
                                </v-btn>
                            </v-card-actions>

                        </v-form>
                    </div>
                </v-card>
            </v-dialog>
        </v-row>
        <v-row justify="center">
            <v-dialog
                v-model="dialog2"
                max-width="350"
                class="rounded"
            >
                <v-card>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn class="modalBtnX"  @click="dialog=!dialog" elevation="0"><img   src="../assets/x.svg" alt=""></v-btn>
                    </v-card-actions>
                    <div class="pa-5">
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <v-card-text class="mr-2 pa-1">
                                Manzil
                            </v-card-text>
                            <v-select
                                :items="items"
                                label="Yashnobod"
                                outlined
                                dense
                                class=""
                            ></v-select>

                            <v-text-field
                                dense
                                outlined
                                label="Aviasozlar 4-27-89"
                                required
                            ></v-text-field>
                            <v-card-text class="mr-2 pa-1">
                                Tel.raqam
                            </v-card-text>
                            <v-text-field
                                label="+998 (94) 627-17-68"
                                dense
                                class="mr-1"
                                outlined
                            ></v-text-field>
                            <v-card-text class="mr-2 pa-1">
                                O’lim qog’ozi
                            </v-card-text>
                            <v-file-input
                                label="Fayl joylash"
                                class="inputFile"
                                outlined
                                dense
                            ></v-file-input>
                            <v-card-text class="mr-2 pa-1">
                                Nikoh guvohnomasi
                            </v-card-text>
                            <v-text-field
                                label="Zaksdan o’tilgan"
                                outlined
                                dense
                            ></v-text-field>
                            <v-file-input
                                label="Zaks rasmini joylash"
                                outlined
                                dense
                            ></v-file-input>
                            <v-card-actions>
                                <v-btn
                                    color="green lighten-2"
                                    text
                                >
                                    2/2
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn
                                    color="primary"
                                    class="mr-4 btns"
                                    @click="send"
                                    style=" background:#2F80ED!important;"
                                    dark
                                    elevation="0"
                                >
                                    Tasdiqlash
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </div>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "NewAriza",
    data() {
        return {
            dialog: false,
            dialog2: false,
            valid: false,
            items: []

        }
    },
    methods: {
        nextAriza() {
            this.dialog = false
            this.dialog2 = true
        },
        send() {
            console.log()
        }
    }
}
</script>

<style scoped>
v-text-field__details {
    display: flex;
    flex: 1 0 auto;
    max-width: 100%;
    min-height: 2px;
    overflow: hidden;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-bottom: 1px !important;
}

.v-text-field__details {
    display: none;
}

.inputFile label[for] {
    color: blue !important;
}
</style>

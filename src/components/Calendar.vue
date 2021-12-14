<template>
<div>
    <v-tabs v-model="tab" color="black">
        <v-tab v-for="item in items" :key="item.tab" class="black--text btns" :href="item.href">
            {{ item.tab }}
            <v-chip v-if="item.chip" class="ma-2" color="red" small text-color="white">
                32
            </v-chip>
        </v-tab>

    </v-tabs>
    <v-divider></v-divider>
    <br>
    <v-tabs-items v-model="tab" class="grey lighten-5">
        <v-tab-item :key="1" value="documents">
            <v-row class="fill-height">
                <v-col>
                    <v-sheet height="600">
                        <v-calendar ref="calendar" v-model="value" color="primary" type="4day" :events="events" :event-color="getEventColor" :event-ripple="false" @change="getEvents" @mousedown:event="startDrag" @mousedown:time="startTime" @mousemove:time="mouseMove" @mouseup:time="endDrag" @mouseleave.native="cancelDrag">
                            <template v-slot:event="{ event, timed, eventSummary }">
                                <div class="v-event-draggable" v-html="eventSummary()"></div>
                                <div v-if="timed" class="v-event-drag-bottom" @mousedown.stop="extendBottom(event)"></div>
                            </template>
                        </v-calendar>
                    </v-sheet>
                </v-col>
            </v-row>
            <br>
            <UserCalendar></UserCalendar>
        </v-tab-item>
    </v-tabs-items>
    <v-tabs-items v-model="tab" class="grey lighten-5">
        <v-tab-item :key="1" value="withoutdocuments"><br>
            <div class="d-flex grey lighten-5 ">
                <v-row class="grey lighten-5">
                    <v-col class="d-flex grey lighten-5 justify-space-between" cols="8">
                        <div class="d-flex">
                            <img src="../assets/1circle.png" width="10" height="10" class="mt-1 mr-2" alt="">
                            <p>Ta’minot bo’yicha</p>
                        </div>
                        <div class="d-flex">
                            <img src="../assets/2.png" width="10" height="10" class="mt-1 mr-2" alt="">
                            <p>Ta’minot bo’yicha</p>
                        </div>
                        <div class="d-flex">
                            <img src="@/assets/1.png" width="10" height="10" class="mt-1 mr-2" alt="">
                            <p>Ta’minot bo’yicha</p>
                        </div>
                        <div class="d-flex">
                            <img src="@/assets/Ellipse3.png" width="10" height="10" class="mt-1 mr-2" alt="">
                            <p>Ta’minot bo’yicha</p>
                        </div>
                    </v-col>
                </v-row>

            </div>
            <div class="grey lighten-5 text-center">
                <v-container>
                    <v-row class="grey lighten-5 text-center">
                        <v-col cols="3">
                            <p class="font-weight-medium">Kechikayotgan</p>
                            <p>19 ta vazifa</p>
                        </v-col>
                        <v-col cols="3">
                            <p class="font-weight-medium">Bugun</p>
                            <p>19 ta vazifa</p>
                        </v-col>
                        <v-col cols="3">
                            <p class="font-weight-medium">Ertaga</p>
                            <p>19 ta vazifa</p>
                        </v-col>
                        <v-col cols="3">
                            <p class="font-weight-medium">Indinga</p>
                            <p>19 ta vazifa</p>
                        </v-col>
                    </v-row>
                    <v-row class="grey lighten-5">
                          <v-col cols="3" class="grey lighten-5 d-flex">
                            <span style="border-right: 3px solid #BB6BD9; height: 80px; justify-content: center;align-items: center;align-self: center"></span>
                            <v-card elevation="0" width="260" height="170" class="pa-4 green lighten-5  rounded-xl">
                                <h4 class="text--primary font-weight-medium  linksFont text-start">Arizachilar taftishdan
                                    o’tishi, tasdiq yoki qora
                                    ro’yxatga kiritilishi kerak
                                </h4>
                                <br>
                                <div class="d-flex">
                                    <div>
                                        <h5 class="text--secondary  text-left">Ma’sul:Taftish </h5>
                                        <h5 class="text--secondary text-left mt-2">12 ta arizachi</h5>
                                    </div>
                                    <img src="@/assets/ArrowDowPurple.svg" class="ml-15" style="color: #BB6BD9" alt="">
                                </div>

                            </v-card>
                        </v-col>
                        <v-col cols="3" class="grey lighten-5 d-flex">
                            <span style="border-right: 3px solid #BB6BD9;  height: 80px; justify-content: center;align-items: center;align-self: center"></span>
                            <v-card elevation="0" width="260" height="170"  style="" class="pa-4 yellow lighten-5   rounded-xl">
                                <h4 class="text--primary font-weight-medium  linksFont text-start">Arizachilar taftishdan
                                    o’tishi, tasdiq yoki qora
                                    ro’yxatga kiritilishi kerak
                                </h4>
                                <br>
                                <div class="d-flex">
                                    <div>
                                        <h5 class="text--secondary  text-left">Ma’sul:Taftish </h5>
                                        <h5 class="text--secondary text-left mt-2">12 ta arizachi</h5>
                                    </div>
                                    <img src="@/assets/ArrowDowPurple.svg" class="ml-15" style="color: #BB6BD9" alt="">
                                </div>

                            </v-card>
                        </v-col>
                        <v-col cols="3" class="grey lighten-5 d-flex">
                            <span style="border-right: 3px solid #C8E6C9; height: 80px; justify-content: center;align-items: center;align-self: center"></span>
                            <v-card elevation="0" width="260" height="170" class="pa-4 green lighten-5  rounded-xl">
                                <h4 class="text--primary font-weight-medium  linksFont text-start">Arizachilar taftishdan
                                    o’tishi, tasdiq yoki qora
                                    ro’yxatga kiritilishi kerak
                                </h4>
                                <br>
                                <div class="d-flex">
                                    <div>
                                        <h5 class="text--secondary  text-left">Ma’sul:Taftish </h5>
                                        <h5 class="text--secondary text-left mt-2">12 ta arizachi</h5>
                                    </div>
                                    <img src="@/assets/ArrowDowPurple.svg" class="ml-15" style="color: #BB6BD9" alt="">
                                </div>

                            </v-card>
                        </v-col>
                        <v-col cols="3" class="grey lighten-5 d-flex">
                            <span style="border-right: 3px solid #BB6BD9; height: 80px; justify-content: center;align-items: center;align-self: center"></span>
                            <v-card elevation="0" width="260" height="170" class="pa-5 light-blue lighten-5  rounded-xl">
                                <h4 class="text--primary font-weight-medium  linksFont text-start">Arizachilar taftishdan
                                    o’tishi, tasdiq yoki qora
                                    ro’yxatga kiritilishi kerak
                                </h4>
                                <br>
                                <div class="d-flex">
                                    <div>
                                        <h5 class="text--secondary  text-left">Ma’sul:Taftish </h5>
                                        <h5 class="text--secondary text-left mt-2">12 ta arizachi</h5>
                                    </div>
                                    <img src="@/assets/ArrowDowPurple.svg" class="ml-15" style="color: #BB6BD9" alt="">
                                </div>

                            </v-card>
                        </v-col>
                    </v-row>
                    <br><br>
                        <v-row class="grey lighten-5">
                          <v-col cols="3" class="grey lighten-5 d-flex">
                            <span style="border-right: 3px solid #C8E6C9; height: 80px; justify-content: center;align-items: center;align-self: center"></span>
                            <v-card elevation="0" width="260" height="170" class="pa-4 green lighten-5  rounded-xl">
                                <h4 class="text--primary font-weight-medium  linksFont text-start">Arizachilar taftishdan
                                    o’tishi, tasdiq yoki qora
                                    ro’yxatga kiritilishi kerak
                                </h4>
                                <br>
                                <div class="d-flex">
                                    <div>
                                        <h5 class="text--secondary  text-left">Ma’sul:Taftish </h5>
                                        <h5 class="text--secondary text-left mt-2">12 ta arizachi</h5>
                                    </div>
                                    <img src="@/assets/ArrowDowPurple.svg" class="ml-15" style="color: #BB6BD9" alt="">
                                </div>

                            </v-card>
                        </v-col>
                        <v-col cols="3" class="grey lighten-5 d-flex">
                            <span style="border-right: 3px solid #BB6BD9;  height: 80px; justify-content: center;align-items: center;align-self: center"></span>
                            <v-card elevation="0" width="260" height="170"  style="" class="pa-4 yellow lighten-5   rounded-xl">
                                <h4 class="text--primary font-weight-medium  linksFont text-start">Arizachilar taftishdan
                                    o’tishi, tasdiq yoki qora
                                    ro’yxatga kiritilishi kerak
                                </h4>
                                <br>
                                <div class="d-flex">
                                    <div>
                                        <h5 class="text--secondary  text-left">Ma’sul:Taftish </h5>
                                        <h5 class="text--secondary text-left mt-2">12 ta arizachi</h5>
                                    </div>
                                    <img src="@/assets/ArrowDowPurple.svg" class="ml-15" style="color: #BB6BD9" alt="">
                                </div>

                            </v-card>
                        </v-col>
                        <v-col cols="3" class="grey lighten-5 d-flex">
                            <span style="border-right: 2px solid #6FCF97; height: 80px; justify-content: center;align-items: center;align-self: center"></span>
                            <v-card elevation="0" width="260" height="170" class="pa-4 green lighten-5  rounded-xl">
                                <h4 class="text--primary font-weight-medium  linksFont text-start">Arizachilar taftishdan
                                    o’tishi, tasdiq yoki qora
                                    ro’yxatga kiritilishi kerak
                                </h4>
                                <br>
                                <div class="d-flex">
                                    <div>
                                        <h5 class="text--secondary  text-left">Ma’sul:Taftish </h5>
                                        <h5 class="text--secondary text-left mt-2">12 ta arizachi</h5>
                                    </div>
                                    <img src="@/assets/ArrowDowPurple.svg" class="ml-15" style="color: #BB6BD9" alt="">
                                </div>

                            </v-card>
                        </v-col>
                        <v-col cols="3" class="grey lighten-5 d-flex">
                            <span style="border-right: 3px solid #BB6BD9; height: 80px; justify-content: center;align-items: center;align-self: center"></span>
                            <v-card elevation="0" width="260" height="170" class="pa-5 light-blue lighten-5  rounded-xl">
                                <h4 class="text--primary font-weight-medium  linksFont text-start">Arizachilar taftishdan
                                    o’tishi, tasdiq yoki qora
                                    ro’yxatga kiritilishi kerak
                                </h4>
                                <br>
                                <div class="d-flex">
                                    <div>
                                        <h5 class="text--secondary  text-left">Ma’sul:Taftish </h5>
                                        <h5 class="text--secondary text-left mt-2">12 ta arizachi</h5>
                                    </div>
                                    <img src="@/assets/ArrowDowPurple.svg" class="ml-15" style="color: #BB6BD9" alt="">
                                </div>

                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-tab-item>
    </v-tabs-items>
</div>
</template>

<script>
import UserCalendar from "../views/UserCalendar";
export default {
    data() {
        return {
            tab: 'dicuments',
            selected: '',
            active: false,
            menu: false,
            items: [{
                    tab: 'Yangilar',
                    content: 'Tab 1 Content',
                    href: '#documents'
                },
                {
                    tab: 'Hujjatsizlar',
                    content: 'Tab 2 Content',
                    chip: true,
                    href: '#withoutdocuments'
                },

            ],
            dialog: false,
            value: '',
            events: [],
            colors: ['#2196F3', '#3F51B5', '#673AB7', '#00BCD4', '#4CAF50', '#FF9800', '#757575'],
            names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
            dragEvent: null,
            dragStart: null,
            createEvent: null,
            createStart: null,
            extendOriginal: null,

        }
    },
    methods: {
        startDrag({
            event,
            timed
        }) {
            if (event && timed) {
                this.dragEvent = event
                this.dragTime = null
                this.extendOriginal = null
            }
        },
        startTime(tms) {
            const mouse = this.toTime(tms)

            if (this.dragEvent && this.dragTime === null) {
                const start = this.dragEvent.start

                this.dragTime = mouse - start
            } else {
                this.createStart = this.roundTime(mouse)
                this.createEvent = {
                    name: `Event #${this.events.length}`,
                    color: this.rndElement(this.colors),
                    start: this.createStart,
                    end: this.createStart,
                    timed: true,
                }

                this.events.push(this.createEvent)
            }
        },
        extendBottom(event) {
            this.createEvent = event
            this.createStart = event.start
            this.extendOriginal = event.end
        },
        mouseMove(tms) {
            const mouse = this.toTime(tms)

            if (this.dragEvent && this.dragTime !== null) {
                const start = this.dragEvent.start
                const end = this.dragEvent.end
                const duration = end - start
                const newStartTime = mouse - this.dragTime
                const newStart = this.roundTime(newStartTime)
                const newEnd = newStart + duration

                this.dragEvent.start = newStart
                this.dragEvent.end = newEnd
            } else if (this.createEvent && this.createStart !== null) {
                const mouseRounded = this.roundTime(mouse, false)
                const min = Math.min(mouseRounded, this.createStart)
                const max = Math.max(mouseRounded, this.createStart)

                this.createEvent.start = min
                this.createEvent.end = max
            }
        },
        endDrag() {
            this.dragTime = null
            this.dragEvent = null
            this.createEvent = null
            this.createStart = null
            this.extendOriginal = null
        },
        cancelDrag() {
            if (this.createEvent) {
                if (this.extendOriginal) {
                    this.createEvent.end = this.extendOriginal
                } else {
                    const i = this.events.indexOf(this.createEvent)
                    if (i !== -1) {
                        this.events.splice(i, 1)
                    }
                }
            }

            this.createEvent = null
            this.createStart = null
            this.dragTime = null
            this.dragEvent = null
        },
        roundTime(time, down = true) {
            const roundTo = 15 // minutes
            const roundDownTime = roundTo * 60 * 1000

            return down ?
                time - time % roundDownTime :
                time + (roundDownTime - (time % roundDownTime))
        },
        toTime(tms) {
            return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime()
        },
        getEventColor(event) {
            const rgb = parseInt(event.color.substring(1), 16)
            const r = (rgb >> 16) & 0xFF
            const g = (rgb >> 8) & 0xFF
            const b = (rgb >> 0) & 0xFF

            return event === this.dragEvent ?
                `rgba(${r}, ${g}, ${b}, 0.7)` :
                event === this.createEvent ?
                `rgba(${r}, ${g}, ${b}, 0.7)` :
                event.color
        },
        getEvents({
            start,
            end
        }) {
            const events = []

            const min = new Date(`${start.date}T00:00:00`).getTime()
            const max = new Date(`${end.date}T23:59:59`).getTime()
            const days = (max - min) / 86400000
            const eventCount = this.rnd(days, days + 20)

            for (let i = 0; i < eventCount; i++) {
                const timed = this.rnd(0, 3) !== 0
                const firstTimestamp = this.rnd(min, max)
                const secondTimestamp = this.rnd(2, timed ? 8 : 288) * 900000
                const start = firstTimestamp - (firstTimestamp % 900000)
                const end = start + secondTimestamp

                events.push({
                    name: this.rndElement(this.names),
                    color: this.rndElement(this.colors),
                    start,
                    end,
                    timed,
                })
            }

            this.events = events
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
        rndElement(arr) {
            return arr[this.rnd(0, arr.length - 1)]
        },
    },
    components: {
        UserCalendar
    }
}
</script>

<style scoped>
.linksFont {
    font-family: Gilroy;
}

.v-slide-group__content {
    background: #FBFBFB;
}

table td {
    border: none;
}

.theme--light.v-calendar-daily .v-calendar-daily__intervals-head {
    display: none !important;
}

.theme--light.v-calendar-daily .v-calendar-daily__intervals-head {
    border-right: #e0e0e0 1px solid;
    display: none;
}

.v-calendar-daily__intervals-body {
    flex: none;
    display: none;
}
</style>

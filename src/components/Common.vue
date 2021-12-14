<template>
<div>
    <v-container class="hidden-sm-and-down pa-2">
        <v-row>
            <v-col cols="6">
                <p class="text--primary  linksFont font-weight-medium">
                    Sonlar
                </p>
                <v-row>
                    <v-col cols="4" class="" md="4" sm="12" v-for="card of cards.slice(0,3)" :key="card.title" width="200">
                        <v-card elevation="0" class="pa-5 rounded-lg" style="height:280px;width:220px">
                            <img :src="card.src" alt="">
                            <p class="text--secondary font-weight-medium  mt-10 linksFont" v-html="card.title">
                            </p>
                            <h1 class="linksFont">{{card.number}} ta</h1>
                            <p style="color: #27AE60" class="linksFont">12ta</p>
                        </v-card>
                    </v-col>
                </v-row>
                <v-col>
                    <v-sheet height="400" class="mt-5" width="100%">
                        <v-calendar ref="calendar" v-model="value" color="primary" type="4day" :events="events" :event-color="getEventColor" :event-ripple="false" @change="getEvents" @mousedown:event="startDrag9" @mousedown:time="startTime" @mousemove:time="mouseMove" @mouseup:time="endDrag" @mouseleave.native="cancelDrag">
                            <template v-slot:event="{ event, timed, eventSummary }">
                                <div class="v-event-draggable" v-html="eventSummary()"></div>
                                <div v-if="timed" class="v-event-drag-bottom" @mousedown.stop="extendBottom(event)"></div>
                            </template>
                        </v-calendar>
                    </v-sheet>
                </v-col>
            </v-col>
            <v-col cols="6">
                <p class="text--primary   font-weight-medium">
                    Ta’minot turlari
                </p>
                <v-row>
                    <v-col v-for="card of cards1" :key="card.number" cols="6" md="6">
                        <v-card elevation="0" width="260" height="140" class="pa-4 CardTaminot   rounded-lg">
                            <p class="text--secondary mt-5 ml-3 linksFont">1 guruh <br>
                            </p>
                            <div class="d-flex ml-3">
                                <h2 class="font-weight-black d-flex linksFont">10222 ta</h2>
                                <img class="cardTaminotIcon " src="@/assets/ArrowDow.svg" alt="">
                            </div>
                        </v-card>
                    </v-col>
                    <v-card elevation="0" width="95%" height="150" style="  margin-top: 40px;" class="pa-5  mt-2 rounded-xl ml-2">
                        <div class="text-center">
                            <img class="text-center" src="@/assets/Group 36.svg" alt="">
                            <p class="text--secondary mt-5 text-center  linksFont">Yangi tur qo’shish <br>
                            </p>
                        </div>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <!-- adoptation -->
    <v-container class="hidden-md-and-up">
        <p class="text--primary mt-2 font-weight-medium linksFont">
            Sonlar
        </p>
        <v-row>
            <v-col cols="6" class="" md="6" sm="4" v-for="card of cards" :key="card.title" width="200" height="400">
                <v-card elevation="0" class="pa-5 rounded-lg">
                    <img :src="card.src" alt="">
                    <p class="text--secondary mt-5 linksFont" v-html="card.title">
                    </p>
                    <h2 class="font-weight-black linksFont">1022 ta</h2>
                    <p style="color: #27AE60" class="linksFont">12ta</p>
                </v-card>
            </v-col>
        </v-row>
        <br>
        <p class="text--primary mt-2 linksFont font-weight-medium">
            Ta’minot turlari
        </p>
        <v-row>
            <v-col v-for="card of cards1" :key="card.number" cols="6" md="6">
                <v-card elevation="0" class="pa-4 CardTaminot rounded-lg">
                    <p class="cardNumber1 ml-3">1 guruh <br>
                    </p>
                    <div class="d-flex ml-3">
                        <h3 class="cardNumber">1022</h3>
                        <img class="ml-15" src="@/assets/ArrowDow.svg" alt="">
                    </div>
                </v-card>
            </v-col>
            <v-card elevation="0" width="100%" height="140" style=" margin-left: 8px; margin-top: 40px;" class="pa-5  mt-2 rounded-xl">
                <div class="text-center">
                    <img class="text-center" src="@/assets/Group 36.svg" alt="">
                    <p class="text--secondary mt-5 text-center  linksFont">Yangi tur qo’shish <br>
                    </p>
                </div>
            </v-card>
        </v-row>
        <v-row class="fill-height">
            <v-col>
                <v-sheet height="600">
                    <v-calendar ref="calendar" v-model="value" color="primary" type="4day" :events="events" :event-color="getEventColor" :event-ripple="false" @change="getEvents" @mousedown:event="startDrag9" @mousedown:time="startTime" @mousemove:time="mouseMove" @mouseup:time="endDrag" @mouseleave.native="cancelDrag">
                        <template v-slot:event="{ event, timed, eventSummary }">
                            <div class="v-event-draggable" v-html="eventSummary()"></div>
                            <div v-if="timed" class="v-event-drag-bottom" @mousedown.stop="extendBottom(event)"></div>
                        </template>
                    </v-calendar>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: "Main.vue",
    data() {
        return {

            cards: [{
                    title: 'Haqdorlarni <br>  miqdori  ',
                    src: require('@/assets/Group 15.svg'),
                    number: 230,
                },
                {
                    title: 'Qora ro’yxat <br> miqdari  ',
                    src: require('@/assets/Iconred.svg'),
                    number: 139
                },
                {
                    title: 'Taftishdagilar <br> miqdorii  ',
                    src: require('@/assets/Icon.svg'),
                    number: 54
                },
                {
                    title: 'Taftishdagilar <br> miqdori  ',
                    src: require('@/assets/Icon.svg'),
                    number: 2030
                },
            ],
            cards1: [{
                    title: ' 1 guruh ',
                    src: require('@/assets/Group 15.svg'),
                    number: 2030
                },
                {
                    title: '1 guruh',
                    src: require('@/assets/Iconred.svg'),
                    number: 1022
                },
                {
                    title: ' 1 guruh ',
                    src: require('@/assets/Group 15.svg'),
                    number: 2031
                },
                {
                    title: '1 guruh',
                    src: require('@/assets/Iconred.svg'),
                    number: 1023
                },
                {
                    title: '1 guruh',
                    src: require('@/assets/Iconred.svg'),
                    number: 1024
                },
                {
                    title: '1 guruh',
                    src: require('@/assets/Iconred.svg'),
                    number: 1025
                },
                {
                    title: '1 guruh',
                    src: require('@/assets/Iconred.svg'),
                    number: 1026
                },
                {
                    title: '1 guruh',
                    src: require('@/assets/Iconred.svg'),
                    number: 1029,
                    newAdd: true
                },
            ],
            value: '',
            events: [],
            colors: ['#2196F3', '#3F51B5', '#673AB7', '#00BCD4', '#4CAF50', '#FF9800', '#757575'],
            names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
            dragEvent: null,
            dragStart: null,
            createEvent: null,
            startDrag9: "",
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
}
</script>

<style scoped>
.cardNumber1 {
    display: flex;
}

.cardNumber {
    display: flex;
    font-weight: 600;
    margin-top: 10px;
}

.cardTaminotIcon {
    margin-left: 40px;
}

@media (min-width: 1400px) {
    .cardTaminotIcon {
        margin-left: 80px;
    }
}

@media (min-width: 1600px) {
    .CardTaminot {
        width: 320px !important;
        height: 120px;
    }

    .cardTaminotIcon {
        margin-left: 60px;
    }
}
@media (min-width: 1800px) {


    .cardTaminotIcon {
        margin-left: 130px;
    }
}
</style>

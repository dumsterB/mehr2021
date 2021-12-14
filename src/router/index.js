import Vue from 'vue'
import Router from 'vue-router'
import Report from "../components/Report";
import Cheking from "../components/Cheking";
import Deserving from "../components/Deserving";
import BlackList from "../components/BlackList";
import Calendar from "../components/Calendar";
import Common from "../components/Common";

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            component: Common,
            name:"Common",

        },
        {
            path: '/report',
            component: Report,
            name:"Report",
        },
        {
            path: '/cheking',
            component:Cheking,
            name:"Cheking",
        },

        {
            path: '/deserving',
            component:Deserving,
            name:"Deserving",
        },
        {
            path: '/blacklist',
            component:BlackList,
            name:"Blacklist",
        },
        {
            path: '/calendar',
            component:Calendar,
            name:"Calendar",
        },
    ],
    mode:'history'
})

export default router

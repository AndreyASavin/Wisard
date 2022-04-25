import VueRouter from 'vue-router';
import firstStep from '@/components/firstStep.vue';
import secondStep from '@/components/secondStep.vue';
import thirdStep from '@/components/thirdStep.vue';
import fourthStep from '@/components/fourthStep.vue';
import fifthStep from '@/components/fifthStep.vue';
import Vue from 'vue';
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
    {path:"/first", name:"First", component: firstStep},
    {path:"/second", name:"Second", component: secondStep},
    {path:"/third", name:"Third", component: thirdStep},
    {path:"/fourth", name:"Fourth", component: fourthStep},
    {path:"/fifth", name:"Fifth", component: fifthStep}
    ],
    mode:'history',
    base:process.env.BASE_URL
})

export default router;
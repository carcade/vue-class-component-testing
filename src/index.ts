import {createApp} from 'vue';
import 'src/styles/main.scss';
import App from 'src/components/App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import PersonPage from 'src/components/PersonPage.vue';
import AboutPage from 'src/components/AboutPage.vue';

const routes = [
    { path: '/', component: PersonPage },
    { path: '/about', component: AboutPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');
import Vue from 'vue';
import 'src/styles/main.scss';
import App from 'src/components/App.vue';

new Vue({
    render: h => h(App),
}).$mount('#app');

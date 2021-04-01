<template>
    <div>
        <div class="w-full min-h-screen flex items-stretch md:items-center justify-center">
            <div class="w-1/2 flex flex-col">
                <div class="w-full flex justify-center mb-3" style="height: 50px;">
                    <router-link to="/" class="p-3 border border-gray-800 rounded block mr-3">Главная</router-link>
                    <router-link to="/about" class="p-3 border border-gray-800 rounded block">О сайте</router-link>
                </div>
                <div class="flex w-full justify-center">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ClassPersonCard from 'src/components/ClassPersonCard.vue';
import {Options, Vue} from "vue-property-decorator";

@Options({name: 'App', components: {ClassPersonCard}})
export default class App extends Vue {

}
</script>


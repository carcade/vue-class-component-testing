<template>
    <div class="w-full min-h-screen flex items-stretch md:items-center justify-center">
        <class-person-card
            :title="title"
            :person="person"
        />

    </div>
</template>

<script lang="ts">
import ClassPersonCard from 'src/components/ClassPersonCard.vue';
import Person from 'src/models/Person';
import Job from 'src/models/Job';
import { Vue, Options, Provide } from "vue-property-decorator";

@Options({name: 'App', components: {ClassPersonCard}})
export default class App extends Vue {
    @Provide() title = 'Карточка контакта';
    @Provide() person!: Person;

    created() {
        const jobs: Job[] = [];
        jobs.push(new Job('Газпром', '01.01.2010', '01.02.2013'));
        jobs.push(new Job('Роснефть', '01.03.2013', '10.02.2015'));
        jobs.push(new Job('Татнефть', '11.02.2015', '11.02.2020'));

        this.person = new Person('Иван', 'Иванов', 20, jobs);
    }
}
</script>


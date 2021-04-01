<template>
    <div class="w-full">
        <class-person-card
            :title="title"
            :person="person"
            @message="showMessage"
            ref="card"
            class="mx-auto mb-3"
        >
        </class-person-card>

        <button @click="card.hideComment" class="border border-black rounded p-3 mb-3 block mx-auto">Скрыть комментарий через ref</button>
    </div>
</template>

<script lang="ts">
import {Options, Ref, Vue} from 'vue-property-decorator';
import Person from 'src/models/Person';
import Job from 'src/models/Job';
import ClassPersonCard from 'src/components/ClassPersonCard.vue';

@Options({components: {ClassPersonCard}})
export default class PersonPage extends Vue {
    @Ref()
    public readonly card!: ClassPersonCard;

    public title = 'Карточка контакта';

    public person!: Person;

    public created(): void {
        const jobs: Job[] = [];
        jobs.push(new Job('Газпром', '01.01.2010', '01.02.2013'));
        jobs.push(new Job('Роснефть', '01.03.2013', '10.02.2015'));
        jobs.push(new Job('Татнефть', '11.02.2015', '11.02.2020'));

        this.person = new Person('Иван', 'Иванов', 20, jobs);
    }

    public showMessage(message: string): void {
        alert(message);
    }
}
</script>

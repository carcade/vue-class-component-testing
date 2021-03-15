<template>
    <div class="bg-gray-300 w-full lg:w-1/2 xl:w-1/3 border p-5 rounded">
        <div class="text-2xl text-center mb-8">
            {{ title }} - {{ name }}
        </div>

        <div class="mb-5">
            <strong>Имя:</strong> {{ person.firstName }}<br>
            <strong>Фамилия:</strong> {{ person.lastName }}<br>
            <strong>Возраст:</strong> {{ person.age }}<br>
        </div>

        <object-job-card :jobs="person.jobs"/>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Options } from 'vue-property-decorator';
import Person from 'src/models/Person';
import ObjectJobCard from 'src/components/ObjectJobCard.vue';

@Options({components: {ObjectJobCard}})
export default class ClassPersonCard extends Vue {
    @Prop()
    public title!: string;

    @Prop()
    public person!: Person;

    public get name() {
        return `${this.person.lastName} ${this.person.firstName}`;
    }
}
</script>

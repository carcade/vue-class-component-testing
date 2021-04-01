<template>
    <div class="bg-gray-300 w-full lg:w-1/2 border p-5 rounded">
        <div class="text-2xl text-center mb-8">
            {{ title }} - {{ name }}
        </div>

        <div class="mb-5">
            <strong>Имя:</strong> {{ person.firstName }}<br>
            <strong>Фамилия:</strong> {{ person.lastName }}<br>
            <strong>Возраст:</strong> {{ person.age }}<br>
        </div>

        <div v-show="isCommentVisible" class="mb-3">
            <input v-model="comment" type="text" class="border border-black p-2">
            Длина: {{ commentLength }}
        </div>

        <button class="border border-black rounded p-3 mb-3" @click="emitMessage">Вывести сообщение</button>

        <object-job-card :jobs="person.jobs"></object-job-card>
    </div>
</template>

<script lang="ts">
import {Vue, Prop, Options, Emit, Watch} from 'vue-property-decorator';
import Person from 'src/models/Person';
import ObjectJobCard from 'src/components/ObjectJobCard.vue';

@Options({components: {ObjectJobCard}})
export default class ClassPersonCard extends Vue {
    @Prop()
    public title!: string;

    @Prop()
    public person!: Person;

    public comment: string = '';

    public commentLength: number = 0;

    public isCommentVisible: boolean = true;

    public get name() {
        return `${this.person.lastName} ${this.person.firstName}`;
    }

    public hideComment() {
        this.isCommentVisible = false;
    }

    @Emit('message')
    public emitMessage(): string {
        return 'Сообщение из компонента ClassPersonCard';
    }

    @Watch('comment')
    public onCommentChanged(): void {
        // Вообще данная задача должна решаться с помощью вычисляемого свойства, но здесь сделано через Watch, чтобы
        // протестировать Watch декоратор
        this.commentLength = this.comment.length;
    }
}
</script>

import Job from 'src/models/Job';

export default class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public jobs: Job[],
    ) {
        //
    }
}
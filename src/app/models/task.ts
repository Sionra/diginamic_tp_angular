export class Task {

    id: string;

    constructor(
        public nom: string,
        public description: string,
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
    }
}
import { Task } from "./task";

export class User{

    id: string;

    constructor(
        public nom: string,
        public prenom: string,
        public email: string,
        public taskList: Task[]
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
    }

    addTask(task: Task){
        if(!this.taskList){
            this.taskList = [];
        }
        this.taskList.push(task);
    }

    removeTask(task: Task){
        if(this.taskList){
            this.taskList = this.taskList.filter(t => t.id !== task.id);
        }
    }

}
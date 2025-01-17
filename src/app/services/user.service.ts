import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Task } from "../models/task";

@Injectable({
  providedIn: "root"
})
export class UserService {
    private users: User[] = [
             new User ('John', 'Doe', 'John@Doe.com', [new Task('Task 1', 'Je suis une tâches'), new Task('Task 2', 'Je suis deux tâches')]),
             new User ('Bistro', 'Alonzo', 'Alonzo@Bistro.com', [new Task('Task 3', 'Je suis trois tâches'), new Task('Task 4', 'Je suis quatre tâches')]),
             new User ('ToHeaven', 'Stairway', 'S@th.com', [new Task('Task 5', 'Je suis cinq tâches'), new Task('Task 6', 'Je suis six tâches')]),
        ];

        getUsers(){
            return [...this.users];
        }

        getUserById(id: string){
            const result = this.users.find(u => u.id === id);
            if ( result ){
                return result;
            } else {
                throw new Error('User not found 😢');
            }
        }
}
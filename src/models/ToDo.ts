//models/ToDo.ts
export class ToDo{
    id: number;
    task: string;
    priority: number;
    isDone: boolean;

    constructor (id: number, task: string, priority: number, isDone: boolean){
        this.id = id;
        this.task = task;
        this.priority = priority;
        this.isDone = isDone;
    }
}